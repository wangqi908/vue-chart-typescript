import { formatTime } from '@/utils/index'
import { VueConstructor } from 'vue'

const filters: object = {
  HMSTimeFilter(val: number): string {
    return formatTime(val, 'HMS')
  },
  YMDTimeFilter(val: number): string {
    return formatTime(val, 'YMD')
  },
  allTimeFilter(val: number): string {
    return formatTime(val, 'all')
  }
}

export default (Vue: VueConstructor) => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, (filters as any)[key])
  })
}
