// pages/interrogation/interrogation.js
Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
      select1: false,
      select2: false,
      theGuidance: [{
          text: '线上医生咨询',
          url: '../consultation/consultation'
      }, {
          text: '智能导诊',
          url: ''
      }, {
          text: '预约挂号',
          url: '../order/order'
      }, {
          text: '当天挂号',
          url: ''
      },
        {
          text: '我的挂号',
          url: '../registor/registor'
      }, ],
    theConsultation: [{
          text: '挂号记录',
          url: '../history/history'
      }, {
          text: '报告单查询',
          url: ''
      }, ],

  },
  showGuidance() 
  {
      this.setData
      ({
          select1: !this.data.select1
      })
  },
  showConsultation() 
  {
      this.setData({
          select2: !this.data.select2
      })
  },

  goToFeedback()
  {
      //传送链接
  },

  mySelect: function (e) {
    let url = e.currentTarget.dataset.url
    if (url) {
      wx: wx.navigateTo({
        url: url,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },
  goToMyDoctor: function(e)
  {
    //传送链接
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