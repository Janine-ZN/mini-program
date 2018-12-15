// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"小程序",
    age:19,
    list:[1,3,5,7,9],
    nums1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nums2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    user:[{id:1,name:"tom"},{id:2,name:"jerry"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log("onLoad:01")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:02")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:03")
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
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("用户下拉操作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("用户上拉触底")
  },

  /**
   * 监听用户滑动操作
   */

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})