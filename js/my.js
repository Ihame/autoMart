// saving all values to be used in sliding images with exponential values to get nonlinear values for sliding or other purpose

    var get_exponentialvalues = function(indice){
       var expo = new Array();
       for(var ii=0;window.innerWidth>Math.pow(indice,ii);ii++){
        expo.push(Math.pow(indice,ii));
        } 
        return expo;
    }
    var exponentialvalues = get_exponentialvalues(1.029);
    
// START OF DOM SELECTOR AND MANIPULATOR CLASS #########################################################################################
//#########################################################################################################################

   var AutomartId = function(id){
       return document.getElementById(id);
   }
   var AutomartClass = function(Class){
       return document.getElementsByClassName(Class);
   }
   var AutomartElement = function(Element){
       return document.getElementsByTagName(Element);
   }
   var AutomartName = function(Name){
       return document.getElementsByName(Name);
   } 
   class Automart_ELEMNT {
       constructor(CSS_SELECTOR){
           this.VISIBL = true;
           var FIRST = CSS_SELECTOR.substring(0,1);
           this.DisplayType = new Array();
           switch(FIRST){
               case "#":{
                   this._ELEMNT = AutomartId(CSS_SELECTOR.substring(1,CSS_SELECTOR.length));
                   this.TYPE = 0;
                   this.DisplayType.push(this._ELEMNT.style.display);
                   break;
               }
               case ".":{
                   this._ELEMNT = AutomartClass(CSS_SELECTOR.substring(1,CSS_SELECTOR.length));
                   this.TYPE = 1;
                   for(var xx=0; xx<this._ELEMNT.length;xx++){
                      this.DisplayType.push(this._ELEMNT[xx].style.display); 
                   }
                   break;
               }
               case ":":{
                   this._ELEMNT = AutomartName(CSS_SELECTOR.substring(1,CSS_SELECTOR.length));
                   this.TYPE = 2;
                   for(var xx=0; xx<this._ELEMNT.length;xx++){
                      this.DisplayType.push(this._ELEMNT[xx].style.display); 
                   }
                   break;
               }
               default :{
                   this._ELEMNT = AutomartElement(CSS_SELECTOR);
                   this.TYPE = 3;
                   for(var xx=0; xx<this._ELEMNT.length;xx++){
                      this.DisplayType.push(this._ELEMNT[xx].style.display); 
                   }
                   break;
                   
               }
           }
       }
       hide(){
           switch(this.TYPE){
               case 0 :{
                   this._ELEMNT.style.display = "none";
                   this.VISIBL = false;
                   break;
               }
               default :{
                   for(var xx=0;xx<this._ELEMNT.length;xx++){
                       this._ELEMNT[xx].style.display = "none";
                       this.VISIBL = false;
                   }
                   break;
               }
           }
           
       }
       show(){
           switch(this.TYPE){
               case 0 :{
                       this._ELEMNT.style.display = "block";
                       break;
                   }
               default :{
                   for(var xx=0;xx<this._ELEMNT.length;xx++){
                       this._ELEMNT[xx].style.display = "block";
                   }
                   break;
               }
           }
           this.VISIBL = true;
       }
       show_hide(){
           if(this.VISIBL){
               switch(this.TYPE){
                   case 0:{
                       this._ELEMNT.style.display = "none";
                       break;
                   }
                   default :{
                       for(var xx=0; xx<this._ELEMNT.length;xx++){
                           this._ELEMNT[xx].style.display = "none";
                           
                       }
                       break;
                   }
               }
               this.VISIBL = false;
           } else {
               switch(this.TYPE){
                   case 0:{
                       this._ELEMNT.style.display = "block";
                       break;
                   }
                   default:{
                       for(var xx=0; xx<this._ELEMNT.length;xx++){
                           this._ELEMNT[xx].style.display = "block";
                       }
                       break;
                   }
               }
               this.VISIBL = true;
           }
       } 
       click(callBack){
           switch(this.TYPE){
               case 0:{
                   this._ELEMNT.addEventListener("click", function(edf){
                       edf.preventDefault();
                       callBack();
                   })
               }
               default: {
                   for(var xx = 0; xx < this._ELEMNT.length; xx++){
                       this._ELEMNT[xx].addEventListener("click", function(edf){
                           edf.preventDefault();
                           callBack();
                       })
                   }
                   break;
           }
        }   
      }
   }
   var Automart = function(STR){
       return new Automart_ELEMNT(STR);
   }
 // END OF DOM SELECTOR AND MANIPULATOR CLASS #########################################################################################
//#########################################################################################################################  
   
// START OF SLIDING DEFINITION################################################################################################
   
   
   
   // function that will be used to change from one slide to the other one

   function swipethis(htmlelemt,posi){
            var timevar = 1;
            var posii = posi-1;
            if(posi==0)
                posii = htmlelemt.length - 1;
            var xx = setInterval( function(){
                htmlelemt[posii].style.left = '-'+exponentialvalues[timevar]+'px';
                if(timevar>exponentialvalues.length){
                    clearInterval(xx);
                    htmlelemt[posii].style.display = "none";
                    htmlelemt[posi].style.left = "0px";
                    htmlelemt[posi].style.display = "block";
                }
                timevar++;
            },1)
        }

// END OF SLIDING DEFS ################################################################################################################



// responsive  of the page using Automart Core Javascript


Automart(".search-toggle").hide();
Automart(".navigation-toggle").hide();

var navigation_toggle = Automart(".navigation-toggle");
var search_toggle = Automart(".search-toggle");
var Medium_dropDown = Automart("#Medium_dropDown");

Automart("#Medium_dropDown").hide();
Automart("#Menu_trig").click( function(){
        navigation_toggle.show_hide();
        search_toggle.hide();
    });

Automart("#search_trig").click( function(){
        search_toggle.show_hide();
        navigation_toggle.hide();
    });

Automart(".More-Menus").click( function(){
        Medium_dropDown.show_hide();
    });

window.addEventListener("resize", function(dfd){
    dfd.preventDefault();
    Medium_dropDown.hide();
    search_toggle.hide();
    navigation_toggle.hide();
});






