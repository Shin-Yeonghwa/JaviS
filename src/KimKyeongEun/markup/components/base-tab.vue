<template>
  <ul :class="[
      !borderType && $style.tab,
      borderType && $style.tab_border
    ]"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="$style.item"
    >
      <a :href="item.href" :class="$style.link">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BaseTab",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    borderType: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" module>
// tab
.tab {
  list-style: none;
  margin: 0;

  .item {
    display: inline-block;
    margin-left: 20px;

    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      color: #000;
    }
  }
}

/* border tab */
.tab_border {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  margin-bottom: 30px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  .item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 20px;

    &+.item {
      &::before {
        content: '·';
        color: #000;
        margin-right: 18px;
      }
    }
  }

  .link {
    display: block;
    font-size: 15px;
    letter-spacing: -.08px;
    color: #646a74;
    cursor: pointer;
    text-decoration: none;
  }

  .on .link {
    color: #000;
  }
}
</style>