Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses: [],
  },
  onLoad() {
    wx.request({
      url: 'https://mock.apifox.com/m1/2219384-0-default/api/getData',
      success: (res) => {
        const { data: { data } } = res;
        const { swiperList, courses } = data;
        this.setData({
          swiperList,
          courses
        })
      }
    })
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({showIcon: value? false: true})
  }
})