import _ from 'lodash'
import riot from 'riot'

import Storage from '../storage/Storage'
import './list'

let current_id = 1

const Snap = test_set => {
  const results = []
  const name = test_set.test.title
  Snap.snapshots.push({
    name,
    results,
  })
  const storage = new Storage('Snap:' + name)
  const match = (key, new_value) => {
    const old_value = storage.get(key)
    const accept = () => {
      storage.set(key, new_value)
    }
    const result = {
      id: current_id++,
      key,
      old_value,
      new_value,
      accept,
      success: _.isEqual(old_value, new_value),
    }
    results.push(result)
    Snap.trigger('update')
  }

  return {
    match,
    results,
    done: callback =>
      results.find(result => {
        if (!result.success) {
          callback(`${name}: ${result.key} did not match`)
          return true
        }
      }),
  }
}

Snap.snapshots = []
riot.observable(Snap)

export default Snap
