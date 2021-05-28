// FROM: https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript
$("a[href='#top']").click(function(){
    $("html, body").animate({scrollTop: 0});
    return false;
})