<template>
  <ul :class="[thumbList && $style.thumb_list, postList && $style.post_list]">
    <li
      v-for="(item, index) in ListData"
      :key="index"
      :class="$style.item"
    >
      <a :href="item.href" :class="$style.inner">
        <BaseLabel v-if="item.status" :class="$style.labels" :type="item.status" />

        <div :class="$style.thumb_box">
          <img :src="require(`../assets/${item.img}`)" alt="">
        </div>
        <div :class="$style.content_box">
          <strong :class="$style.title">{{ item.title }}</strong>
          <p :class="$style.description">{{ item.description }}</p>

          <div v-if="item.data || item.comment" :class="$style.info_box">
            <span :class="$style.info">{{ item.date }}</span>
            <span :class="$style.info">댓글 <span>{{ item.comment }}</span></span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import BaseLabel from '@/components/base-label'

export default {
  name: "BaseList",
  components: {
    BaseLabel
  },
  props: {
    ListData: {
      type: Array,
      default: () => []
    },
    thumbList: {
      type: Boolean,
      default: false
    },
    postList: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" module>
// list
.thumb_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;

  .item {
    width: 33.3333%;
    padding: 0;
    box-sizing: border-box;
  }

  .inner {
    position: relative;
    display: block;
    margin: 0 0 20px 20px;
    background: #fff;
    color: #000;
    text-decoration: none;
  }

  .thumb_box {
    overflow: hidden;
    width: 100%;
    height: 220px;
    vertical-align: top;

    &:hover {
      opacity: 0.6;
    }

    img {
      width: 100%;
    }
  }

  .content_box {
    padding: 20px 15px 12px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    overflow: hidden;
    height: 46px;
    margin: 0;
    font-size: 15px;
    line-height: 22px;
  }

  .labels {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}

// list2
.post_list {
  .item {
    overflow: hidden;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #d5d5d5;
  }

  .inner {
    text-decoration: none;
  }

  .thumb_box {
    float: right;
    width: 210px;
    height: 167px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content_box {
    overflow: hidden;
    padding-right: 25px;
  }

  .title {
    display: block;
    padding: 15px 0 14px;
    font-size: 20px;
    color: #000;
  }

  .description {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  .info_box {
    margin-top: 20px;
    line-height: 20px;
    font-size: 13px;
    color: #999;
  }

  .info {
    display: inline-block;
    margin-right: 6px;
    vertical-align: top;

    &+.info::before {
      content: '';
      display: inline-block;
      height: 12px;
      margin: 3px 10px 0 0;
      border-left: 1px solid #999;
      vertical-align: top;
    }
  }
}
</style>