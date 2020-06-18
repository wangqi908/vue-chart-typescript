<template>
  <div>
    <p>购买商品分布</p>
    <VeLine :data="data" :legend-visible="false"></VeLine>
  </div>
</template>


<script lang="ts">
import VeLine from 'v-charts/lib/pie.common'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'Goods',
  components: { VeLine }
})
export default class Goods extends Vue {
  @Prop() data!: {}
}
</script>