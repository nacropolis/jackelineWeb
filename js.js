function scrollDetect() {
  var lastScroll = 0;
  const logo = document.getElementById("logo");

  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;

      logo.animate(
        [
          {
            width: "80%",
            height: "100%",
            marginLeft: "0%",
          },
          {
            width: "20%",
            height: "20%",
            marginLeft: "23%",
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );
      document.getElementById("logos").style.padding = "5%";

      console.log("abajo");
    }
  };
}

function changeSocial() {
  const SocialNetI = document.getElementById("insta");
  const SocialNetF = document.getElementById("face");
  const SocialNetX = document.getElementById("twitterX");
  const BGC = document.getElementById("sidebar");
  SocialNetF.style.opacity = "0";
  SocialNetX.style.opacity = "0";
  setTimeout(function () {
    SocialNetI.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "15%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 6000);
  setTimeout(function () {
    BGC.animate(
      [
        {
          backgroundImage:
            'url("data:image/jpeg;base64,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")',
        },
        {
          backgroundImage:
            'url("https://images.squarespace-cdn.com/content/v1/5edd47c42cb3cc498e22f7b7/1597355759911-OBFMRX2KQT7936ZIVWR2/beautiful-color-ui-gradients-backgrounds-endless-river.png")',
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
    document.getElementById("TxtSocial").animate([
      {
        
        opacity:"1",
        marginLeft:"0"
      },
      {
        
        opacity:"0",
        marginLeft:"23%"
      }
      ,
      {
        
        opacity:"0",
        marginLeft:"-23%"
      },
      {
        
        opacity:"1",
        marginLeft:"0"
      }
    ],
    {
      duration: 1500,
      fill: "forwards",
    });
  }, 6000);
setTimeout(function(){
  document.getElementById("TxtSocial").textContent="X"
},6500);
  SocialNetX.style.marginLeft = "-15%";
  setTimeout(function () {
    SocialNetX.animate(
      [
        {
          opacity: "0",
          marginLeft: "-15%",
        },
        {
          opacity: "1",
          marginLeft: "0%",
        },
      ],
      {
        duration: 3000,
        fill: "forwards",
      }
    );
  }, 6000);

  SocialNetF.style.marginLeft = "-15%";
  setTimeout(function () {
    SocialNetX.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "15%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );document.getElementById("TxtSocial").animate([
      {
        
        opacity:"1",
        marginLeft:"0"
      },
      {
        
        opacity:"0",
        marginLeft:"23%"
      }
      ,
      {
        
        opacity:"0",
        marginLeft:"-23%"
      },
      {
        
        opacity:"1",
        marginLeft:"0"
      }
    ],
    {
      duration: 1500,
      fill: "forwards",
    });
  }, 12000);

  setTimeout(function(){
    document.getElementById("TxtSocial").textContent="FACEBOOK"
  },12500);
  setTimeout(function () {
    SocialNetF.animate(
      [
        {
          opacity: "0",
          marginLeft: "-15%",
        },
        {
          opacity: "1",
          marginLeft: "0%",
        },
      ],
      {
        duration: 3000,
        fill: "forwards",
      }
    );
  }, 12000);
  setTimeout(function () {
    BGC.animate(
      [
        {
          backgroundImage:
            'url("https://images.squarespace-cdn.com/content/v1/5edd47c42cb3cc498e22f7b7/1597355759911-OBFMRX2KQT7936ZIVWR2/beautiful-color-ui-gradients-backgrounds-endless-river.png")',
        },
        {
          backgroundImage:
            'url("https://img.freepik.com/foto-gratis/nadie-exterior-pared-pagina-vacio_1258-257.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717718400&semt=ais_user")',
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 12000);
  //

  setTimeout(function () {
    SocialNetF.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "15%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );;document.getElementById("TxtSocial").animate([
      {
        
        opacity:"1",
        marginLeft:"0"
      },
      {
        
        opacity:"0",
        marginLeft:"23%"
      }
      ,
      {
        
        opacity:"0",
        marginLeft:"-23%"
      },
      {
        
        opacity:"1",
        marginLeft:"0"
      }
    ],
    {
      duration: 1500,
      fill: "forwards",
    });
  }, 18000);

  setTimeout(function(){
    document.getElementById("TxtSocial").textContent="INSTAGRAM"
  },18500);
  setTimeout(function () {
    SocialNetI.animate(
      [
        {
          opacity: "0",
          marginLeft: "-15%",
        },
        {
          opacity: "1",
          marginLeft: "0%",
        },
      ],
      {
        duration: 3000,
        fill: "forwards",
      }
    );
  }, 18000);
  setTimeout(function () {
    BGC.animate(
      [
        {
          backgroundImage:
            'url("https://img.freepik.com/foto-gratis/nadie-exterior-pared-pagina-vacio_1258-257.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717718400&semt=ais_user")',
        },
        {
          backgroundImage:
            'url("data:image/jpeg;base64,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")',
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 18000);
}
/*
function changeButton() {
  const BtnCon = document.getElementById("BtnCon");
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "23%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 6000);
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "0",
          marginLeft: "-23%",
        },
        {
          opacity: "1",
          marginLeft: "0",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 8000);
  setTimeout(changeText, 8000);
  //TIEMPO 12000
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "23%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 12000);
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "0",
          marginLeft: "-23%",
        },
        {
          opacity: "1",
          marginLeft: "0",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 14000);
  setTimeout(changeText2, 14000);
  //TIEMPO 18000
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          opacity: "0",
          marginLeft: "23%",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 18000);
  setTimeout(function () {
    BtnCon.animate(
      [
        {
          opacity: "0",
          marginLeft: "-23%",
        },
        {
          opacity: "1",
          marginLeft: "0",
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
  }, 20000);
  setTimeout(changeText3, 20000);
  //
}*//*
function changeText() {
  const BtnCon = document.getElementById("BtnCon");

  BtnCon.textContent = "ESTRATEGIAS";
  BtnCon.onclick = function () {
    window.location.href = "estrategias.html";
  };
}
//
function changeText2() {
  const BtnCon = document.getElementById("BtnCon");

  BtnCon.textContent = "CAMPAÑAS";
  BtnCon.onclick = function () {
    window.location.href = "campaña.html";
  };
}
//
function changeText3() {
  const BtnCon = document.getElementById("BtnCon");

  BtnCon.textContent = "CONSULTORIA";
  BtnCon.onclick = function () {
    window.location.href = "consultoria.html";
  };
}*/
function changeBtn(currentIndex, newIndex, event, direction) {
  event.preventDefault();

  const currentElement = document.getElementById(`itemsButtons-${currentIndex}`);
  const newElement = document.getElementById(`itemsButtons-${newIndex}`);

  if (currentElement && newElement) {
      let fadeOutClass = direction === "D" ? 'fade-outD' : 'fade-outI';

      currentElement.classList.add(fadeOutClass);
      currentElement.classList.remove('fade-in');

      setTimeout(() => {
          currentElement.style.display = 'none';
          newElement.style.display = 'block';

          setTimeout(() => {
              newElement.classList.add('fade-in');
              newElement.classList.remove('fade-outD');
              newElement.classList.remove('fade-outI');
          }, 20); // Allow reflow for the fade-in to work
      }, 500); // Match this duration with your CSS transition duration
  }
}
/*
changeButton();
*/changeSocial();/*
setInterval(changeSocial, 24000);
setInterval(changeButton, 24000);*/
scrollDetect();
