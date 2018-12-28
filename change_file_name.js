var fs = require("fs")
var path = './img'

/**
 * 修改文件名称。
 * @param  {String} path 文件路径
 * @param  {Function} callback 回调函数，files 指定目录下所有文件名称
 */

fs.readdir(path, function(err, files) {
  files.forEach(function(filename) {
    // re 正则匹配规则
    var re = /／/g,
    oldName = path + '/' + filename,
    newName = path + '/' + filename.replace(re, '_')
    fs.rename(oldName, newName, function(err) {
      if (err) {
        console.log(err)
        return
      }
      console.log(filename + '替换成功!')
    })
  })
})