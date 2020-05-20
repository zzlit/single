<template>
  <view class="FlipClock">
    <Flipper ref="Hour1" />
    <Flipper ref="Hour2" />
    <em>:</em>
    <Flipper ref="Minute1" />
    <Flipper ref="Minute2" />
    <em>:</em>
    <Flipper ref="Second1" />
    <Flipper ref="Second2" />
  </view>
</template>

<script>
// https://github.com/Yuezi32/flipClock
import Flipper from './Flipper'

export default {
  name: 'FlipClock',
  data() {
    return {
      time: 0,
      timer: null
    }
  },
  props: {
    countdown: {
      type: [String, Number],
      default: 0
    }
  },
  components: {
    Flipper
  },
  methods: {
    // 初始化
    init() {
      let nowTimeStr = this.formatDate(this.time)
       for (let i = 0; i < 6; i++) {
          switch (i) {
            case 0:
              this.$refs.Hour1.setFront(nowTimeStr[i])
              break
            case 1:
              this.$refs.Hour2.setFront(nowTimeStr[i])
              break
            case 2:
              this.$refs.Minute1.setFront(nowTimeStr[i])
              break
            case 3:
              this.$refs.Minute2.setFront(nowTimeStr[i])
              break
            case 4:
              this.$refs.Second1.setFront(nowTimeStr[i])
              break
            case 5:
              this.$refs.Second2.setFront(nowTimeStr[i])
              break
            default:
              break
          }
       }
    },
    // 开始倒计时
    run() {
      this.timer = setInterval(() => {
        // 获取当前时间
        let now = new Date()
        let nowTimeStr = this.formatDate(this.time)
        let nextTimeStr = this.formatDate(this.time - 1)
        for (let i = 0; i < 6; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
          }
          switch (i) {
            case 0:
              this.$refs.Hour1.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            case 1:
              this.$refs.Hour2.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            case 2:
              this.$refs.Minute1.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            case 3:
              this.$refs.Minute2.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            case 4:
              this.$refs.Second1.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            case 5:
              this.$refs.Second2.flipDown(
                nowTimeStr[i],
                nextTimeStr[i]
              )
              break
            default:
              break
          }
        }
        this.time--
      }, 1000)
    },
    // 格式化
    formatDate(time) {
      const hour = parseInt(time / 3600)
      const min = parseInt((time % 3600) / 60)
      const sec = time - (hour * 3600) - (min * 60)
      const restr = this.padLeftZero(hour.toString()) + this.padLeftZero(min.toString()) + this.padLeftZero(sec.toString())
      return restr
    },
    // 补零
    padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }
  },
  mounted() {
    this.time = this.countdown * 1
    this.init()
    this.run()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style>
.FlipClock {
  text-align: center;
}
.FlipClock .M-Flipper {
  margin: 0 3px;
}
.FlipClock em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top;
}
</style>
