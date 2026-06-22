Page({
  data: {
  },
  onShow:function(e){
    let answer = wx.getStorageSync('answer')
    if (JSON.stringify(answer) != '""'){
      wx.showToast({
        title: '答对了:' + answer +'题',
        icon: 'none',
        duration: 3000
      })
      wx.removeStorageSync('answer')
    }
  },
  questions:function(e){
    wx.redirectTo({
      url: '/pages/question/qa',
    })
  },
})
