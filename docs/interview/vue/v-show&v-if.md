---
  title: 'v-show与v-if'
---

## v-show与v-if的相同点与不同点

首先在 `vue` 中 `v-show ` 与 `v-if` 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示

在用法上也是相同的

```js
<Model v-show="isShow" />
<Model v-if="isShow" />
```

- 当表达式为`true`的时候，都会占据页面的位置
- 当表达式都为`false`时，都不会占据页面位置

不同点：

1. 控制手段不同

  `v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除

2. 编译过程不同

  `v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于css切换

3. 编译条件不同

`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染

- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期

- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法

4. 性能消耗
  
  `v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗；

## v-show与v-if原理分析

### v-show

  不管初始条件是什么，元素总是会被渲染

  有`transition`就执行`transition`，没有就直接设置`display`属性

  ```ts
  // core/packages/runtime-dom/src/directives/vShow.ts
export const vShow: ObjectDirective<VShowElement> = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === 'none' ? '' : el.style.display
    if (transition && value) {
      transition.beforeEnter(el)
    } else {
      setDisplay(el, value)
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el)
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return
    if (transition) {
      if (value) {
        transition.beforeEnter(el)
        setDisplay(el, true)
        transition.enter(el)
      } else {
        transition.leave(el, () => {
          setDisplay(el, false)
        })
      }
    } else {
      setDisplay(el, value)
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value)
  }
}

function setDisplay(el: VShowElement, value: unknown): void {
  el.style.display = value ? el._vod : 'none'
}
  ```

### v-if
  `v-if`在实现上比`v-show`要复杂的多，因为还有`else` `else-if` 等条件需要处理。这里贴出`vue`编译后的结果

  ```vue
<script setup>
import { ref } from 'vue'
  
  const isShow = ref(false)

</script>

<template>
  <h1 v-if="isShow">123</h1>
</template>
  ```

  ```ts
    // 编译结果
const __sfc__ = {
  __name: 'App',
  setup(__props) {

    const isShow = ref(false)

    return (_ctx, _cache) => {
      return (isShow.value)
        ? (_openBlock(), _createElementBlock("h1", _hoisted_1, "123"))
        : _createCommentVNode("v-if", true)
    }
  }
}
  ```

  可以看到，在条满足的情况下，`render`会直接创建对应的`VNode`，而不满足时，生成的则是`v-if`的占位符 `<!--v-if-->`

  
## v-show与v-if的使用场景

`v-if` 与 `v-show` 都能控制`dom`元素在页面的显示

`v-if` 相比 `v-show` 开销更大的（直接操作`dom`节点增加与删除） 

如果需要非常频繁地切换，则使用 v-show 较好

如果在运行时条件很少改变，则使用 v-if 较好