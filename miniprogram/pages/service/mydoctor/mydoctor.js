// pages/mydoctor/mydoctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects: ['神经科', '脑外科', '骨科'],
    hospitals: ['南京中医院', '市xxx医院'],
    doctors:['张三','李四','xxx']
  },
  bindRegionChange: function (e) {
    this.setData({
      chosed: e.detail.value
    })
  },
  bindHospitalChange: function (e) {
    this.setData({
      indexHos: e.detail.value
    })
  },
  bindSubjectChange: function (e) {
    this.setData({
      indexSub: e.detail.value
    })
  },
  bindDoctorChange: function (e) {
    this.setData({
      indexDoc: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  saveMydoctor: function (e) {
    we: wx.navigateTo({
      url: '',
    })
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