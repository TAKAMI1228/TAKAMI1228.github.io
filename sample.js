var dt = new Date();

var m=dt.getMonth()+1; //今月
var mn=dt.getMonth()+2; //来月
var d=dt.getDate(); //今日の日付
dateT = ["日", "月", "火", "水", "木", "金", "土"];
var day = dateT[dt.getDay()];//曜日

var days = "本日: " + m + "月" + d + "日 " + day + "曜日\n" + "\n本日: " + m + "月" + d + "日 " + day + "曜日";

str_1 = days.replace(/\n/, "<br>");//改行

document.write(days);
document.write();
