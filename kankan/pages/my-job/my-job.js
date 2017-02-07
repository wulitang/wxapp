Page({
  data:{
    job:[{
      // 头像路径
      head_icon:'/pages/my-job/img/head-icon.png',
      title:'amazon英语运...',
      salary:'5-8k',
      job_text:'深圳市宝安区安全生产监...',
      date:'12月5日',
      full_time:'全职',
      degree:'学历不限',
      industry:'互联网／IT／电'
    }]
    

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})