<template>
  <footer :class="$style.footer"><address>Copyright© NAVER Corp. All Rights Reserved.</address></footer>
</template>

<script>
  export default {
    name: 'BaseFooter'
  }
</script>

<style lang="scss" module>
// footer
.footer {
  height: 80px;
  margin-top: auto;
  background: #101010;
  font-size: 12px;
  text-align: center;
  color: #999;
  line-height: 80px;
}
</style>