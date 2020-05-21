<template>
  <view>
    <view class="area">
      <view class="box">
        <view class="up"></view>
        <view class="down">
          <view class="card" :animation="animationData">
            <view class="cards" v-for="item in list" :key="item"></view>
          </view>
        </view>
      </view>
      <view class="fill" v-for="item in fill" :key="item"></view>
    </view>
    <button @click="begin">click me</button>
  </view>
</template>

<script>
export default {
  name: 'example',
  data() {
    return {
      animation: null,
      animationData: null,
      list: [1],
      fill: []
    }
  },
  onLoad() {
    this.animation = uni.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0
    })
  },
  methods: {
    begin() {
      this.list.push(this.list[this.list.length - 1] + 1)
      if (this.list.length >= 3) {
        this.fill.push(this.list[this.list.length - 1] + 1)
      }
      let distance = 100 - (this.list.length - 1) * 85
      this.animation.bottom(distance).step()
      this.animationData = this.animation.export()
    }
  }
}
</script>

<style lang="scss" scoped>
.area {
  margin: 200px auto 0;
  width: 500px;
  overflow: hidden;
  .fill {
    width: 100%;
    height: 160px;
    background-color: rgb(62, 70, 80);
  }
}
.box {
  position: relative;
  width: 100%;
  height: 400px;
  .up, .down {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .up {
    top: 0;
    height: 180px;
    background-color: #adc2eb;
    z-index: 19;
  }
  .down {
    top: 180px;
    position: relative;
    height: 220px;
    background-color: #2952a3;
    z-index: 9;
    .card {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 200px;
      z-index: 15;
      .cards {
        width: 300px;
        height: 150px;
      }
      .cards:first-child{
        background-color: #ffffff;
      }
      .cards:nth-child(2) {
        background-color: #ffe5ff;
      }
      .cards:nth-child(3) {
        background-color: #ffccff;
      }
      .cards:nth-child(4) {
        background-color: #ffb3ff;
      }
      .cards:nth-child(5) {
        background-color: #ff99ff;
      }
      .cards:last-child {
        background-color: lemonchiffon;
      }
      .cards+.cards {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
