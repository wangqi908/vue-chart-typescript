<template>
  <div class="layout">
    <Menu class="aside" />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { Menu } from '@/components'
export default {
  components: { Menu }
}
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  height: 100%;
  width: 100%;
}
.aside {
  overflow: auto;
  width: 200px;
  height: 100%;
}
.main {
  flex: 1;
  overflow: auto;
}
</style>
