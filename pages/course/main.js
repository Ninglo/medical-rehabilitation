var app = getApp()

Page({
    data: {
        display: 'planTable'
    },
    // 切换到要加载的内容
    switchLoad: function (event) {
        var display = event.target.id
        if (display == 'courseLib')
        {
          this.setData({
            display: display,
          })
          if (this.data.libLoad == undefined) {
            let that = this
            wx.request({
                url: 'https://zzkf.mynatapp.cc/api/courseList',
                method: 'GET',
                success: function (res) {
                  console.log(res.data)
                  that.setData({
                    courses: res.data,
                    libLoad: 1,
                  })
                }
            })
          }
        }
        else
        {
            this.setData({
                display: display
            })
        }
    },
    // 打开点击的课程
    openCourse: function (event) {
        let courseId = event.target.id
        console.log(courseId)
        var type = this.data.display == 'planTable' ? 'start' : 'addCourse'
        wx.navigateTo({
            url: `./courseDetail/detail?courseId=${courseId}&type=${type}`
        })
    },
    show: function (event) {
      let courseId = event.currentTarget.dataset.courseid
      console.log(courseId)
      wx.navigateTo({
        url: `./courseDetail/video?courseId=${courseId}`,
      })
    },
    onLoad: function (options) {
      app.employIdCallback = data => {
        if (data.courseId != '') {
          console.log(app.globalData)
          this.setData({
            mycourses: app.globalData.courses
          });
        }
      }
    },
    onShow: function (options) {
      let data = app.globalData
      console.log(data)
      let that = this
      if (data.openid) {
        console.log(app.globalData.courses)
        that.setData({
          mycourses: app.globalData.courses,
          display: 'planTable',
        });
      }
    }
})