// 睡眠排序
let arr = [100, 991, 2004, 12, 500, 999, 1111]
arr.forEach(m => {
  setTimeout(() => {
    console.log(m)
  }, m)
})

// 猴子排序
function bogoSort (arr) {
  var n = 0, ordered = false;
  function shuffle(array) {
    for (var i = 0,length = arr.length; i < length; i++) {
      var j = Math.floor(Math.random() * length);
      [arr[i], arr[j]]=[arr[j], arr[i]]; // 交换值
      n++;
    }
  }
  function isOrdered(array) {
    for (var i = 1,length = arr.length; i < length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  while (ordered == false) {
    v = shuffle(arr);
    ordered = isOrdered(arr);
  }
  console.log('计算了'+n+'次', arr)
  return arr;
}
bogoSort([5, 4, 9, 1])