<template>
  <div :class="$style.banner" :style="{backgroundImage:'url(' + require(`../assets/${backgroundImage}`) + ')'}">
    <div :class="$style.banner_content">
      <strong :class="$style.banner_title">{{ title }}</strong>
      <p :class="$style.banner_description">{{ description }}</p>
      <!-- <button type="button" :class="$style.button button_translucence">Learn more and start today</button>
      <button type="button" :class="$style.button button_white_border">Learn more and start today</button> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBanner",
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: 'bg3.jpg'
    }
  }
}
</script>

<style lang="scss" module>
// banner
.banner {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
  }

  .banner_content {
    position: relative;
    width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .banner_title {
    font-size: 58px;
    color: #fff;
  }

  .banner_description {
    margin: 15px 0 45px;
    font-size: 20px;
    color: #fff;
  }

  .button + .button {
    margin-left: 5px;
  }
}
</style>