// pages/blank/blank.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hiddenModal: true,
    totalDates: "XX",
    averageDates: "XX",
    minPerday: "XX",
    list: [
      {
        courseTitle: "心理康复",
        courseYear: "XXXX",
        courseMonth: "XX",
        courseDaay: "XX",
        button: "进入训练",
        url: "",
        src: "../../../image/example.png"
      },
      {
        courseTitle: "机能康复",
        courseYear: "XXXX",
        courseMonth: "XX",
        courseDaay: "XX",
        button: "进入训练",
        url: "",
        src: "../../../image/example.png"
      },
      {
        courseTitle: "免费课程2",
        courseYear: "XXXX",
        courseMonth: "XX",
        courseDaay: "XX",
        button: "进入训练",
        url: "",
        src: "../../../image/example.png"
      },
      {
        courseTitle: "付费课程3",
        courseYear: "XXXX",
        courseMonth: "XX",
        courseDaay: "XX",
        button: "进入训练",
        url: "",
        src: "../../../image/example.png"
      }
    ]
  },

  closeModal: function() {
    this.setData({
      hiddenModal: true
    });
  },

  clearPlan: function() {
    this.setData({
      totalDates: "0",
      averageDates: "0",
      minPerday: "0"
    });
  },

  toMyplan: function() {
    this.setData({
      hiddenModal: false
    });
  },

  toChoosecourses: function() {
    wx.navigateTo({
      url: "../choosecourses/choosecourses"
    });
  },

  toAskforplan: function() {
    wx.showModal({
      title: "提示",
      content: "是否支付一笔费用，邀请医生为您定制康复计划表？",
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: "../askforplan/askforplan"
          });
        } else if (res.cancel) {
          return;
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
