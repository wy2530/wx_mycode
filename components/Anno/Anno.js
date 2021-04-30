// components/Anno/Anno.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
     //初始化数据
     hideNotice: false,
     notice: '欢迎来到健康行小程序, 知识竞技, 科学进步, 守护您的健康 '
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击关闭公告
    switchNotice: function() {
      this.setData({
        hideNotice: true
      })
    }
  }
})
