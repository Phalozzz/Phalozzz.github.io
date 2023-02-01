// 浏览器搞笑标题
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/webicon ver2-dark.png");
        //  clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/webicon ver2-light.png");
        //  titleTime = setTimeout(function () {
        //     //  document.title = OriginTitle;
        //  }, 2000);
     }
 });