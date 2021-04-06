let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string2 = "";
string = `
/*你好，我是Elbert
接下来我要加样式
我要加的样式是*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
注意看
首先，把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(8,8,111,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.9876160990712074) 100%);
}
/*加俩阴阳球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%, rgba(8,8,111,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

#div1{
    transform:rotate(0.5turn);
}
`;
let n = 0;
console.log("string.length:" + string.length);
//string = string.replace(/\n/g,"<br>"); //所有回车变成html中换行br
//html.innerHTML = string.substring(0,n);

let step = () => {
  setTimeout(() => {
    // console.log(n)
    console.log(string[n]);
    if (string[n] === "\n") {
      //如果是换行符，那么就转行成html可以识别的<br>
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp"; //html中表示空格
    } else {
      //如果不是换行符，那么就照抄，什么也不做
      string2 += string[n];
    }
    //html.innerHTML = string.substring(0,n)
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //浏览器的滚动条
    html.scrollTo(0, 99999); //手机的滚动条上下
    if (n + 1 < string.length) {
      n += 1;
      step();
    }
  }, 1);
};

step();
