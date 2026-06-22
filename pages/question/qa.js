Page({
  data: {
    curring:-1,
    detail: [
      {
        id: '1', title: '邓小平指出，“一个党，一个国家，一个民族，如果一切从本本出发，思想僵化，迷信盛行，那它就不能前进，它的生机就停止了，就要亡党亡国。”这段话非常深刻地说明了',answer:'1',array: [
          { name: '解放思想的重要性', usname: false }, { name: '破除封建迷信的重要性', usname: false },
          { name: '改革开放的重要性', usname: false }, { name: '反对教条主义的重要性', usname: false },
        ]
      },
      {
        id: '2', title: '毛泽东指出，解决中国一切革命问题的最根本的根据是', answer: '2', array: [
          { name: '正确分析中国社会的阶级状况', usname: false }, { name: '认清中国社会的特殊国情', usname: false },
          { name: '正确分析中国社会的经济结构', usname: false }, { name: '认清中国社会的主要矛盾', usname: false },
        ]
      },
      {
        id: '3', title: '什么是社会主义，怎样建设社会主义，是邓小平在领导改革开放和现代化建设过程中，不断提出和反复思考的首要的基本理论问题。搞清楚这一基本理论问题，关键是要：', answer: '3', array: [
          { name: '科学分析我国社会的主要矛盾', usname: false }, { name: '廓清不合乎时代进步和社会发展规律的模糊观念', usname: false },
          { name: '在坚持社会主义基本制度的基础上进一步认清社会主义的本质', usname: false }, { name: '系统总结社会主义社会发展的经验', usname: false },
        ]
      },
      {
        id: '4', title: '邓小平指出：“贫穷不是社会主义，社会主义要消灭贫穷”。这个论断', answer: '4',  array: [
          { name: '概括了社会主义建设的目标', usname: false }, { name: '指出了社会主义的根本任务', usname: false },
          { name: '明确了社会主义的发展方向', usname: false }, { name: '表达了社会主义本质的要求', usname: false },
        ]
      },
      {
        id: '5', title: '中共八大前后，毛泽东在探索中国自己的社会主义建设道路中提出的重要思想不包括', answer: '1',  array: [
          { name: '经济建设必须坚持既反保守又反冒进的方针', usname: false }, { name: '调动一切积极因素，建设社会主义伟大国家', usname: false },
          { name: '走出一条适合中国国情的中国工业化道路', usname: false }, { name: '把正确处理人民内部矛盾作为国家政治生活的主题', usname: false },
        ]
      },
    ],
    number: 0,
    answer:0,
    time: '100',
  },
  onLoad: function (options) {
    let that = this
    let timer = setInterval(function () {
      that.setData({
        time: that.data.time - 1,
      })
      if (that.data.time <= 0) {
        clearInterval(timer);
        wx.showToast({
          title: '时间到！答对了:' + answer + '题',
          icon: 'none',
          duration: 2000
        })
        wx.navigateBack({
          delta: 1
        })
      }
    }, 1000)
  },
  previous:function(e){
    this.setData({
      number: this.data.number-1,
      curring: this.data.curring-1,
    })
  },
  radioChange:function(e){
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let detail = this.data.detail
    for(let i = 0;i<detail.length;i++){
      if(detail[i].id == id){
        detail[i].array[index].usname = true
        for(let j = 0;j<detail[i].array.length;j++){
          if (j != index){
            detail[i].array[j].usname = false
          }
        }
      }
    }
    this.setData({
      detail:detail
    })
  },
  nextstep:function(e){
    let detail = this.data.detail
    let number = this.data.number
    let curring = this.data.curring
    let usname = 0;
    for(let i = 0;i<detail[number].array.length;i++){
      if(!detail[number].array[i].usname){
        usname++
      }
    }
    if(usname == detail[number].array.length){
      wx.showToast({
        title: '答题选项不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    curring++
    number++
    if (curring > 3){
      curring = -1
    }
    this.setData({
      curring: curring,
      number: number,
    })
  },
  subsic:function(e){
    let detail = this.data.detail
    let answer = 0
    let letter = ''
    for(let i = 0;i < detail.length;i++){
      for(let j = 0;j < detail[i].array.length;j++){
        if(detail[i].array[j].usname){
          letter = detail[i].answer-1
          if(letter == j){
            answer++
          }
        }
      }
    }
    wx.showToast({
      title: '答对了:' + answer + '题 '+' 正确答案：[1-A,2-B,3-C,4-D,5-A]',
      icon: 'none',
      duration: 5000
    })
  },
})
