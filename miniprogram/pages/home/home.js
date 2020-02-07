const app =  getApp()

Page(
{
  data: 
  {
    className: '',  // 课程标题
    backStyle: 'home',  // 设置导航栏格式
    barBg: '#f8f8f8', //#ff6600
    color: '#000000', //#ffffff
    menuArrow: '↓',
    showIt: false,
    classMenuTitle: ['nihao'],
    classData: 
    [
      {
        id: 0,
        title: '脑部疾病',
        childModel:
        [
          { id: '0-1', title: '脑病1' },
          { id: '0-2', title: '脑病2' }
        ]
      },
      {
        id: 1,
        title: '心血管疾病',
        childModel: 
        [
          { id: '1-1', title: '血病1' },
          { id: '1-2', title: '血病2' }
        ]
      }
    ]
  },

  getData: function (res)
  {
    console.log(`res.detail.click: ${res.detail.click}`)
    var menuArrow = (this.data.menuArrow === '↓') ? '↑' : '↓'
    this.setData(
      {
        showIt: !this.data.showIt,
        menuArrow: menuArrow
      }
    )
  },

  selectedItem: function(res)
  {
    console.log(res.detail)
    var menuArrow = (this.data.menuArrow === '↓') ? '↑' : '↓'
    this.setData(
      {
        showIt: !this.data.showIt,
        menuArrow: menuArrow,
        className: res.detail.selectedTitle
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    // 调用云函数
    wx.cloud.callFunction(
      {
        name: 'readData',
        success: function(res)
        {
          console.log(res)
        },
        fail: console.error
      },
    )

    // 初始化数据
    this.setData(  
      {
        className: app.globalData.className
      }
    )
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
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})