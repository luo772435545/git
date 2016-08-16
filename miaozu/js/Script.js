/**
 * Created by zql on 2016/1/29.
 */
$(document).ready(function(){
    $(".add").mouseover(function(){
        $(".drop").show();
    });
    $(".add").mouseleave(function(){
        $(".drop").hide();
    });
    $(".area").mouseover(function(){
        $(this).children("i").css("background-position","-12px 0");
        $(".city").slideDown();
    });
    $(".area").mouseleave(function(){
        $(this).children("i").css("background-position","0 0");
        $(".city").slideUp();
    });
    $(".acreage").mouseover(function(){
        $(this).children("i").css("background-position","-12px 0");
        $(".bs").slideDown();
    });
    $(".acreage").mouseleave(function(){
        $(this).children("i").css("background-position","0 0");
        $(".bs").slideUp();
    });
    $(".hous_r li").mouseover(function(){
        $(this).children("div").slideDown();
    });
    $(".hous_r li").mouseleave(function(){
        $(this).children("div").slideUp();
    });
    $(".hous_l").mouseover(function(){
        $(this).children("div").slideDown();
    });
    $(".hous_l").mouseleave(function(){
        $(this).children("div").slideUp();
    });
    $(".hothou li").mouseover(function(){
        $(this).children("div").slideDown();
    });
    $(".hothou li,").mouseleave(function(){
        $(this).children("div").slideUp();
    });
    $(".hothou1 li").mouseover(function(){
        $(this).children("div").slideDown();
    });
    $(".hothou1 li").mouseleave(function(){
        $(this).children("div").slideUp();
    });
    $(".hothou1 li:first").css("margin-left","0")
});