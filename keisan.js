/*
丸型:(使いたい型の半径)^2÷(レシピの型の半径)^2＝X
四角型:(使いたい型の底面積)÷(レシピの型の底面積)＝X
四角→丸:(丸型の底面積)÷(スクエア型の底面積)＝X
丸→四角:(丸型の底面積)÷(スクエア型の底面積)＝X

卵の分量は別で作り、1サイズごとに+1
*/

function cal_Button() {
    var res_kata = document.getElementById("res_size");
    var my_kata = document.getElementById("my_size");
    //console.log(res_kata.value);
    //console.log(my_kata.value);

    //丸型→丸型
    /*
    if(document.getElementById("maru_maru")==true)
    {
    }
    */
    var maru = (Math.pow(my_kata.value, 2) / Math.pow(res_kata.value, 2)).toFixed(1);
    document.getElementById("result").textContent = maru;//結果表示

    //四角型→四角型
    var shikaku = (my_kata.value / res_kata.value).toFixed(1);
}