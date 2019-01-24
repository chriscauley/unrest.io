import _ from 'lodash'
import { expect } from 'chai'

import uR from '../'
const {
  Model,
  ForeignKey,
  DateTime,
  Field,
  Int,
  String,
  Boolean,
  List,
} = uR.db

const now_string = "2019-01-01 23:12:34"
const now = new Date(now_string)

const FIELD_DATA = [
  {
    field: DateTime,
    data_sets: [
      [ now.valueOf(), [ now, now.valueOf(), now.toString(), now_string ] ],
    ],
  }
//   ForeignKey,
//   Field,
//   Int,
//   String,
//   Boolean,
//   List,
]



class NoOpts extends Model {
  static model_name = "NoOpts"
  static app_label = "tests"
  static fields = {
    DateTime: DateTime(),
  }
}

export default () => {
  it('makes a model', () => {
    FIELD_DATA.forEach(({ field, data_sets }) => {
      const obj = new NoOpts()
      const { name } = field
      data_sets.forEach(
        ([result,inputs]) => inputs.forEach(input => {
          obj[name] = input
          console.log(input,typeof obj.serialize()[name])
          expect(obj.serialize()[name]).to.equal(result)
        })
      )
    })
  })
}