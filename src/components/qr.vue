<template>
  <div :id="qrId">

  </div>
</template>

<script>
  export default {
    name: 'qr',
    components: {},
    data() {
      return {
        token: '',
      }
    },
    props: {
      qrMsg: {
        type: String,
        default: 'helloworld',
      },
      qrId: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        default: 100,
      },
      height: {
        type: Number,
        default: 100,
      },
    },
    created() {},
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let qrcode = new QRCode(document.getElementById(this.qrId), {
          text: this.qrMsg,
          width: this.width,
          height: this.height,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      },

    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
