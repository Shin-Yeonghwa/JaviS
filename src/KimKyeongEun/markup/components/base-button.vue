<template>
  <!--
    poprs가 아래와 같이 정의도어 있을때 버튼에 클래스 제어는 아래와 같이 할 수 있다.
      props: {
        translucence: {
          type: Boolean,
          default: false
        },
        whiteOutline: {
          type: Boolean,
          default: false
        }
      }
    // 클래스 제어
      :class="[
        $style.button,
        translucence && $style.translucence,
        whiteOutline && $style.white_outline
      ]"
  -->
  <button
    :type="buttonType"
    :class="[
      $style.button,
      $style[colorType]
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
/* props - colorType
  String값은 아래 클래스명으로 넣어주면됨. 그래야 위에서 그 값이 클래스가되어 적용이됨.
  - translucence
  - white_outline
*/
export default {
  name: "BaseButton",
  props: {
    buttonType: {
      type: String,
      default: 'button'
    },
    colorType: {
      type: String
    }
    // translucence: {
    //   type: Boolean,
    //   default: false
    // },
    // whiteOutline: {
    //   type: Boolean,
    //   default: false
    // }
  }
}
</script>

<style lang="scss" module>
.button {
  display: inline-block;
  height: 52px;
  padding: 0 24px;
  border:0;
  font-size: 18px;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
}

.translucence {
  color: #000;
  border: 0;
  background: rgba(255, 255, 255, 0.7);
}

.white_outline {
  color: #fff;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0);
}
</style>