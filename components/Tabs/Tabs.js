// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表：从父节点接收的数据
   */
  properties: {
     tabs:{
       type: Array,
       value:[]
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表:回调函数
   */
  methods: {
    // 1. 需要在methods中绑定事件
      handleItemTap(e){
        //2. 获取索引 
        const {index}=e.currentTarget.dataset;

        //5. 触发自定义事件
        this.triggerEvent("itemChange",{index});
      }
  }
})
