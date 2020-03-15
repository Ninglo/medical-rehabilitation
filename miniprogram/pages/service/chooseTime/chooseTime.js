Page({

  /**
   * 页面的初始数据
   */
  data: {
    choiceList: []
  },

  toChoDoctor: function (e) {
    wx: wx.navigateTo({
      url: "../chooseDoctor/chooseDoctor"
    })
  },
})