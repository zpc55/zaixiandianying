const app = getApp()
Page({
data:{
  userInfo:'',
},
  onTap: function (event) {
    wx.switchTab({
        url:"../posts/post"
    });

    // wx.switchTab({
    //   url: "../posts/posts"
    // });

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  }
})