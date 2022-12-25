<script setup lang='ts'>

</script>

<template>
<div>
  <div class="topnav">
    <div class="logo"></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
  <div class="banner">
    <h1>轮子UI</h1>
    <h2>一个不一般的UI框架</h2>
    <p>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
