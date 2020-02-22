// pages/askforplan/askforplan.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal: true,
    doctor: [
      {
        name: "我是医生",
        majorIn: "A",
        src: "../../../image/doctor.png",
        url: "",
        price: "9.99"
      },
      {
        name: "我也是医生",
        majorIn: "B",
        src: "../../../image/doctor.png",
        url: "",
        price: "7.99"
      },
      {
        name: "我还是医生",
        majorIn: "C",
        src: "../../../image/doctor.png",
        url: "",
        price: "5.99"
      }
    ]
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
