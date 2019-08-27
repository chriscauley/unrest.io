
import Storage from '../storage/Storage'
import BaseManager from './BaseManager'
import { Int } from './fields'

export default class StorageManager extends BaseManager {
  constructor(opts) {
    super(opts)
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
    this.next_id = 1
    this.storage = this.storage || new Storage(this.model.slug)
    this.storage.keys.forEach(key => {
      const obj = new this.model(this.storage.get(key))
      this.next_id = Math.max(this.next_id,obj.id + 1)
      this.set(obj)
    })
    return Promise.resolve()
  }
}
