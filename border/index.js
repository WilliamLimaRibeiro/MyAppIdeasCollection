var topright = 0;
var bottomright = 0;
var topleft = 0;
var bottomleft = 0;

var bordersize;

function topRight(){
    topright = document.getElementById('top-right').value;
    document.getElementById('box').style.borderTopRightRadius = topright + '%';
    codFont()
}

function bottomRight() {
    bottomright = document.getElementById('bottom-right').value;
    document.getElementById('box').style.borderBottomRightRadius = bottomright + '%';
    codFont()
}

function topLeft() {
    topleft = document.getElementById('top-left').value;
    document.getElementById('box').style.borderTopLeftRadius = topleft + '%';
    codFont()
}

function bottomLeft() {
    bottomleft = document.getElementById('bottom-left').value;
    document.getElementById('box').style.borderBottomLeftRadius = bottomleft + '%';
    codFont()
}

function codFont() {
    document.getElementById('cod').value ="border-top-right-radius:"+ topright + "%;\nborder-bottom-right-radius:" + bottomright +"%;\nborder-bottom-left-radius:"+ bottomleft +"%;\nborder-top-left-radius:"+topleft+"%;";
}

function sizeBorder(){
    
    bordersize = document.getElementById('box-border').value;
    document.getElementById('box').style.borderSize = bordersize +'px';
    
}