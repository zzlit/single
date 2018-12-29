// 数字转大写
function toDX (m) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(m)) {
    return '数据非法'
  }
  let unit = '千百拾亿千百拾万千百拾元角分'
  let str = ''
  m += '00'
  let p = m.indexOf('.')
  if (p >= 0) {
    m = m.substring(0, p) + m.substr(p + 1, 2)
  }
  unit = unit.substr(unit.length - m.length)
  for (let i = 0; i < m.length; i++) {
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(m.charAt(i)) + unit.charAt(i)
  }
  console.log(str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '元'))
  // return str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '元')
}