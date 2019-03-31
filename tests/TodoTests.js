import _ from 'lodash'
import { expect } from 'chai'
import df from 'date-fns'

import uR from '../'
const { Snap } = uR

const {
  Boolean,
  DateTime,
  ForeignKey,
  Int,
  Model,
  String,
  StorageManager,
} = uR.db

class BaseModel extends Model {
  static fields = {
    id: Int(),
  }
}

class Todo extends BaseModel {
  static slug = 'test.Todo'
  static fields = {
    name: String(),
    completed: Boolean(false),
    project: ForeignKey('test.Project'),
    due: DateTime({required: false}),
  }
}

class Project extends BaseModel {
  static slug = 'test.Project'
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
      })
      .then(obj => {
        snap.match('incomplete', obj.serialize())
        obj.completed = true
        snap.match('complete', obj.serialize())
        return Todo.objects.save(obj)
      })
      .then(obj => {
        Todo.objects.refresh()
        snap.match('complete', obj.serialize())
        snap.done(done)
      })
  })

  it("PROJECT: can be saved as fk on Todo", async function (done) {
    const { title } = this.test
    const snap = Snap(this)
    const project = await Project.objects.create({name:title})
    snap.match("project",project.serialize())
    const todo = await Todo.objects.create({
      name: title,
      project,
    })
    snap.match("todo with project",todo.serialize())
    expect(project.id).to.equal(todo.serialize().project)
    expect(project).to.equal(todo.project)
    Todo.objects.refresh()
    const same_todo = Todo.objects.get(todo.id)
    snap.match("todo with project",same_todo.serialize())

    done()
  })

  it("TODO: can save due date", async function(done) {
    const dt_string = "2019-01-01 00:00:00"
    const dt = new Date(dt_string)
    const todoWithDue = due => Todo.objects.create({
      name: title,
      due,
    })
    const { title } = this.test
    const snap = Snap(this)
    todoWithDue(dt).then(todo => {
      snap.match("todo with 1/1/19 due date",todo.serialize())
    })

    Promise.all([
      todoWithDue(dt_string),
      todoWithDue(dt),
      todoWithDue(dt.valueOf()),
    ]).then( todos => done(
      todos.map(todo => {
        if (!df.isEqual(todo.due,dt)) {
          return `Live value is not equal to instantiated value`
        }
        if (!df.isEqual(todo.serialize().due,dt)) {
          return `Serialized value is not equal to instantiated value`
        }
      }).find(err=>err)
    ))
  })
}
