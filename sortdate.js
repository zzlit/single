  let arr = [{
    time: '2019-01-01 00:00:00'
  },
  {
    time: '2019-01-02 00:00:01'
  },
  {
    time: '2019-01-03 00:00:02'
  },
  {
    time: '2019-02-01 00:00:03'
  },
  {
    time: '2019-02-02 00:00:04'
  }]
  /**
   * @param {Array} arr 需要处理的格式
   * @returns {Array} dealArr 处理好的格式
   */
  function sort(arr) {
    let dealArr = []
    arr.forEach((item, index) => {
      let flag = true
      dealArr.forEach((m, idx) => {
        if (m.date === item.time.substring(0, 10)) {
          m.list.push(item)
          flag = false
        }
      })
      if (flag) {
        dealArr.push({
          date: item.time.substring(0, 10),
          list: [item]
        })
      }
    })
    return dealArr
   }
   console.log(sort (arr))
