const util = require('../../utils/util.js')

Page({
  data: {
    gridButton: [{
      img: '../../images/icon_huodong.png',
      text: '保单服务'
    }, {
      img: '../../images/icon_shequ.png',
      text: '理赔服务'
    }, {
      img: '../../images/icon_tuijian.png',
      text: '我的福利'
    }, {
      img: '../../images/icon_shouji.png',
      text: '活动中心'
    }],
    listButton: [{
      icon: '../../images/icon_jifen.png',
      text: '我的红包',
      desc: '红包明细'
    }, {
      icon: '../../images/icon_jifen.png',
      text: '我的福利',
      desc: '查看我的福利'
    }]
  },
  onLoad: function () {
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      getApp().userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          getApp().globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    getApp().globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
