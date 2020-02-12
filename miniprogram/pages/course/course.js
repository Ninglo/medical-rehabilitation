// miniprogram/pages/course/course.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    courses: [],
    oneSentence:'查看更多',
    listLen:1,
    navbartxt: ['课程类型1','2','3','4'],
    course:[
      {
        courseTitle:'康复课程xxx',
        courseIntdc:'一段介绍 | 时间',
        url:'./detail/detail.wxml'
      },
      {
        courseTitle: '康复课程xxx',
        courseIntdc: '一段介绍 | 时间',
        url:''
      },
      {
        courseTitle: '康复课程xxx',
        courseIntdc: '一段介绍 | 时间',
        url:''
      },
      {
        courseTitle: '康复课程xxx',
        courseIntdc: '一段介绍 | 时间',
        url:''
      },
      {
        courseTitle: '康复课程xxx',
        courseIntdc: '一段介绍 | 时间',
        url:''
      }
    ],
  },
  viewMore: function () {
    var listLen = this.data.listLen + 1;
    console.log(listLen);
    this.setData(
      {
        listLen: listLen
      }
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 模拟获得数据
    this.setData({
      courses: [
        {
          id: 1,
          name: "xxx",
          picture: "urlxxxx"
        },
        {
          id: 2,
          name: "xxx",
          picture: "urlxxx"
        }
      ]
    });
  },

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
