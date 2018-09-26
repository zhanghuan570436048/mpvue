<template>
    <view>
        <text>home</text>
    </view>   
</template>

<script>
    export default {
      data () {
        return {
          swiperdata: []
        }
      },
      created () {
        this.getSwiperData()
      },
      methods: {
        async getSwiperData () {
          const result = this.$axios.get('api/public/v1/home/swiperdata', {
            params: {
              ID: 10001
            }
          })
          console.log(result)
        }
      }
    }
</script>

<style lang="less">

</style>

