var cnt = 0;       /* 定义一个全局变量 */
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        condition_1: false,
        condition_2: false,
				condition_3: false,
				isHidden:false,
    },

    /**
     * 按压按钮出现的事件
     */
    MyButton_1(e) {
        if(cnt == 0)
        {
            this.setData({
                condition_1: true
            });
            cnt++;
        }
        else if(cnt == 1)
        {
            this.setData({
                condition_2: true
            });
            cnt++;
        }
        else if(cnt == 2)
        {
            this.setData({
								condition_3: true,
								isHidden: !this.data.isHidden
						});
						cnt++;
				}	
    }
})