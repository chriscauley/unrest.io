
import Storage from '../storage/Storage'
import db from './index'
import BaseManager from './BaseManager'


export default class StorageManager extends BaseManager {
  set(data) {
    const obj = super.set(data)
    this.storage.set(obj.id,obj)
    console.log(this.storage.get(obj.id))
  }

  refresh() {
    super.refresh()
    this.storage = this.storage || new Storage(this.model.slug)
    return Promise.resolve()
  }
}
