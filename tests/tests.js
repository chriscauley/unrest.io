/* eslint-disable */
import _ from 'lodash'
import _uR from '../index' // necessary to trigger uR.ready
import './_test_tags.tag'

import objectTests from './ModelTests'
import routerTests from './routerTests'
import readyTests from './readyTests'
import authTests from './authTests'
import fieldTests from './fieldTests'

window.location.hash = '#'

//describe('uR.auth', authTests)
//describe('uR.router',routerTests)
//describe('uR.Model', objectTests)
//describe('uR.ready',readyTests)
describe('uR.ready',fieldTests)
