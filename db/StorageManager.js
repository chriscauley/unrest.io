
import Storage from '../storage/Storage'
import db from './index'
import BaseManager from './BaseManager'
import { Int } from './fields'

export default class StorageManager extends BaseManager {
  constructor(opts) {
    super(opts)
    this.next_id = 1
  }
  static fields = {
    id: Int(undefined,{required: false})
  }
  _set = (obj) => {
    if (!obj.id) {
      obj.id = this.next_id++
    }
    this.items.set(obj.id, obj)
    this.storage.set(obj.id,obj)
  }

  refresh() {
    super.refresh()
    this.storage = this.storage || new Storage(this.model.slug)
    this.storage.keys.forEach(key => {
      this.save(new this.model(this.storage.get(key)))
    })
    return Promise.resolve()
  }
}
