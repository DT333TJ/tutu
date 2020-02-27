<template>
  <div class="demo pl-5">
    <h2>自定义基础组件展示:</h2>

    <div class="demo-color">
      <span>色值:</span>
      <el-color-picker class="demo-color-picker fr" v-model="theme"></el-color-picker>

      <el-radio v-model="radio" label="1">备选项</el-radio>

      <span>{{ defalutTheme }}</span>
    </div>
  </div>
</template>

<script>
  const version = require('element-ui/package.json').version // element-ui version from node_modules
  const ORIGINAL_THEME = '#2d14bd' // default color

  export default {
    name: 'demo',
    components: {
      // HelloWorld
    },
    data() {
      return {
        theme: '',
        chalk: '',
        radio: '1'
      }
    },
    computed: {
      defalutTheme() {
        return this.$store.state.theme
      }
    },
    watch: {
      defalutTheme: {
        handler(val) {
          console.log('theme:', val)
          this.theme = val
        },
        immediate: true
      },
      async theme(val) {
        const oldVal = this.chalk ? this.theme : ORIGINAL_THEME
        if (typeof val !== 'string') return
        const themeCluster = this.getThemeCluster(val.replace('#', ''))
        const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
        console.log(themeCluster, originalCluster)

        const $message = this.$message({
          message: '  Compiling the theme',
          type: 'success',
          iconClass: 'el-icon-loading'
        })

        const getHandler = (variable, id) => {
          return () => {
            const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
            const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

            let styleTag = document.getElementById(id)
            console.log('newStyle', newStyle)
            if (!styleTag) {
              styleTag = document.createElement('style')
              styleTag.setAttribute('id', id)
              document.head.appendChild(styleTag)
            }
            styleTag.innerText = newStyle
            console.log('styleTag', styleTag)
          }
        }

        if (!this.chalk) {
          const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
          await this.getCSSString(url, 'chalk')
        }

        const chalkHandler = getHandler('chalk', 'chalk-style')

        chalkHandler()

        const styles = [].slice.call(document.querySelectorAll('style'))
          .filter(style => {
            const text = style.innerText
            return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
          })
        styles.forEach(style => {
          const { innerText } = style
          if (typeof innerText !== 'string') return
          style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
        })

        this.$store.dispatch('changeSetting', {
          key: 'theme',
          value: val
        })

        $message.close()
      }
    },
    methods: {
      updateStyle(style, oldCluster, newCluster) {
        let newStyle = style
        oldCluster.forEach((color, index) => {
          newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
        })
        return newStyle
      },
      getCSSString(url, variable) {
        return new Promise(resolve => {
          const xhr = new XMLHttpRequest()
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
              resolve()
            }
          }
          xhr.open('GET', url)
          xhr.send()
        })
      },
      getThemeCluster(theme) {
        const tintColor = (color, tint) => {
          let red = parseInt(color.slice(0, 2), 16)
          let green = parseInt(color.slice(2, 4), 16)
          let blue = parseInt(color.slice(4, 6), 16)
          if (tint === 0) { // when primary color is in its rgb space
            return [red, green, blue].join(',')
          } else {
            red += Math.round(tint * (255 - red))
            green += Math.round(tint * (255 - green))
            blue += Math.round(tint * (255 - blue))
            red = red.toString(16)
            green = green.toString(16)
            blue = blue.toString(16)
            return `#${red}${green}${blue}`
          }
        }
        const shadeColor = (color, shade) => {
          let red = parseInt(color.slice(0, 2), 16)
          let green = parseInt(color.slice(2, 4), 16)
          let blue = parseInt(color.slice(4, 6), 16)
          red = Math.round((1 - shade) * red)
          green = Math.round((1 - shade) * green)
          blue = Math.round((1 - shade) * blue)
          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)
          return `#${red}${green}${blue}`
        }
        const clusters = [theme]
        for (let i = 0; i <= 9; i++) {
          clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
        }
        clusters.push(shadeColor(theme, 0.1))
        return clusters
      }
    }
  }
</script>

<style lang="scss">
  .demo {
    .demo-color {
      width: 200px
    }
    /deep/ .demo-color-picker {
      height: 26px;
    }
    /deep/ .el-color-picker__trigger {
      width: 26px;
      height: 26px
    }
  }
</style>