var dt = new Date();

var y=dt.getFullYear();
var m=dt.getMonth()+1; //今月
var mn=dt.getMonth()+2; //来月
var d=dt.getDate(); //今日の日付

var next14=0;
var next15=0;
var dt_next1=0;
var dt_next2=0;
var mess="";

//html表示用
var hiyoday = document.getElementById("hiyoko_day");
var today=document.getElementById("today");
var tohiyo=document.getElementById("todayhiyoko");
var nhiyo=document.getElementById("hiyoko_next");
var chiyo=document.getElementById("hiyoko_count");
var niwa=document.getElementById("niwa");

dateT = ["日", "月", "火", "水", "木", "金", "土"];
var day = dateT[dt.getDay()];//曜日


//改行コード変換
function Kaigyo(doc){
  doc=doc.replace(/\n/,"<br>");
  document.write(doc);
}

//javascriptは「実際の月-1」でデータを取る
if(d<14){
  //今月のヒヨコの日を出す。
  dt_next1 = new Date(y, m-1, 14);
  next14=dateT[dt_next1.getDay()];

  dt_next2 = new Date(y, m-1, 15);
  next15 = dateT[dt_next2.getDay()];

  mess="次回のひよこの日: " + y + "年" + m + "月" + 14 + "日 " + next14 + "曜日"+ " & "+m + "月" + 15 + "日 " + next15 + "曜日\n";
}

else if(d==14){
  dt_next1 = new Date(y, mn-1, 14);
  next14=dateT[dt_next1.getDay()];

  var dt_next2 = new Date(y, m-1, 15);
  next15 = dateT[dt_next2.getDay()];

  mess="次回のひよこの日: " + y + "年" + mn + "月" + 14 + "日 " + next14 + "曜日"+ " & "+m + "月" + 15 + "日 " + next15 + "曜日\n";
}

else if(d>=15){
  //来月14日の曜日
  dt_next1 = new Date(y, mn-1, 14);
  next14=dateT[dt_next1.getDay()];

  //来月15日の曜日
  dt_next2 = new Date(y, mn-1, 15);
  next15 = dateT[dt_next2.getDay()];

  mess="次回のひよこの日: " + y + "年" + mn + "月" + 14 + "日 " + next14 + "曜日"+ " & "+mn + "月" + 15 + "日 " + next15 + "曜日\n";
}

//あと何日
//14日ver.
var next_piyo=dt_next1.getTime()-dt.getTime();
var count=Math.floor(next_piyo/(1000*60*60*24))+1;
//15日ver.
var next_piyo2=dt_next2.getTime()-dt.getTime();
var count2=Math.floor(next_piyo2/(1000*60*60*24))+1;

today.textContent="本日: " + y + "年" + m + "月" + d + "日 " + day + "曜日\n";

if(d==14 || d==15){
  tohiyo.textContent="今日はヒヨコの日！！\n";
}
if(d==28){
  niwa.textContent="本日28日はニワトリの日！！🐓\n";
}

//次回のひよこの日
nhiyo.textContent=mess;
//次回のひよこの日まであとxx日ってつけたいね
chiyo.textContent="次回のひよこの日まであと"+count+"日"+"(14日の場合)と"+count2+"日"+"(15日の場合)";

//鳴き声再生
function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

//ひよこカウンター
var piyo_click=document.getElementById("piyoko");
var piyo_counter=document.getElementById("counter");
let piyo_count=0;

//カウンター10回達成後、日替わりで占い表示


piyo_click.addEventListener("click",() => {
  piyo_count++;
  piyo_counter.innerHTML = "<br><br><h2>ん？こんなところにカウンターが・・・？</h2><br>カウンター:"+piyo_count;
  if(piyo_count>=10){

  }
});

