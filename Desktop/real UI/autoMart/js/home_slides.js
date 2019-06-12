
//getting all divs to of pipslide class, hide the and show the first one only 

 var jsslidingimgs = AutomartClass("pipslide");
 var sizes = jsslidingimgs.length;
 for(var t = 0; t<sizes; t++){
     jsslidingimgs[t].style.display = "none";
     jsslidingimgs[t].style.position = "absolute";
     //jsslidingimgs[t].style.transition = "left 0.01s";
     
 } 
     jsslidingimgs[0].style.display = "block";

// calling the function of sliding 
var inity = 1;
setInterval( function(){
            swipethis(jsslidingimgs,inity);
            inity++;
            if(inity==sizes)
                inity = 0;
        },10000);