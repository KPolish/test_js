function getIdPw() {
    var id = prompt('ID입력', '');
    var password = prompt(id + '의 사용할 PW입력', '');
    localStorage.setItem('id', id);
    localStorage.setItem('password', password);
}
var password = localStorage.getItem('password');
//if (!password) {
//    getIdPw();
//}
getIdPw();
//password 비교부분 추가해야함
function setIdPw() {
    var pww = prompt('PW 입력','');
    if (pww === localStorage.getItem('password'))
    alert('정상 로그인!');
    else alert('비밀번호가 틀립니다.');
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
    setIdPw();
}

var id = localStorage.getItem('id');
var heading = document.querySelector('h1');
heading.innerHTML = id + 'Homepage';
var myImg = document.querySelector('img');
myImg.onclick = function() {
    var src = myImg.getAttribute('src');
    if (src === 'images/firefox-icon.png')
        myImg.setAttribute('src', 'images/github.png');
    else
        myImg.setAttribute('src', 'images/firefox-icon.png');
}








/*
var myHeading = document.querySelector('h1');
var id = localStorage.getItem('id');
myHeading.innerHTML = 'Cloud Service<br>20180327<br>' + id;
function getIdPw() {
    var text = 'This is a text.';
    text=10.5;
    var a = 33.7;
    var b = a*text;
    //alert(text);
    var iceCream = 'chocolate';
    var id = prompt('ID 입력','');
    alert(id+'가 로그인함.');
    localStorage.setItem('id', id);
    var passwordSys = '12345';
    var password = prompt('PW 입력','');
    if (password === passwordSys)
    alert('정상 로그인!');
    else alert('비번오류');
}
//getIdPw();

//document.querySelector('h1').onclick = function() {
//    getIdPw();
//} 
var myImg = document.querySelector('img');
myImg.onclick = function() {
    var src = myImg.getAttribute('src');
    if (src === 'images/firefox-icon.png')
        myImg.setAttribute('src', 'images/mokwon.png');
    else
        myImg.setAttribute('src', 'images/firefox-icon.png');
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
    getIdPw();
}*/