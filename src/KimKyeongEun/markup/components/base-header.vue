<template>
  <header :class="$style.header">
    <div :class="$style.inner">
      <h1 :class="$style.logo">
        <a href="/">Logo</a>
      </h1>

      <nav :class="$style.nav">
        <!-- tab component -->
        <BaseTab :list="gnbTabList" />
      </nav>
    </div>
  </header>
</template>

<script>
import BaseTab from '@/components/base-tab'

const gnbTabList = [
  {
    href: '/about',
    text: 'ABOUT'
  },
  {
    href: '/team',
    text: 'TEAM'
  },
  {
    href: '/work',
    text: 'WORK'
  },
  {
    href: '/connact',
    text: 'CONTACT'
  }
]

export default {
  name: 'BaseHeader',
  components: {
    BaseTab
  },
  data() {
    return {
      gnbTabList
    }
  }
}
</script>

<style lang="scss" module>
// header
.header {
  position: relative;
  background: #fff;
  z-index: 100;

  .inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    height: 70px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.logo {
  float: left;
  margin: 0;
  font-size: 24px;
  height: 20px;
  color: #000;
  line-height: 20px;
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
}

.nav {
  margin-left: auto;
}
</style>