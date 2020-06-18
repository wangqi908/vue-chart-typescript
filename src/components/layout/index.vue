<template>
  <div class="layout">
    <Menu />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Menu } from '@/components'
export default {
  components: { Menu }
}
</script>

<style lang='scss'>
</style>
