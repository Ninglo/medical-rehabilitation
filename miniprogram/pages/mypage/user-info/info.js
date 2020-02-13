Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    sex:"",
    age:"",
    height:"",
    weight:"",
    tel:"",
    cl1: "modi_2",
    cl2: "modi_2",
    cl3: "modi_2",
    cl4: "modi_2",
    cl5: "modi_2",
    flg1: 0,
    flg2: 0,
    flg3: 0,
    flg4: 0,
    flg5: 0,
    phone: function (param) {
      return /^1(3\d|47|5((?!4)\d)|7\d|8\d)\d{8}$/g.test(param);
    },
    digital: function (param) {
      return /^[1-9][0-9]{0,2}$/g.test(param);
    },
  },
  getName: function (e) {
    this.setData({
      name: e.detail.value
    })
    if(!this.data.name)
    {
      this.setData({
        cl1: "modi_4",
        flg1: 0
      })
    }
    else{
      this.setData({
        cl1: "modi_2",
        flg1: 1
      })
    }
  },
  getSex: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  getAge: function (e) {
    this.setData({
      age: e.detail.value
    })
    if (!this.data.age) {
      this.setData({
        cl2: "modi_4",
        flg2: 0
      })
    }
    else {
      if(this.data.digital(this.data.age))
      {
        this.setData({
          cl2: "modi_2",
          flg2: 1
        })
      }
      else
      {
        this.setData({
          cl2: "modi_4",
          flg2: 0
        })
      }
    }
  },
  getHeight: function (e) {
    this.setData({
      height: e.detail.value
    })
    if (!this.data.height) {
      this.setData({
        cl3: "modi_4",
        flg3: 0
      })
    }
    else {
      if (this.data.digital(this.data.height)) {
        this.setData({
          cl3: "modi_2",
          flg3: 1
        })
      }
      else {
        this.setData({
          cl3: "modi_4",
          flg3: 0
        })
      }
    }
  },
  getWeight: function (e) {
    this.setData({
      weight: e.detail.value
    })
    if (!this.data.weight) {
      this.setData({
        cl4: "modi_4",
        flg4: 0
      })
    }
    else {
      if (this.data.digital(this.data.weight)) {
        this.setData({
          cl4: "modi_2",
          flg4: 1
        })
      }
      else {
        this.setData({
          cl4: "modi_4",
          flg4: 0
        })
      }
    }
  },
  getTel: function (e) {
    this.setData({
      tel: e.detail.value
    })
    if (!this.data.tel) {
      this.setData({
        cl5: "modi_4",
        flg5: 0
      })
    }
    else {
      if (this.data.phone(this.data.tel)) {
        this.setData({
          cl5: "modi_2",
          flg5: 1
        })
      }
      else {
        this.setData({
          cl5: "modi_4",
          flg5: 0
        })
      }
    }
  },
  goToUser_center: function(){
    if (this.data.name && this.data.sex && this.data.age && this.data.height &&       this.data.weight && this.data.tel)
    {
      if (this.data.flg1 == 1 && this.data.flg2 == 1 && this.data.flg3 == 1 &&          this.data.flg4 == 1 && this.data.flg5 == 1)
      {
        wx.navigateTo({
          url: '../mypage',
        })
      }
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
