// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    functionCho:[{
      text:"首页",
      url:""
    },{
      text:"课程",
      url:""
    },{
      text:"问诊",
      url:"../interrogation/interrogation"
    },{
      text:"社区",
      url:""
    },{
      text:"商城",
      url:""
    }]
  },
  toMore: function (e) {
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
})