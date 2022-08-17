/*
～未実装だけどいずれは実装したいと思っている項目～
卵の分量は別で作り、1サイズごとに+1
その他の場合:使いたい型の体積/レシピの型の体積
もし卵白と卵黄どちらかが余ってしまうレシピの場合はそれを使ったレシピを紹介
料理の豆知識（Tips）（アクセスするたびにランダムで表示させる）
*/

//型計算
function cal_Button() {
    var res_kata = document.getElementById("res_size");
    var my_kata = document.getElementById("my_size");
    console.log(res_kata.value);

    if(res_kata.value=="" || my_kata.value==""){
        alert("型のサイズが未入力です。");
    }

    for (var i = 1; i < 13; i++) {
        //入力された材料の分量（元レシピの分量）取得
        var mate_g = document.getElementById("zai_g" + String(i));
        //span(id=result~)の中に要素を挿入用（結果出力）
        var result_test = document.getElementById("result" + String(i));

        function mate_Result(kata) {
            var mate_re = mate_g.value * +kata;
            result_test.textContent = String(mate_re);
        }

        //丸型→丸型　四角型→四角型(使いたい型の底面積)÷(レシピの型の底面積)＝X
        if (document.getElementById("maru_maru").checked) {
            var shikaku = (Math.pow(my_kata.value, 2) / Math.pow(res_kata.value, 2)).toFixed(1);
            mate_Result(shikaku);
            //var mate_re = mate_g.value * +shikaku;
            //result_test.textContent = String(mate_re);
        }

        //丸型→四角型(スクエア型の底面積)÷(丸型の底面積)＝X
        else if (document.getElementById("maru_shikaku").checked) {
            var marushi = (Math.pow(my_kata.value, 2) / (Math.pow(res_kata.value / 2, 2) * 3.14)).toFixed(1);
            mate_Result(marushi);
        }

        //四角型→丸型(丸型の底面積)÷(スクエア型の底面積)＝X
        else if (document.getElementById("shikaku_maru").checked) {
            var shimaru = (Math.pow(my_kata.value / 2, 2) * 3.14 / Math.pow(res_kata.value, 2)).toFixed(1);
            mate_Result(shimaru);
        }

    }
}
