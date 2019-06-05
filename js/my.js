$(document).ready(function(){
        $('.bxslider').bxSlider({
          mode:'horizontal',
          auto:true,
         // slideWidth: 6000

      });
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        //$(".inspect").html(scrollTop);
//        if(scrollTop>15){
//           $("#Home-slider").css({"top":"10px",
//                                      "opacity":"10"});
//           } else {
//            $("#Home-slider").css({"top":"100px","opacity":"0.5"});   
//           }
        
    });
    $(window).resize( function(){
        //$(".inspect").html($(window).innerWidth());
        $("#Medium_dropDown").hide();
        $(".search-toggle").hide();
        $(".navigation-toggle").hide();
    });
    
    
    $("a.More-Menus").click( function(){
        $("#Medium_dropDown").slideToggle();
    });
    
    
    $(".search-toggle").hide();
    $(".navigation-toggle").hide();
    
    $("#Menu_trig").click( function(efv){
        efv.preventDefault();
        $(".navigation-toggle").slideToggle();
        $(".search-toggle").hide();
        
    });
    $("#search_trig").click( function(efv){
        efv.preventDefault();
        $(".search-toggle").slideToggle();
        $(".navigation-toggle").hide();
    });
    
    // start sliding script
    
    var exponentialvalues = new Array();
        for(var ii=0;window.innerWidth>Math.pow(1.05,ii);ii++){
            exponentialvalues.push(Math.pow(1.05,ii));
            //console.log(Math.pow(1.05,ii))
        }
    
    function swipethis(htmlelemt,posi){
            var timevar = 1;
            var posii = posi-1;
            if(posi==0)
                posii = htmlelemt.length - 1;
            //alert(Math.pow(,timevar));
            var xx = setInterval( function(){
                //$(htmlelemt[posii]).css('left','-'+exponentialvalues[timevar]+'px');
                htmlelemt[posii].style.left = '-'+exponentialvalues[timevar]+'px';
                //htmlelemt[posii].style.display = "none";
                if(timevar>exponentialvalues.length){
                    clearInterval(xx);
                    $(htmlelemt[posii]).hide();
                    $(htmlelemt[posi]).css('left','0px');
                    $(htmlelemt[posi]).fadeIn(2000,'swing', function(){
              
                });
                }
                timevar++;
            },1)
        }
    
        var slidingimgs = $(".pipslide");
       slidingimgs.css("position","absolute");
        var jsslidingimgs = document.getElementsByClassName("pipslide");
        var sizes = slidingimgs.length;
        var inity = 1;
        slidingimgs.hide();
        $(jsslidingimgs[0]).show();
        setInterval( function(){
            swipethis(jsslidingimgs,inity);
            inity++;
            if(inity==sizes)
                inity = 0;
        },8000);
    
    
    // end sliding script
    
});