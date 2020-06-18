<template>
  <div>
    <p>注册用户地区分布</p>

    <VeLine :data="data" :settings="chartSettings"></VeLine>
  </div>
</template>

<script lang="ts">
import VeLine from 'v-charts/lib/map.common'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'MapChart',
  components: { VeLine }
})
export default class MapChart extends Vue {
  @Prop() data!: {}
  chartSettings = {
    position: 'china',
    label: false,
    itemStyle: {
      normal: {
        borderColor: '#00f'
      }
    }
  }
}
</script>