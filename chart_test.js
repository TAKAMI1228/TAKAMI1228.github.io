//「月別データ」
var mydata = {
    labels: ["国語", "数学", "理科", "社会", "英語"],
    datasets: [
        {
            label: '点数',
            data: [30, 81, 72, 45, 32],
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
        text: 'テスト用'
    }
};

var canvas = document.getElementById('stage');
var chart = new Chart(canvas, {

    type: 'radar',  //グラフの種類
    data: mydata,  //表示するデータ
    options: options  //オプション設定

});