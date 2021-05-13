function idcheck() {
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var result = document.getElementById('idcheck');
    if(id.length==0){
        result.style.color = 'red';
        result.innerHTML = '필수입력정보입니다';
    } else if(id.match(exp)){
        result.style.color = 'green';
        result.innerHTML = '유효한 id 형식입니다';
    } else if(!id.match(exp)){
        result.style.color = 'red';
        result.innerHTML = '형식에 맞지 않습니다';
    }
}

function pwdcheck() {
    var pw = document.getElementById('pw').value;
    var checkResult = document.getElementById('pw-check-result');
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$-])[a-zA-Z\d!#$-]{8,18}$/;
    if(pw.length==0){
        checkResult.style.color = 'red';
        checkResult.innerHTML = '필수입력정보입니다.';
    } else if(!pw.match(exp)){
        checkResult.style.color = 'red';
        checkResult.innerHTML = '형식에 맞지 않습니다';
    } else {
        checkResult.style.color = 'green';
        checkResult.innerHTML = '유효한형식입니다.';
    }
}
function pwdconfirm() {
    var pw = document.getElementById('pw').value;
    var pwConfirm = document.getElementById('pw-confirm').value;
    var confirmResult = document.getElementById('pw-confirm-result');
    if(pw == pwConfirm){
        confirmResult.style.color = 'green';
        confirmResult.innerHTML = '일치합니다';
    } else {
        confirmResult.style.color = 'red';
        confirmResult.innerHTML = '일치하지 않습니다';
    }
}

function namecheck(){
    var name = document.getElementById('name').value;
    var result = document.getElementById('namecheck');
    if(name.length==0){
        result.style.color = 'red';
        result.innerHTML = '필수입력정보입니다';
    }
}

function emailcheck(){
    console.log('함수호출');
    var ele = document.getElementById('id1').value;
    var domainValue = document.getElementById('domain');
    domainValue.value = ele;
    document.getElementById('domain').value = ele;
}

function phonecheck() {
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value;
    var result = document.getElementById('checkresult');
    if(phone.match(exp)){
        result.style.color = 'green';
        result.innerHTML = '유효한형식';
    } else if(phone.length==0){
        result.style.color = 'red';
        result.innerHTML = '필수입력정보입니다.';
    }else {
        result.style.color = 'red';
        result.innerHTML = '유효하지 않은 전화번호 형식';
    }
}