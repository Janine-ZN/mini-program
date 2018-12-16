// pages/parameter/parameter.js
Page({
  handleTap: function (event){
    var idx = event.target.dataset.idx;
    var age = event.target.dataset.age;
    console.log(idx+','+age)
  },
  handleJump1:function(){
    // 编程方式完成跳转
    // 回退功能 点击 <
    wx.navigateTo({
      url: '/pages/exam/exam',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取参数
      console.log(options)
      var ids = options.id
      // 低版本小程序 2017
      // this.data.id=id
      this.setData({
        id:ids
      })
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