const re_button=document.getElementById('remove');
var checks = document.getElementsByClassName('checks');

//支出額の項目のコピーを追加。
function addFunc(){
    re_button.disabled=false;
    let spe=document.getElementById("data2");
    let sepending_copy=spe.lastElementChild.cloneNode(true);
    spe.appendChild(sepending_copy);
}

const btn=document.getElementById("add");
btn.addEventListener("click",addFunc,false);

//選択項目の削除
function removeFunc() {
    const re=document.getElementById("data2");
    const child=re.getElementsByTagName("div");
    var flag=false;

    console.log(checks.length);

    //前から回すと配列の要素数が変わってしまってうまく回らないため後ろから回す。
    for(var i=checks.length-1;i>0;i--){
        if(checks[i].checked==true){
            flag=true;
            re.removeChild(child[i]);
        }
    }
    if(!flag){
        alert("最低でも項目が一つ必要です。もしくは、項目が選択されていません。");
    }
}


//要素が一つの時はボタンを無効化（間違えて消したら追加ができなくなってしまうため最低一つは残す。）
if(checks.length==1){
    re_button.disabled=true;
}