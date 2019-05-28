x = 13;

document.onkeydown = function(e) {
    switch (e.keyCode) { //e is voor de functie onkeydown, keycode is zodat je keycodes kan gebruiken ipv noramle intgers
        case 37: //left
            if (x==1 || x==6 || x==11 || x==16 || x==21) { // linker rij met kollomen
                document.getElementById(x).setAttribute("style","background-color: black;");
            }else{
                document.getElementById(x).setAttribute("style","background-color: white;");
                x--;
                document.getElementById(x).setAttribute("style","background-color: black;");
            }
            break;
        case 38: //up
            if (x<=5) { // bovenste rij met kollomen
                document.getElementById(x).setAttribute("style","background-color: black;");
            }else{
                document.getElementById(x).setAttribute("style","background-color: white;");
                x-=5;
                document.getElementById(x).setAttribute("style","background-color: black;");
            }
            break;
        case 39: //right
            if (x==5 || x==10 || x==15 || x==20 || x==25) { //rechter rij met kollomen
                document.getElementById(x).setAttribute("style","background-color: black;");
            }else{
                document.getElementById(x).setAttribute("style","background-color: white;");
                x++;
                document.getElementById(x).setAttribute("style","background-color: black;");
            }
            break;
        case 40: //down
            if (x>=21) { // onderste rij met kollomen
                document.getElementById(x).setAttribute("style","background-color: black;");
            }else{
                document.getElementById(x).setAttribute("style","background-color: white;");
                x+=5;
                document.getElementById(x).setAttribute("style","background-color: black;");
            }
            break;
    }
}
