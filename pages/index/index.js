//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgs: [
      {id:1,img_url:"/pages/img/banner1.png"},
      {id:2,img_url: "/pages/img/banner2.png"},
      {id:3,img_url: "/pages/img/banner3.png"}],
    list:[
      { id: 1, img_url: "/pages/img/grid-01.png",msg:"美食1"},
      { id: 2, img_url: "/pages/img/grid-02.png", msg: "美食2" },
      { id: 3, img_url: "/pages/img/grid-03.png", msg: "美食3" },
      { id: 4, img_url: "/pages/img/grid-04.png", msg: "美食" },
      { id: 5, img_url: "/pages/img/grid-05.png", msg: "美食" },
      { id: 6, img_url: "/pages/img/grid-06.png", msg: "美食" },
      { id: 7, img_url: "/pages/img/grid-07.png", msg: "美食" },
      { id: 8, img_url: "/pages/img/grid-08.png", msg: "美食" },
      { id: 9, img_url: "/pages/img/grid-09.png", msg: "美食" },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
