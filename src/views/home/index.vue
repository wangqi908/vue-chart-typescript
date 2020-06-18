<template>
  <div>
    <Goods :data="goodsData" class="chart-item" />
    <OnlineNumber class="chart-item" />
    <MapChart :data="mapData" class="chart-item" />
    <Register :data="mapData" class="chart-item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { chartUserReq } from '../../api/index'
import { Goods, MapChart, OnlineNumber, Register } from './components/index'
@Component({
  name: 'home',
  components: { Goods, MapChart, OnlineNumber, Register }
})
export default class Home extends Vue {
  registerData = {}
  mapData = {}
  goodsData = {}
  async getUserList() {
    const res: any = await chartUserReq()
    const { registerData, mapData, goodsData } = res.data.data
    this.registerData = registerData
    this.mapData = mapData
    this.goodsData = goodsData
  }
  created() {
    this.getUserList()
  }
}
</script>
