Page({
  data: {
    showIcon: true,
    swiperList: [{
      imgUrl: '../../resources/course1.jpg',
    }, {
      imgUrl: '../../resources/course2.png',
    }, {
      imgUrl: '../../resources/course3.png',
    }],
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({showIcon: value? false: true})
  }
})