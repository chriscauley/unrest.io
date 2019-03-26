import _ from 'lodash'
import { expect } from 'chai'

import uR from '../'
const { Model, Int, StorageManager } = uR.db

class BaseModel extends Model {
  static manager = StorageManager
}

export default () => {
  it('serializes itself to the correct value', () => {
    class OneTwoThree extends BaseModel {
      static slug = "model.OneTwoThree"
      static fields = {
        one: 1,
        two: 2,
        three: 3,
      }
    }

    const ott = new OneTwoThree()
    OneTwoThree.objects.save(ott)
    console.log(ott.id)

    expect(ott.serialize()).to.deep.equal({ one: 1, two: 2, three: 3, id: 1 })
    const new_values = {
      one: 4,
      two: 5,
      three: 6,
    }
    Object.assign(ott, new_values)
    new_values.id = 1
    expect(ott.serialize()).to.deep.equal(new_values)
  })

  it('tracks ids independently of classes', done => {
    class A extends BaseModel {
      static slug = "model.A"
    }
    class B extends BaseModel {
      static slug = "model.B"
    }

    A.__makeMeta()
    B.__makeMeta()

    const makeThree = cls => Promise.all(
      _.range(3).map( () => cls.objects.create())
    )
    
    Promise.all([
      makeThree(A),
      makeThree(B),
    ]).then(([as,bs]) => {
      const a_ids = as.map(a=>a.id)
      const b_ids = bs.map(b=>b.id)
      expect(a_ids).to.deep.equal([1, 2, 3])
      expect(a_ids).to.deep.equal(b_ids)
      console.log(a_ids,b_ids)
      done()
    })
  })

  it('Primitives are converted to proper types', () => {
    const out = {
      i: 1,
      s: 'some string',
    }
    class Explicit extends BaseModel {
      static slug = "model.Explicit"
      static fields = {
        i: uR.db.Int(1, { required: true }),
        s: uR.db.String('some string'),
      }
    }
    class Implicit extends BaseModel {
      static slug = "model.Implicit"
      static fields = { ...out }
    }
    const exp = new Explicit()
    const imp = new Implicit()
    expect(exp.serialize()).to.deep.equal(imp.serialize())
  })

  it('Validators work', () => {
    class V extends BaseModel {
      static slug = "model.V"
      static fields = {
        i: 1,
        s: 'some string',
      }
    }

    const fails = [
      o => (o.i = 'arst'), // set an int to a string
      o => (o.s = 1), // set a string to an int
    ]
    fails.forEach(f => {
      const f2 = () => {
        const a = new V()
        f(a)
        a.serialize()
      }
      expect(f2).to.throw()
    })
  })
}
