import Vue from 'vue'
import Router from 'vue-router'
import Link from '@/views/Link.vue'
import Divide from '@/views/Divide.vue'
import Input from '@/views/Input.vue'
import Auto from '@/views/Auto.vue'
import Switch from '@/views/Switch.vue'
import City from '@/views/cityPicker.vue'
import Table from '@/views/Table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Link',
      component: Link
    },
    {
      path: '/divide',
      name: 'Divide',
      component: Divide
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/auto',
      name: 'Auto',
      component: Auto
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },

  ]
})
