// pages/consultation/consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data:
  {
      select: false,
      diseaseType: '咨询种类',
      docterType: [{
          text: '专家',
          url: '../chooseDoctor/chooseDoctor'
      }, {
          text: '专业医生',
          url: '../chooseDoctor/chooseDoctor'
      }, {
          text: '营养咨询师',
          url: '../chooseDoctor/chooseDoctor'
      }, {
          text: 'XX医生',
          url: '../chooseDoctor/chooseDoctor'
      }]
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      diseaseType: name,
      select: false
    })
  },
  naviGateToChooseDoctor: function (e) {
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