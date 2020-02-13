
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userListInfo:[{
      text:'修改个人信息',
      url:'user-info/user-info'
    },{
      text: '功能',
      url:''      
    },{
      text: '功能',
      url:''
    },{
      text: '功能',
      url:''
    }]
  },
  toMore01: function (e) {
    let url = e.currentTarget.setdata.url
    if (url) {
      wx: wx.navigateTo({
        url: url,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },  
  toMore02: function (e) {
    let url = e.currentTarget.setdata.url
    if (url) {
      wx: wx.navigateTo({
        url:url,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },
  toMore03: function (e) {
    let url = e.currentTarget.setdata.url
    if (url) {
      wx: wx.navigateTo({
        url: url,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },  
  toMore2: function (e) {
    let url = e.currentTarget.dataset.url
    if (url) {
      wx: wx.navigateTo({
        url: url,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },

  toMore3:function(e){
    let url = e.currentTarget.setdata.url
    if(url){
      wx:wx.navigateTo({
        url: url,
      })
    }else{
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
