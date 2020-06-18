// 时间戳格式化
export const formatTime = (date: number, type: string): string => {
  const time = new Date(date * 1) //如果date为13位不需要乘1000
  const year = time.getFullYear()
  const month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
  const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  if (type === 'all') {
    const res = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    return res
  } else if (type === 'YMD') {
    const res = `${year}/${month}/${day}`
    return res
  } else if (type === 'HMS') {
    const res = `${hours}:${minutes}:${seconds}`
    return res
  } else {
    return ''
  }
}

// 重置对象里的键为空
export const searchReset = (searchData = {}): object => {
  return searchData
}
