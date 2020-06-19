<template>
  <div>
    <label for="fileInput">
      <div class="btn">导入表格</div>
    </label>
    <input type="file" ref="upload" @change="readExcel" id="fileInput" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import XLSX from 'xlsx'
import { userInsertReq } from '@/api'

interface OutputInter {
  [key: string]: any;
  userId: string;
  nickname: string;
  phone: string;
  latestNumber: string;
  email: string;
  wechatNo: string;
  birthday: string;
  gender: string;
  age: string;
  language: string;
  country: string;
  province: string;
  city: string;
  address: string;
  industry: string;
  company: string;
  interest: string;
  registerTime: number;
  consumptionAmount: string;
  lastConsumptionTime: number;
  goods: string;
}

@Component
export default class InsertBtn extends Vue {
  readExcel(e: any): void | boolean {
    const files = e.target.files
    if (files.length <= 0) {
      return false
    } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
      Vue.prototype.$message.warning(
        '上传格式不正确，请讲文件转换为xls或xlsx格式再进行上传'
      )
      return false
    }

    const fileReader = new FileReader()
    fileReader.onload = (ev: any) => {
      try {
        const data = ev.target.result
        const workbook = XLSX.read(data, {
          type: 'binary',
          codepage: 936
        })
        const wsname = workbook.SheetNames[0] //取第一张表
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) //生成json表格内容

        const outputs: Array<OutputInter> = []
        ws.forEach((ele: any) => {
          const obj: OutputInter = {
            userId: ele['用户ID'],
            nickname: ele['昵称'],
            phone: ele['手机号'],
            latestNumber: ele['最近采集号码'],
            email: ele['邮箱'],
            wechatNo: ele['微信号'],
            birthday: ele['生日'],
            gender: ele['性别'],
            age: ele['年龄'],
            language: ele['语言'],
            country: ele['国家'],
            province: ele['省份'],
            city: ele['城市'],
            address: ele['地址'],
            industry: ele['行业'],
            company: ele['公司'],
            interest: ele['兴趣'],
            registerTime: +new Date(ele['注册时间']),
            consumptionAmount: ele['消费金额'],
            lastConsumptionTime: +new Date(ele['最近一次消费时间']),
            goods: ele['购买商品']
          }
          for (const key in obj) {
            const element = (obj as any)[key]
            if (typeof element === 'string') {
              obj[key] = element.trim()
            } else {
              obj[key] = element ? element : ''
            }
          }
          const isObjValueAllEmpty: boolean = Object.values(obj).every(
            v => v === ''
          ) //判断对象的值全为空
          if (!isObjValueAllEmpty) outputs.push(obj)
        })
        ;(this.$refs.upload as any).value = ''
        this.upload(outputs)
      } catch (e) {
        console.log(e)
        return false
      }
    }
    fileReader.readAsBinaryString(files[0])
  }

  async upload(list: Array<OutputInter>) {
    const res: any = await userInsertReq({ list })
    if (res.data.status === 200) {
      (this as any).$message.success('导入成功')
      this.$emit('sucess')
    }
  }
}
</script>

<style lang='scss'>
.btn {
  color: #12a9ee;
  font-size: 12px;
  padding: 10px 4px;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #36b6f1;
  }
  &:active {
    color: rgb(32, 167, 230);
  }
}
input {
  display: none;
}
</style>