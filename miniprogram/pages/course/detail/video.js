// pages/index2/index2.js
Page({

  globalData: {
    i:0
  },
  /**
   * 页面的初始数据
   */
  data: {
    text1: "这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍",
    text2: "这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍" ,
    text3: "这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍" ,
    videos : [
      "https://media.w3.org/2010/05/sintel/trailer.mp4",
      "http://www.w3school.com.cn/example/html5/mov_bbb.mp4",
      "https://www.w3schools.com/html/movie.mp4",
      "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8"
    ],
    i:0
  },
  clickButton: function () {
    var that=this;
    let videos = that.data.videos;
    let i = that.data.i;
    if (i + 1 < videos.length) {
      i = i + 1;
      that.setData({i})
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    i = 0, 
    len = videos.len
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