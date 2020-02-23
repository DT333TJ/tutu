/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/test0216',
  name: 'test',
  meta: {
    title: 'test'
  },
  children: [
    {
      path: 'test0216',
      component: () => import('@/views/test/test0216'),
      name: 'test0216',
      meta: {
        title: 'test0216'
      }
    }
  ]
}

export default testRouter