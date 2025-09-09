export default {
  component: 'ErPagination',
  label: '分页',
  propValue: {
    pageSize: 10,
    total: 100,
    currentPage: 1,
    disabled: false,
    hideOnSinglePage: false,
    activateText: '',
  },
  icon: 'chart-line',
  type: 'errantia',
  style: {
    width: 300,
    height: 200,
    fixedWidth: '',
    fixedHeight: '',
    backgroundColor: '#ffffff',
  },
  actionBinds: {
    currentpChange:''
  }
}