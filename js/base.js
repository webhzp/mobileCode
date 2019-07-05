$(function () {
    //导航菜单显示
    $(".navBtn").click(function(event){
        var e = window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $(".nav").toggle();
    });

    // 导航菜单取消冒泡
    $(".nav").click(function(event){
        var e = window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    });

    // 点击空白处关闭导航菜单
    document.onclick = function(){
        $(".nav").hide();
    };

  

    // 菜单栏折叠功能
    $(".nav-item a").click(function(){
        var className = $(this).parents('li').parents().attr('class'); 
        if(className == "nav-list"){
            $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('selected');//当没选中一级菜单时移除selected
            $(this).parents('li').siblings('li').children('ul').parent('li').children('a').find('i').removeClass('rota');//当没选中一级菜单时移除rota
            $(this).parents('li').siblings('li').children('ul').slideUp();
        }
        if($(this).siblings('ul').css('display') =='none'){
            $(this).addClass('selected');
            $(this).siblings('ul').slideDown();
            $(this).find(".iconfont").addClass("rota");
        }else{
            $(this).removeClass('selected');
            $(this).siblings('ul').slideUp();
            $(this).find(".iconfont").removeClass("rota");
        }
   
    })

    
    // 显示回到顶部按钮
    $(window).scroll(function(){
        // 滚动条距离顶部的距离 大于 屏幕分辨率的高时
        var screenH = window.screen.height;//获取屏幕分辨率的高
        if($(window).scrollTop() >= screenH){
            $(".backTop").show();
            $(".consultBtn").show();
        }else{
            $(".backTop").hide();
            $(".consultBtn").hide();
        }
    });

    // 回到顶部
    $(".backTop").click(function () {
        var speed = 500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
 
})