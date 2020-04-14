import Vue from 'vue'
import { getCurrentInstance } from '@vue/composition-api'

export const getRuntimeVM = (): Vue => {
  const vm = getCurrentInstance()
  if (vm) return vm

  throw new ReferenceError('[vue-hooks] Not found vue instance.')
}
