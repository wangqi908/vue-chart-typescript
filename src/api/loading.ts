import { Loading } from 'element-ui'

let needLoadingRequestCount: number = 0

let loading: any = null

function startLoading(): void {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.1)'
  })
}

export function endLoading(): void {
  loading.close()
}

export function showFullScreenLoading(): void {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading(): void {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
