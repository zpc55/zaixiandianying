
const app = getApp()

Page({
  data: {
    longitude: 116.4965075,
    latitude: 40.006103,
    speed: 0,
    accuracy: 0
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    var that = this
    wx.showLoading({
      title: "定位中",
      mask: true
    })
    wx.getLocation({
      type: 'gcj02',
      altitude: true,//高精度定位
      //定位成功，更新定位结果
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        that.setData({
          longitude: longitude,
          latitude: latitude,
          speed: speed,
          accuracy: accuracy
        })
       
      },
      onChangeAddress: function () {
          var _page = this;
          wx.chooseLocation({
            success: function(res) {
              _page.setData({
                  chooseAddress: res.name
              });
            },
            fail: function(err) {
              console.log(err)
            }
          });
      },
          
  
      //定位失败回调
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },

      complete: function () {
        //隐藏定位中信息进度
        wx.hideLoading()
      }

    })
  },
  sou: function (e) {
    wx.openLocation({
      latitude: this.latitude,
      longitude: this.longitude,
      name: "花园桥肯德基",
      scale: 28
    })
  },
})
  