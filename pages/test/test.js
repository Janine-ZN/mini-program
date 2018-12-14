// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"where are you？",
    list: [{ id: 1, addr: '上海' }, 
      { id: 2, addr: '北京' }, 
      { id: 3, addr: '成都' }]
  },
  show:function(){
    console.log('show....')
    console.log(this.data.msg)
    console.log("===>",this.stop())
  },
  stop:function(){
    console.log('stop..')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 基本数据类型
      var i = 10;
      var j = 11;
      console.log(i+j)
      // ECMA Object
      var now = new Date().toLocaleString()
      console.log(now)
      var reg = /^[0-9]{1,3}$/
      var num = '111'
      if(reg.test(num)){
        console.log('验证成功')
      }else{
        console.log('验证失败')
      }
      // var container = document.querySelector('.container');
      // container.innerHTML = '我的小程序'
      this.show();



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
    this.onShow
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