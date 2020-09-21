Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "水果",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '樱桃',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 2,
              name: '樱桃',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 3,
              name: '樱桃',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 4,
              name: '樱桃',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "干果",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 2,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 3,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 4,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 5,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 6,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 7,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            },
            {
              child_id: 8,
              name: '夏威夷果',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "蔬菜",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '有机上海青',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
            },
            {
              child_id: 2,
              name: '有机上海青',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
            },
            {
              child_id: 3,
              name: '有机上海青',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
            },
            {
              child_id: 4,
              name: '有机上海青',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "海鲜",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  clickLoad: function () {
    wx.navigateTo({
      url: 'detail/detail',
    })
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})