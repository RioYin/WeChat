Page({
  data: {
    imgUrls: [
      '../../images/bjtu.png', '../../images/bjtu2.png', '../../images/bjtu3.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    list: [{
      listTitle: '家庭健康必备',
      listContent: [{
        listContentIcon: '../../images/xiangshenhuo.png',
        listContentIntroduceTitle: '微医保·住院医疗',
        listContentIntroduceDesc: '132元起，600万保额，报销医疗费用',
        listContentNext: '../../images/icon-chakan.png'
      }, {
        listContentIcon: '../../images/youfuwu.png',
        listContentIntroduceTitle: '微医保·重疾保障',
        listContentIntroduceDesc: '100种重疾确诊全赔，报多少赔多少',
        listContentNext: '../../images/icon-chakan.png'
      }]
    }, {
      listTitle: '有车一族首选',
      listContent: [{
        listContentIcon: '../../images/youhui.png',
        listContentIntroduceTitle: '微车保·驾乘意外险',
        listContentIntroduceDesc: '驾驶、乘坐都可保。享最高20万保额',
        listContentNext: '../../images/icon-chakan.png'
      }]
    }]
  },
  jump: function (e) {
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "../logs/logs"
    })
  }
})