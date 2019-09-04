/* eslint-disable no-undef */
import {assert,H,R} from '../../common'
import P from '..'

import requireContext from 'babel-plugin-require-context-hook/register.js'
requireContext()

describe (`Theorems`, function () {
  const req = require.context(`.`, false, /\d+.ts$/)
  const cache = {}
  const importAll = req => {
    req.keys().forEach(key => cache[key] = req(key))
  }
  importAll(req)
  
  const {H1, H2, H3, MP} = P
  const axioms = {H1, H2, H3}
  const inferences = {MP}

  R.mapObjIndexed (({default: theorem}, key) => {
    it (`verifying proof of ${key}: ${theorem.name}`, function () {
      const state = P._state (axioms) (inferences)
      theorem.proof (state)
      /* Hacky */
      const x = R.last (state.vars())
      const p = state.proposition()
      assert (R.equals (state.proposition()) (theorem.proposition (x)))
    })
  }) (cache)
  
})