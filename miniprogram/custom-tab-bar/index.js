Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/00.png",
      "selectedIconPath": "/images/0.png"
    },
    {
      "pagePath": "/pages/deployFunctions/deployFunctions",
      "text": "个人中心",
      "iconPath": "/images/00.png",
      "selectedIconPath": "/images/0.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})