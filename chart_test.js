//内容と支出金額をhtmlから取得しグラフに反映させる。
function box_data() {
    var Label2=[];
    var Array2=[];
    var naiyou=document.getElementsByClassName("nai");
    var shishu=document.getElementsByClassName("spend");
        for (var i=0; i<naiyou.length; i++){
            Label2.push(naiyou[i].value);
            Array2.push(shishu[i].value);
    }

    var mydata = {
        labels: Label2,
        datasets: [
            {
                label: '点数',
                data: Array2,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
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
            text: 'メルセデスベンツ'
        }
    };

    var canvas = document.getElementById('stage');
    var chart = new Chart(canvas, {

        type: 'pie',  //グラフの種類
        data: mydata,  //表示するデータ
        options: options  //オプション設定

    });

}