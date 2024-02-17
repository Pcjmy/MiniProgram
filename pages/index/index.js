Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses: [],
    searchList: null,
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
    let searchList = null;
    if (value) {
      searchList = this.data.courses.filter(item => item.title.indexOf(value) > -1);
    }
    this.setData({
      showIcon: value ? false: true,
      searchList
    })
  }
})