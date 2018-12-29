// 等待promise全部执行完
function waitPromise () {
  let promiseList = []
  for (let i = 0; i< 10; i++) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date().getTime())
      }, 1000)
    })
    promiseList.push(promise)
  }
  Promise.all(promiseList).then(list => {
    console.log(list)
  })
}