Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    console.log('onLoad');
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          systemInfo: res
        })
      }
    });
  },
})