function scrollDetect(){
    var lastScroll = 0;
    const logo = document.getElementById("logo")
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          logo.animate([
            {
                width:"100%"
            },{
                width:"10%"
            }
          ],{
            duration: 1000,
            fill:"forwards"
          })
          
          console.log("abajo");
        }
    };
  }
  
  
  scrollDetect();