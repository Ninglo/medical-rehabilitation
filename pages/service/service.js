// pages/service/service.js
Page({
  data: {
    doctors: [
      1,
      2,
      3
    ],
    status: 0
  },
  switchStatus: function () {
    console.log(this.data)
    var status = this.data.status == 1 ? 2 : 1
    this.setData({
      status: status
    })
  },
  moveTo: function () {
    wx.navigateTo({
      url: 'chooseDoctor/doctorChoice'
    })
  }
})