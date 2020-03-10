Page({
  data: {
    userListInfo: [
      {
        text: "修改个人信息",
        url: "/pages/mypage/user-info/info"
      },
      {
        text: "功能2",
        url: ""
      },
      {
        text: "功能3",
        url: ""
      },
      {
        text: "功能4",
        url: ""
      }
    ]
  },

  toNewPage: function(e) {
    let url = e.currentTarget.dataset.url;
    console.log(url);
    wx.navigateTo({
      url: url,
      fail: function(e) {
        console.error(e);
      }
    });
  }
});
