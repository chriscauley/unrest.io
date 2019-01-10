import _ from 'lodash'
import { expect } from 'chai'

import uR from '../'
const { Model } = uR.db

export default () => {
  it('serializes itself to the correct value', () => {
    class OneTwoThree extends Model {
      static fields = {
        one: 1,
        two: 2,
        three: 3,
      }
    }

    const ott = new OneTwoThree()

    expect(ott.serialize()).to.deep.equal({ one: 1, two: 2, three: 3 })
    const new_values = {
      one: 4,
      two: 5,
      three: 6,
    }
    Object.assign(ott, new_values)
    expect(ott.serialize()).to.deep.equal(new_values)
  })

  it('tracks ids independently of classes', () => {
    class A extends Model {}
    class B extends Model {}

    const as = _.range(3).map(_i => new A().id)
    const bs = _.range(3).map(_i => new B().id)
    expect({ a: 1 }).to.deep.equal({ a: 1 })

    expect(as).to.deep.equal([1, 2, 3])
    expect(as).to.deep.equal(bs)
  })

  it('Primitives are converted to proper types', () => {
    const out = {
      i: 1,
      s: 'some string',
    }
    console.log(uR.db)
    class Explicit extends Model {
      static fields = {
        i: uR.db.Int(1, { required: true }),
        s: uR.db.String('some string'),
      }
    }
    class Implicit extends Model {
      static fields = { ...out }
    }
    console.log(0)
    const exp = new Explicit()
    console.log(1)
    const imp = new Implicit()
    expect(exp.serialize()).to.deep.equal(imp.serialize())
  })

  it('Validators work', () => {
    class A extends Model {
      static fields = {
        i: 1,
        s: 'some string',
      }
    }

    const fails = [o => (o.i = 'arst'), o => (o.s = 1)]
    fails.forEach(f => {
      const f2 = () => {
        const a = new A()
        f(a)
        a.serialize()
      }
      expect(f2).to.throw()
    })
  })
}
