/*
卵の分量は別で作り、1サイズごとに+1
その他の場合:使いたい型の体積/レシピの型の体積
*/


function cal_Button() {
    var res_kata = document.getElementById("res_size");
    var my_kata = document.getElementById("my_size");
    var result_test = document.getElementById("result1");
    //console.log(res_kata.value);
    //console.log(my_kata.value);

    for (var i = 1; i < 2; i++) {
        //入力された材料の分量（元レシピの分量）取得
        var mate_g = document.getElementById("zai_g" + String(i));
        //divの中に要素を挿入用（結果出力）
        var result_g = document.getElementById("mate" + String(i));

        //丸型→丸型(使いたい型の半径)^2÷(レシピの型の半径)^2＝X
        if (document.getElementById("maru_maru").checked) {
            var maru = (Math.pow((my_kata.value) / 2, 2) / Math.pow((res_kata.value) / 2, 2)).toFixed(1);
            //document.getElementById("result").textContent = maru;

            //割合を元レシピの材料に掛けて使いたい型の材料の分量を出力
            var mate_re = mate_g.value * +maru;
            //result_g.insertAdjacentHTML("beforeend", String(mate_re));
            console.log(String(mate_re));
        }

        //四角型→四角型(使いたい型の底面積)÷(レシピの型の底面積)＝X
        else if (document.getElementById("shikaku_shikaku").checked) {
            var shikaku = (Math.pow(my_kata.value, 2) / Math.pow(res_kata.value, 2)).toFixed(1);
            document.getElementById("result").textContent = shikaku;
        }

        //丸型→四角型(スクエア型の底面積)÷(丸型の底面積)＝X
        else if (document.getElementById("maru_shikaku").checked) {
            var marushi = (Math.pow(my_kata.value, 2) / (Math.pow(res_kata.value / 2, 2) * 3.14)).toFixed(1);
            document.getElementById("result").textContent = marushi;
        }

        //四角型→丸型(丸型の底面積)÷(スクエア型の底面積)＝X
        else if (document.getElementById("shikaku_maru").checked) {
            var shimaru = (Math.pow(my_kata.value / 2, 2) * 3.14 / Math.pow(res_kata.value, 2)).toFixed(1);
            document.getElementById("result").textContent = shimaru;
        }

        //選択がない場合
        else {
            alert("型の形状を選択してください。");
        }
    }
    result_test.textContent = String(mate_re);
}