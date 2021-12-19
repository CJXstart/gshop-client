//ajax 请求模块

import axios from 'axios'

/*
* ajax请求函数
* @param url: 路径
* @param data: 请求参数，默认是一个空对象
* @param type: 请求类型，默认是 GET请求
* return: 返回的是 response.data 里的数据（同样是promise对象）
* */
export default function ajax (url, data={}, type='GET') {

  //再封装一层
  return new Promise(function (resolve, reject) {
    // 创建一个对象用来接收 ajax 请求的结果（是一个promise对象）
    let promise

    // 执行异步 ajax 请求
    if (type==='GET') {
      // get 请求把请求参数拼到 url 上
      let dataStr = ''    // 数据拼接字符串
      Object.key(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr!=='') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求，得到一个 promise 对象，赋值给变量
      promise = axios.get(url)
    }else {
      // 发送post请求
      promise =  axios.post(url, data)
    }


    // 成功了调用 resolve()
    promise.then(function (response) {
      resolve(response.data)
    })
      // 失败了调用 reject()
      .catch(function (error) {
      reject(error)
    })
  })

}
