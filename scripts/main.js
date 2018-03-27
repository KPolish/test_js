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
    var src = myImg.getAttribute('src');
    if (pww === localStorage.getItem('password'))
    {
        alert('정상 로그인!');
        myImg.setAttribute('src', 'images/github.png');
    }
    else 
    {
        alert('비밀번호가 틀립니다.')
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
    setIdPw();
}

var id = localStorage.getItem('id');
var heading = document.querySelector('h1');
heading.innerHTML = id + 'Homepage';
var myImg = document.querySelector('img');

