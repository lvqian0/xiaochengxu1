// components/SearchInput/SearchInput.js
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
    inputShowed: false,  //初始文本框不显示内容
  },
  // 使文本框进入可编辑状态
  

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true   //设置文本框可以输入内容
      });
    },
    // 取消搜索
    hideInput: function () {
      this.setData({
        inputShowed: false
      });
    },
  }
})
