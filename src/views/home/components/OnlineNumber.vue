<template>
  <div>
    <p>在线人数统计报表</p>
    <div class="option-box">
      <el-date-picker
        v-model="value"
        type="daterange"
        value-format="timestamp"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="change"
      ></el-date-picker>
      <el-button class="btn" type="primary" plain @click="reset">重置</el-button>
    </div>
    <VeLine :data="chartData"></VeLine>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VeLine from 'v-charts/lib/histogram.common'
import { chartZbReq } from '../../../api/index'
@Component({
  name: 'OnlineNumber',
  components: { VeLine }
})
export default class OnlineNumber extends Vue {
  chartData = {}
  value = []
  async getData(query = {}) {
    const res = await chartZbReq(query)
    const { onlineUserNumber } = res.data.data
    if (onlineUserNumber.rows.length === 0) {
      Vue.prototype.$message('无数据')
    }
    this.chartData = onlineUserNumber
  }
  change() {
    const [startTime, endTime] = this.value
    this.getData({ startTime, endTime })
  }
  reset() {
    this.value = []
    this.getData()
  }
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.option-box {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  .btn {
    margin-left: 30px;
  }
}
</style>