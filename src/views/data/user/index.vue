<template>
  <div class="page-box">
    <SearchBox :propSearchData.sync="searchData">
      <div class="getCenter">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
    </SearchBox>
    <div class="table">
      <div class="table-btn">
        <InsertBtn @sucess="sucess" />
      </div>
      <el-table :data="info.list" style="width: 100%">
        <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>

        <el-table-column label="消费金额" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.consumptionAmount}}</template>
        </el-table-column>

        <el-table-column label="最近一次消费时间" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.lastConsumptionTime|allTimeFilter}}</template>
        </el-table-column>

        <el-table-column label="购买商品" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.goods}}</template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" min-width="50" class="test">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <MyPagination
        :total="info.count"
        :currentPage.sync="currentPage"
        @current-change="handleCurrentChange"
      />
      <component
        :visible.sync="showDialog"
        :is="currentCom"
        :id="activeId"
        @before-close="handleClose"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { userPageReq } from '@/api/index'
import { CheckDialog, InsertBtn } from './components'
import PageMixin from '../../../mixin/pageMixin'

@Component({
  name: 'User',
  components: { CheckDialog, InsertBtn }
})
export default class User extends PageMixin {
  searchData = {
    nickname: ''
  }
  check(row: any) {
    this.activeId = row._id
    this.showDialog = true
    this.currentCom = CheckDialog
  }
  sucess() {
    this.search()
  }

  //请求表格数据
  async renderTable() {
    const { pageNum, pageSize } = this
    const { nickname } = this.searchData
    const dataObj = {
      pageSize,
      pageNum,
      data: {
        nickname
      }
    }
    const res: any = await userPageReq(dataObj)
    if (res.data.status == 200) {
      this.info = res.data.data
    }
  }
  created() {
    this.renderTable()
  }
}
</script>
