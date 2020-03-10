Page({
  data: {},
  submitUserInfo: function(e) {
    var userInfos = e.detail.value;
    wx.request({
      url: "",
      header: {},
      method: "POST",
      data: "",
      complete: function(res) {
        console.log(res);
      }
    });
  }
});
