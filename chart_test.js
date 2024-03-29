//計算ボタン用処理プログラム

var chart=null;

//内容と支出金額をhtmlから取得しグラフに反映させる。
function box_data() {
    var f_amo=document.getElementById("full_amount");
    var f_amonum=f_amo.value;
    var result_m = document.getElementById("result");
    var ale=document.getElementsByClassName("text-red-600");
    var Label2=[];
    var Array2=[];
    var bgdata=[];

    var naiyou=document.getElementsByClassName("py-2 border-b focus:outline-none focus:border-b-2 focus:border-green-500 placeholder-gray-500 placeholder-opacity-50");
    var shishu=document.getElementsByClassName("py-2 border-b focus:outline-none focus:border-b-2 focus:border-red-500 placeholder-gray-500 placeholder-opacity-50");
        for (var i=0; i<naiyou.length; i++){
            Label2.push(naiyou[i].value);
            Array2.push(shishu[i].value);
            bgdata.push("rgba(255, 0, 111, 0.2)");
            console.log(shishu[i].value);
            ale[i].textContent="";
            if(shishu[i].value==""){
                ale[i].textContent="数字を入力してください。";
            }
            f_amonum=f_amonum-shishu[i].value;
    }

    Label2.push("残額");
    Array2.push(f_amonum);
    bgdata.push("rgba(0, 165, 221, 0.2)");

    var mydata = {
        labels: Label2,
        datasets: [
            {
                //データ
                label: '金額',
                data: Array2,
                backgroundColor: bgdata,
                borderColor: 'rgb(197, 163, 203)',
                pointBackgroundColor: 'rgb(197, 163, 203)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
                //hoverBackgroundColor: "rgba(255,99,132,0.3)",
            }
        ]
    };

    //「オプション設定」
    var options = {
        title: {
            display: true,
            text: '今月の収入、支出割合'
        }
    };

    //前のグラフのデータを破棄。
    if (chart != null) {
        chart.destroy();
    }

    var canvas = document.getElementById('stage');
    chart = new Chart(canvas, {

        type: 'pie',  //グラフの種類
        data: mydata,  //表示するデータ
        options: options  //オプション設定

    });

    if(f_amonum>0){
        result_m.textContent = "残額は"+String(f_amonum)+"円";
    }
    else if(f_amonum<=0){
        result_m.textContent = "残額は"+String(f_amonum)+"円、借金には気を付けましょう。";
    }
}