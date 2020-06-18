<template>
  <div class="home">
    <el-menu :default-active="activeIndex" @select="handleSelect">
      <el-menu-item index="home">统计</el-menu-item>
      <el-submenu index="data">
        <template slot="title">数据</template>
        <el-menu-item index="user">用户数据</el-menu-item>
        <el-menu-item index="zb">直播数据</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'Menu'
})
export default class Menu extends Vue {
  activeIndex = '1'
  handleSelect(name: string) {
    if (this.$route.name === name) return
    this.$router.push({ name })
  }
  created() {
    this.activeIndex = this.$route.meta.modules || this.$route.name
  }
  @Watch('$route')
  watchRouter() {
    this.activeIndex = this.$route.meta.modules || this.$route.name
  }
}
</script>
