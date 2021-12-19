// 包含n个接口请求函数的模块

import ajax from './ajax'

/*
* 根据经纬度获取位置详情
* @param geohash： 由经纬度封装成的对象
* */
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

/*
* 获取食品分类列表
* */
export const reqFoodTypes = () => ajax(`/index_category`)

/*
* 根据经纬度获取商铺列表
* @param a： 经度
* * @param b： 纬度
* */
export const reqShops = (a, b) => ajax(`/shops`, {longitude: a, latitude: b})


/*
* 根据经纬度和关键字搜索商铺列表
* @param keyword： 关键字
* @param geohash： 由经纬度封装成的对象
* */
export const reqSearchShop = (keyword, geohash) => ajax(`/search_shops`, {keyword, geohash})

/*
* 获取一次性验证码
* */
export const reqCaptcha = (geohash, keyword) => ajax(`/captcha`)

/*
* 用户名密码登陆
* @param name： 用户名
* @param pwd： 密码
* @param captcha： 验证码
* */
export const reqPwdLogin = (name, pwd, captcha) => ajax(`/login_pwd`, {name, pwd, captcha}, 'POST')

/*
* 发送短信验证码
* @param phone： 手机号
* */
export const reqSendCode = (phone) => ajax(`/sendcode`, {phone})

/*
* 手机号验证码登陆
* @param phone： 手机号
* @param code： 验证码
* */
export const reqSmsLogin = (phone, code) => ajax(`/login_sms`, {phone, code}, 'POST')

/*
* 根据会话获取用户信息
* */
export const reqUserInfo = () => ajax(`/userinfo`)

/*
* 用户登出
* */
export const reqLogout = () => ajax(`/logout`)

