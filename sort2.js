  let obj =[
    {1:'20190805',2:'1',3:'success'},
    {1:'20191120',2:'1.1',3:'success'},
    {1:'20190212',2:'1.1.1',3:'success'},
    {1:'20190212',2:'1.1.2',3:'success'},
    {1:'20190212',2:'1.1.3',3:'success'},
    {1:'20190212',2:'1.2',3:'success'},
    {1:'20190212',2:'1.2.1',3:'success'},
    {1:'20190212',2:'2',3:'success'},
    {1:'20190212',2:'2.1',3:'success'},
    {1:'20190212',2:'2.2.1',3:'success'},
    {1:'20190212',2:'2.2',3:'success'},
    {1:'20190212',2:'2.3',3:'success'},
    {1:'20190212',2:'2.3.1',3:'success'}]
  /**
   *
   * @param {Array} arr
   * @returns {Array} 分类好的数据
   */
  // function sort(arr) {
  //   let temp = {}
  //   arr.forEach(item => {
  //     temp[item['2']] = item
  //   })
  //   arr.forEach(item => {
  //     let key = item['2']
  //     let parent
  //     if (key.length > 1) {
  //       key = key.slice(0, -2)
  //       parent = temp[key]
  //       if (parent) {
  //         parent.children = parent.children || []
  //         parent.children.push(item)
  //       }
  //     }
  //   })
  //   return Object.keys(temp).reduce((ret, key) => ret.concat(key.length === 1 ? temp[key] : []), [])
  // }
  // console.log(sort(obj))

  /*
   * @params {Array} permission 需要整合的数据（不一定有序）
   * @return {Array} res
   */
  // 匹配父级的正则
  const REG_CODE = /^(.+)\.\d+$/; 
  const handlePermission = permission => {
    // 数据备份，防止污染原数据
    permission = permission.map(item => Object.assign({}, item));

    // Array.from(new Set(arr))

    // 对数据进行排序
    permission.sort((a, b) => a[2] - b[2]);

    // 将每一条数据都当做父级
    let parents = permission.reduce((data, item) => (data[item[2]] = item, data), {});

    // 返回结果
    let res = [];

    // 查找每一条数据对应的父级
    permission.forEach(item => {
      //获取父级code
      let parentCode = REG_CODE.exec(item[2]);

      // 不存在父级，则是顶级父类
      if(!parentCode){
         res.push(item);
         return;
      }

      // 如果存在父级，则挂载到父级的children中
      if(parentCode && parents[parentCode[1]]){
          parents[parentCode[1]].children = parents[parentCode[1]].children || [];
          parents[parentCode[1]].children.push(item);
      }
    });

    return res;
  }
  console.log(handlePermission(obj))
