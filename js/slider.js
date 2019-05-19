var size = 0;
var slideNum = 0;
var xwidth = $('div#slider').width();
var timerID;
$('.flex-control-nav.flex-control-paging li').on('click', function(){
    var index = $('.flex-control-nav.flex-control-paging li').index(this);
    $('.flex-control-nav.flex-control-paging').find('li a').removeClass('flex-active');
    $(this).find('a').addClass('flex-active');

    var slideX = xwidth * index;
    var traStr = 'translate3d(-'+slideX+'px,0,0)'

    $('.slider-image').css({
        '-webkit-transform':traStr,
    });

});
$(function(){
    size = $('.flex-control-nav.flex-control-paging li').length;
    setTimeout('slide()'); //アニメーションを実行
});

function slide() {
    if(slideNum == size){slideNum=0;}
    var slideX = xwidth * slideNum;
    var traStr = 'translate3d(-'+slideX+'px,0,0)'
    $('.flex-control-nav.flex-control-paging').find('li a').removeClass('flex-active');
    $('.flex-control-nav.flex-control-paging li a').eq(slideNum).addClass('flex-active');

    $('.slider-image').css({
        '-webkit-transform':traStr,
    });
    slideNum++;
    timerID = setTimeout('slide()', 6000); //アニメーションを繰り返す間隔
}

$('#next').on('click',function(){
    window.clearTimeout(timerID);
    slide();
});
$('#prev').on('click',function(){
    window.clearTimeout(timerID);
    if(slideNum > 1){
        slideNum = slideNum - 2;
    }else{
        slideNum = size - 1;
    }
    slide();
});