/*
卵の分量は別で作り、1サイズごとに+1
その他の場合:使いたい型の体積/レシピの型の体積
*/

function cal_Button() {
    var res_kata = document.getElementById("res_size");
    var my_kata = document.getElementById("my_size");
    //console.log(res_kata.value);
    //console.log(my_kata.value);

    //丸型→丸型(使いたい型の半径)^2÷(レシピの型の半径)^2＝X
    if (document.getElementById("maru_maru").checked) {
        var maru = (Math.pow((my_kata.value) / 2, 2) / Math.pow((res_kata.value) / 2, 2)).toFixed(1);
        document.getElementById("result").textContent = maru;
    }

    //四角型→四角型(使いたい型の底面積)÷(レシピの型の底面積)＝X
    else if (document.getElementById("shikaku_shikaku").checked) {
        var shikaku = (Math.pow(my_kata.value, 2) / Math.pow(res_kata.value, 2)).toFixed(1);
        document.getElementById("result").textContent = shikaku;
    }

    //丸型→四角型(スクエア型の底面積)÷(丸型の底面積)＝X
    else if (document.getElementById("maru_shikaku").checked) {
        var shikaku = (Math.pow(my_kata.value, 2) / (Math.pow(res_kata.value / 2, 2) * 3.14)).toFixed(1);
        document.getElementById("result").textContent = shikaku;
    }

    //四角型→丸型(丸型の底面積)÷(スクエア型の底面積)＝X
    else if (document.getElementById("shikaku_maru").checked) {
        var shikaku = (Math.pow(my_kata.value / 2, 2) * 3.14 / Math.pow(res_kata.value, 2)).toFixed(1);
        document.getElementById("result").textContent = shikaku;
    }

    //選択がない場合
    else {
        alert("型の形状を選択してください。");
    }
}