var app = getApp()

Page({
  data: {},
  addCourse: function () {
    let courses = app.globalData.courses
    let openid = app.globalData.openid
    console.log(app.globalData)
    console.log(courses)
    course = {
      courseId: this.data.courseId,
      courseName: this.data.courseName,
      intro: 123,
      schedule: '1',
    }
    courses.push(course)
    console.log(2)
    console.log(courses)
    wx.request({
      url: 'https://zzkf.mynatapp.cc/api/userInfo',
      method: 'PUT',
      data: {
        openid,
        courses
      },
      success: (res) => {
        app.globalData.courses = courses
        console.log(res.data)
        console.log('Add success!')
      },
    })
    wx.navigateBack({
    })
  },
  startCourse: function () {
    wx.navigateTo({
      url: "./video"
    });
  },
  onLoad: function (options) {
    var courseId = options.courseId
    console.log(`courseId: ${courseId}`)
    var type = options.type
    let that = this
    this.setData({
      courseId: courseId,
      type: type,
    })
    console.log(this.data)
    wx.request({
      url: `https://zzkf.mynatapp.cc/api/courseInfo/${courseId}`,
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        that.setData({
          courseId: res.data.courseId,
          courseName: res.data.courseName,
          introductions: [res.data.detail.intro],
          actions: res.data.detail.actions,
        })
      }
    })
  }
})
