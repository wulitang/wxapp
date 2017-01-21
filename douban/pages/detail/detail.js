//var imageUtil = require('../../utils/util.js');
var app = getApp()
var order = ['green', 'red', 'yellow', 'blue', 'green'];
var desc;
Page({
  data: {
    showLoading: true,
    data_summary: {},
    data_movie: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    var url = 'https://api.douban.com/v2/movie/subject/' + app.requestDetailid
    console.log(app.requestDetailid);
    //电影信息
    wx.request({
      url: url,
      header: { "Content-Type": "json" },
      data: {},
      success: function (data) {
        that.setData({
          showLoading: false,
          data_summary: data.data,
        });
        desc = data.data.summary;
      },
    });
    //即将上映的电影
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      header: { "Content-Type": "json" },
      data: {},
      success: function (data) {
        that.setData({
          data_movie: data.data,
        });
      },
    });
  },
    goindex: function (e) {
    console.log(0);
    wx.redirectTo({
      url: '../index/index',
      success: function (res) {
        // success
        console.log(1);
      },
      fail: function (res) {
        // fail
        console.log(2);
         console.log(res);
      },
      complete: function () {
        // complete
        console.log(3);
      }
    })
  },
  //即将上映跳转详情页页
  //成功后获取电影id
  detailmovie: function (e) {
    //使用currentTarget获取id
    var id = e.currentTarget.id;
    app.requestDetailid = id;
    console.log(id);
    //一个应用同时只能打开5个页面，当已经打开了5个页面之后，wx.navigateTo不能正常打开新页面。请避免多层级的交互方式，或者使用wx.redirectTo
    wx.redirectTo({
      url: '../detail/detail',
    })
  },
  //分享功能
  onShareAppMessage: function () {
    var title = "李远的小程序";
    var url = "pages/detail/detail?id=" + app.requestDetailid;
    console.log(url);
    return {
      title: title,
      desc: desc,
      path: url
    }
  },
  // imageLoad: function (e) {
  //   var imageSize = imageUtil.imageUtil(e)
  //   this.setData({
  //     imagewidth: imageSize.imageWidth,
  //     imageheight: imageSize.imageHeight
  //   })
  // }
})