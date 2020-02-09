// 创建一个需要混入的对象 
export const mixinstest = {
  data() {
    return {
      testMix: '混入对象的data'
    }
  },
  created() {
    console.log('这是混入对象的created')
  },
  methods: {
    mixinsFun() {
      console.log('调用混入对象的methods的函数')
    }
  },
  computed: {
    testMix2() {
      console.log('计算属性')
      return this.testMix + '：这是混入对象计算结果。'
    }
  },
  watch: {
    testMix(newVal, oldVal) {
      console.log('混入对象的watch')
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
    }
  }
}