<template>
  <div class="about">
    <h1>This is an about pageabc</h1>
    <qr :qrId="'adc'"></qr>
    <echarts :echartID="'def'"></echarts>
    <qr :qrId="'adcd'" qrMsg="i am hugh.chen" style="margin-top: 10px"></qr>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import qr from '@/components/qr.vue'
import echarts from '@/components/echarts.vue'

export default {
  name: 'about',
  components: {
    HelloWorld,
    qr,
    echarts
  }
}
</script>
