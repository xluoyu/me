<template>
  <div class="container">
    <div></div>
    <div class="info">
      <h1>Corgi笔记小站</h1>
      <p>记录一些日常笔记、面试题目、常用代码</p>
      <div class="btns">
        <a href="/guide/" class="btn brand">Get Started</a>
        <a href="https://github.com/xluoyu/corgi-docs"  class="btn alt">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.container{
  margin: 0 auto;
  max-width: calc(var(--vp-layout-max-width) - 64px);
  display: flex;
  justify-content: space-between;
}

.info{
  padding: 64px 46px;
  h1{
    font-size: 56px;
    line-height:64px;
    font-weight: 700;
    color: var(--vp-home-hero-name-color);
  }
  p{
    line-height: 36px;
    font-size: 24px;
    color: var(--vp-c-text-2);
    padding-top: 20px;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
    padding-top: 32px;
  }
  .btn{
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
    transition: opacity .25s;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    &.brand{
      border-color: var(--vp-button-brand-border);
      color: var(--vp-button-brand-text);
      background-color: var(--vp-button-brand-bg);
      margin-right: 20px;
    }
    &.alt{
      border-color: var(--vp-button-alt-border);
      color: var(--vp-button-alt-text);
      background-color: var(--vp-button-alt-bg);
    }
    &:hover{
      opacity: .7;
    }
  }
}
</style>