/*
丸型:(使いたい型の半径)^2÷(レシピの型の半径)^2＝X
四角型:(使いたい型の底面積)÷(レシピの型の底面積)＝X
四角→丸:(丸型の底面積)÷(スクエア型の底面積)＝X
丸→四角:(丸型の底面積)÷(スクエア型の底面積)＝X
*/

function cal_Button() {
    var res_kata = document.getElementById("res_size");
    var my_kata = document.getElementById("my_size");
    //console.log(res_kata.value);
    //console.log(my_kata.value);
    //丸型
    var maru = (Math.pow(my_kata.value, 2) / Math.pow(res_kata.value, 2)).toFixed(1);
    document.getElementById("result").textContent = maru;

    //四角型
}