var kakaku_Hikaku=()=>{
    var shouhin=document.getElementsByClassName("rounded focus:bg-orange-100 focus:shadow-lg focus:outline-none");//商品名
    var ryou=document.getElementsByClassName("rounded focus:bg-red-100 focus:shadow-lg focus:outline-none");//量
    var kakaku=document.getElementsByClassName("rounded focus:shadow-lg focus:bg-yellow-100 focus:outline-none");//価格
    var result=document.getElementsByClassName("italic font-black");//結果
    var result_min=document.getElementById("result_min");//最安値結果
    var shouhin_a=[];
    var ryou_a=[];
    var kakaku_a=[];
    var hitotsu=[];

    for(var i=0;i<shouhin.length;i++) {
        shouhin_a.push(shouhin[i].value);
        ryou_a.push(ryou[i].value);
        kakaku_a.push(kakaku[i].value);
        hitotsu.push(kakaku[i].value/ryou[i].value);

        result[i].textContent="...1g(個、ml)あたり"+kakaku[i].value/ryou[i].value+"円。";
    }


    var min=Math.min(...hitotsu);
    console.log(hitotsu.indexOf(min));
    result_min.textContent="最安値は"+shouhin_a[hitotsu.indexOf(min)]+"で、1g(個、ml)あたり"+min+"円です。";
};