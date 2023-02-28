window.onload = function () {
    // 获取图片容器
    var imgList = document.getElementById('imgList');
    // 获取图片
    var imgArr = imgList.getElementsByTagName('img');
    // 获取图片外部容器
    var imglistBox = document.getElementById('imglistBox');
    // 导航按钮容器
    var carousel = document.querySelector('.Carousel');
    // 获取导航按钮里的a
    var allA = carousel.getElementsByTagName('a');

    // 设置图片容器宽度
    // imgList.style.width = imglistBox.offsetWidth * imgArr.length;

};