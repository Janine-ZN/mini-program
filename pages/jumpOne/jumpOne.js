// pages/jumpOne/jumpOne.js
Page({
  handleTap01:function(){
    // 关闭当前组件，跳转 jumpTwo
    wx.redirectTo({
      url: '/pages/jumpTwo/jumpTwo'
    })
  },
  handleTap02: function () {
    // 关闭所有组件，跳转 jumpTwo
    wx.reLaunch({
      url: '/pages/jumpTwo/jumpTwo'
    })
  },
  handleAjax01:function(){
    wx.request({
      url: '',
      data:{id:9,age:19},
      // success(res){
      success:(res)=> {
        console.log(0)
        console.log(res)
        // 1. 将返回数显示模板中
        // 2. 再发送请求获取图片轮播，并数据显示模板中 /imagelist
        this.setData({
          msg:res.data
        })

      },
      fail(res){
        console.log(1)
        console.log(res)
      }
    })
  }, handleAjax01: function () {
    wx.request({
      url: '',
      // success(res){
      success: (res) => {
        console.log(res.data)
        this.setData({
          list: res.data
        });
      },
      fail(res) {
        console.log(1)
        console.log(res)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
      msg:"",
      list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("aa:卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})