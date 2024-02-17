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
    courses: [{
      imgUrl: '../../resources/vue-course.png',
      title: '微信小程序入门与实战常用组件 开发技巧API 项目实战',
      promotion: true,
      price: 198,
      notice: 'APP购买立减 ￥3',
      level: '中级',
      sales: 2892,
    }],
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({showIcon: value? false: true})
  }
})