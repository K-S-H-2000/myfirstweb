function setcolors(backgroundColor,h2color,h1acolor,value){
            document.querySelector('body').style.backgroundColor=backgroundColor;
            document.querySelector('h2').style.color=h2color;
            document.querySelector('h1 a').style.color=h1acolor;
            document.querySelector('#daynightbutton').value=value;
        }