// 转千分位
thousandBitSeparator (value) {
  return value && (
    value.toString().indexOf('.') !== -1 ?
    value.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) { return $1 + ',' }) :
    value.toString().replace(/(\d)(?=(\d{3})+$)/g, function($0, $1) { return $1 + ',' })
  )
}
