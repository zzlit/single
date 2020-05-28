function drawtext(ctx, t, x, y, w) {
  //ctx：canvas对象，t：绘制的文字，x, y: 文字坐标，w：文字最大宽度
  let chr = t.split('')
  let temp = ''
  let row = []
  for (let a = 0; a < chr.length; a++) {
    if (ctx.measureText(temp).width < w && ctx.measureText(temp + (chr[a])).width <= w) {
      temp += chr[a]
    } else {
      row.push(temp)
      temp = chr[a]
    }
  }
  row.push(temp)
  if (row.length > 2) {
    row[1] = row[1].substring(0, row[1].length - 2) + '...'
  }
  row = row.filter((item, index) => index < 2)
  for(let b = 0; b < row.length; b++) {
    ctx.fillText(row[b], x, y + (b + 1) * 18) // 每行字体y坐标间隔
  }
}
