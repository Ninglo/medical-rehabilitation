//app.js
App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: "dev-id-ylkf",
        traceUser: true
      });
    }
    this.globalData = {
      header: { Cookie: "" },
      userData: false,
      className: "请选择您的课程"
    };
  }
});
