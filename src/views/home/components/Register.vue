<template>
  <div>
    <p>注册用户</p>
    <!-- <ve-line :data="data"></ve-line> -->
    <VeLine :data="data"></VeLine>
  </div>
</template>


<script lang="ts">
import VeLine from 'v-charts/lib/line.common'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'Register',
  components: { VeLine }
})
export default class Register extends Vue {
  @Prop() data!: {}
}
</script>