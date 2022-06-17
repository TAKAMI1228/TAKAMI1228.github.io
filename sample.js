var dt = new Date();

var y=dt.getFullYear();
var m=dt.getMonth()+1; //今月
var mn=dt.getMonth()+2; //来月
var d=dt.getDate(); //今日の日付

dateT = ["日", "月", "火", "水", "木", "金", "土"];
var day = dateT[dt.getDay()];//曜日

//来月14日の曜日
var dt_next1 = new Date(y, mn-1, 14);//月の部分は月-1（javascriptは「実際の月-1」でデータを取る）
var next14=dateT[dt_next1.getDay()];

//来月15日の曜日
var dt_next2 = new Date(y, mn-1, 15);
var next15 = dateT[dt_next2.getDay()];

//あと何日
var next_piyo=dt_next1.getTime()-dt.getTime();
var count=Math.floor(next_piyo/(1000*60*60*24));
//console.log(count);

//改行コード変換
function Kaigyo(doc){
  Doc=doc.replace(/\n/,"<br>");
  document.write(Doc);
}

//時刻カウント
function t_Real(){
  //現在時刻
  var now_h = dt.getHours();//時間
  var now_m = dt.getMinutes();//分
  var now_s = dt.getSeconds();//秒
  var now_real="現在時刻:"+now_h+"時"+now_m+"分"+now_s+"秒";
}

//days_k = days.replace(/\n/, "<br>");//改行

Kaigyo("毎月14日、15日は「ひよこの日🐥」\n");

//今日の日付
Kaigyo("本日: " + y + "年" + m + "月" + d + "日 " + day + "曜日\n");


//次回のひよこの日
Kaigyo("来月のひよこの日: " + y + "年" + mn + "月" + 14 + "日 " + next14 + "曜日\n");
Kaigyo("　　　　　　　　 "+ y + "年" + mn + "月" + 15 + "日 " + next15 + "曜日\n");

//次回のひよこの日まであとxx日ってつけたいね
Kaigyo("次回のひよこの日まであと"+count+"日"+"(14日の場合)と"+(count+1)+"日"+"(15日の場合)");
