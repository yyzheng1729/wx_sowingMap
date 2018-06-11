// pages/img/img.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //所有的图片需要同一个尺寸
        imgData: [
            "/images/2.jpg",
            "/images/3.jpg",
            "/images/4.jpg",
            "/images/5.jpg"
        ],
        // imgData: [
        //     "/images/6.jpg",
        //     "/images/7.jpg",
        //     "/images/8.jpg"
        // ],
        height: 0
    },
    
    //设置轮播容器的高度
    setContainerHeight: function (e) {

        //图片的原始宽度
        var imgWidth = e.detail.width;

        //图片的原始高度
        var imgHeight = e.detail.height;

        //同步获取设备宽度
        var sysInfo = wx.getSystemInfoSync();
        console.log("sysInfo:", sysInfo);

        //获取屏幕的宽度
        var screenWidth = sysInfo.screenWidth;

        //获取屏幕和原图的比例
        var scale = screenWidth / imgWidth;

        //设置容器的高度
        this.setData({
            height: imgHeight * scale
        })
        console.log(this.data.height);
    }
})