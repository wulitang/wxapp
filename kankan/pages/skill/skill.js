Page({
  data: {
    show:false
  },
  onLoad: function () {
    var that = this;
    console.log('onLoad');
  },
  show:function(){
    var isShow= this.data.show;
    this.setData({
      show:true
    });
  },
  hide:function(){
    var isShow= this.data.show;
    this.setData({
      show:false
    });
  },
})