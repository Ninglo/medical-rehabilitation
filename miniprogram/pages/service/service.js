Page(
  {
    /**
     * 页面的初始数据
     */
    data:
    {
      title: 'Hello',
      backStyle: 'home',
      barBg: '#f8f8f8',//#ff6600
      color: '#000000', //#ffffff
      list: [
        {
          url: `/pages/service/chatroom/chatroom?docter=sb`,
          title: 'Hello',
          text: 'sb'
        },
        {
          url: `/pages/service/chatroom/chatroom?docter=sb`,
          title: 'Hello',
          text: 'sb'
        }
      ],
      dropDownMenuTitle: ['区域', '来源', '租售', '排序'],
      data1: [
        {
          id: 0,
          title: '不限',
        },
        {
          id: 1,
          title: '道里区',
          childModel: [
            { id: '1-1', title: '中央大街' },
            { id: '1-2', title: '埃德蒙顿路' }]
        },
        {
          id: 2, title: '南岗区',
          childModel: [
            { id: '2-1', title: '果戈里' },
            { id: '2-2', title: '通达街' }]
        },
        {
          id: 3, title: '松北区',
          childModel: [
            { id: '3-1', title: '世茂大道' },
            { id: '3-2', title: '市政府' }]
        }
      ],
      data2: [
        { id: 1, title: '个人房源' },
        { id: 2, title: '经纪人房源' }],
      data3: [
        { id: 1, title: '出租' },
        { id: 2, title: '出售' }],
      data4: [
        { id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }
      ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options)
    {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function ()
    {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function ()
    {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function ()
    {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function ()
    {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function ()
    {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function ()
    {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function ()
    {

    }
  })