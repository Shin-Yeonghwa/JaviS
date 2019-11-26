<template>
  <div :id="$style.wrap">
    <BaseHeader/>
    <div :class="$style.container">
      <slot></slot>
    </div>
    <Basefooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header'
import Basefooter from '@/components/base-footer'

export default {
  name: "BaseLayout",
  components: {
    BaseHeader,
    Basefooter
  }
}
</script>

<style lang="scss" module>
/* service page */
#wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 1000px;
  font-family: NanumSquare, 나눔스퀘어, NanumGothic, "나눔고딕", sans-serif;
}

/* contents */
.container {
  background: #f1f1f1;
}
</style>