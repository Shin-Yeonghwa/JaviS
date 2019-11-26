<template>
  <span :class="[$style.labels, $style[type] ]">{{ typeTextUpper }}</span>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    type: {
      type: String,
      default: 'new'
    }
  },
  computed : {
    typeTextUpper() {
      return this.type.toUpperCase()
    }
  }
}
</script>

<style lang="scss" module>
// labels
.labels {
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  line-height: 14px;
}

.new {
  background: #ff9631;
}

.hot {
  background: #f44336;
}
</style>