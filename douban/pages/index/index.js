//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    showLoading: true,
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //获取豆瓣API代码
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      header: { "Content-Type": "json" },
      data: {},
      success: function (data) {
        that.setData({
          showLoading: false,
          data: data.data,
        });
      },
    });
    //获取用户信息
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女 
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(userInfo);
      }
    });
  },
  //成功后获取电影id
  detailmovie: function (e) {
    //使用currentTarget获取id
    var id = e.currentTarget.id;
    app.requestDetailid = id;
    console.log(id);
    //一个应用同时只能打开5个页面，当已经打开了5个页面之后，wx.navigateTo不能正常打开新页面。请避免多层级的交互方式，或者使用wx.redirectTo
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
})