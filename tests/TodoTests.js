import _ from 'lodash'
import { expect } from 'chai'

import uR from '../'
const { Snap } = uR
const { Model, Int, String, Boolean, StorageManager, ForeignKey } = uR.db

class BaseModel extends Model {
  static manager = StorageManager
  static fields = {
    id: Int(),
  }
}

class Todo extends BaseModel {
  static slug = "test.Todo"
  static fields = {
    name: String(),
    completed: Boolean(false),
    project: ForeignKey("test.Project"),
  }
}

class Project extends BaseModel {
  static slug = "test.Project"
  static fields = {
    name: String(),
  }
}

new StorageManager(Todo)
new StorageManager(Project)

export default () => {
  it('TODO: can be marked completed', function(done) {
    const { title } = this.test
    const snap = Snap(this)
    Todo.objects.create({
      name: title,
    }).then(obj => {
      const id = obj.id
      snap.match('incomplete', obj.serialize())
      obj.completed = true
      snap.match('complete', obj.serialize())
      Todo.objects.refresh()

      const new_obj = Todo.objects.get(id)
      expect(new_obj === obj).to.be.false
      snap.match('complete', new_obj.serialize())
      done()
    })
  })
}