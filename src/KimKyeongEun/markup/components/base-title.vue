<template>
  <div :class="$style.title_wrap">
    <h2 :class="$style.title">{{ title }}</h2>
    <a v-if="moreUrl" :href="moreUrl" :class="$style.link_moare">more ></a>
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: {
      type: String
    },
    moreUrl: {
      type: String
    }
  }
}
</script>

<style lang="scss" module>
// title
.title_wrap {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}

.link_moare {
  margin-left: auto;
  font-size: 15px;
  text-decoration: none;
  color: #000;
}
</style>