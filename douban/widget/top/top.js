//index.js
var app = getApp()
Page({
    goindex: function (e) {
    console.log(1);
    wx.navigateTo({
      url: '../index/index',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
})