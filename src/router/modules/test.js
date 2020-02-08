/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/test0208',
  name: 'test',
  meta: {
    title: 'test'
  },
  children: [
    {
      path: 'test0208',
      component: () => import('@/views/test/test0208'),
      name: 'test0208',
      meta: {
        title: 'test0208'
      }
    }
  ]
}

export default testRouter