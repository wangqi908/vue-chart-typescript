import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
@Component
export default class ToggleDialogMixin extends Vue {
  @Prop()
  visible!: boolean

  myShow: boolean = this.visible

  @Watch('visible')
  onVisibleChanged(val: boolean) {
    this.myShow = val
  }

  @Watch('myShow')
  onMyShowChanged(val: boolean) {
    this.$emit('update:visible', val)
  }
}
