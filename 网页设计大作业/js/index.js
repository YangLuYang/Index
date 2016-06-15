var addEvent=function (node,event,handler1){
    if (node.addEventListener){
        node.addEventListener(event,handler1,!1);
    }else{
        node.attachEvent('on'+event,handler1);
    }
};
/*  MOD 手风琴效果
 隐藏：点击'canclick'，使原来'noclick'的元素类变为'canclick'，列表高度归零,内容隐藏
 展开: 切换点击元素的类名为'canclick'，内部列表类名切换为'active'
 隐藏着，展开着
 */
function hidden(height,step) {
    step=1;
    var active=document.getElementsByClassName("active")[0];
    height=parseInt(active.style.height);
    if(height-step>=0){
        height-=step;
        active.style.height=height+"px";
        var repeat="hidden("+height+","+step+")";
        var timer=setTimeout(repeat,5);
    }
    else{
//                active.style.display="none";
        active.parentNode.className="canclick";
        active.className="hidden";
        active.style.height="0px";
    }
}
addNodeEvent();
function accordion(event) {
    var active=document.getElementsByClassName("active")[0];
    active.className="hidden";
    active.parentNode.className="canclick";
    var node=event.currentTarget;
    node.className="noclick";
    var hiddenEle=node.getElementsByClassName("hidden")[0];
    hiddenEle.className="active";
    addNodeEvent();
};
function addNodeEvent() {
    var canclick=document.getElementsByClassName("canclick");
    for(var i=0;i<canclick.length;i++){
        addEvent(canclick[i],"click",accordion);
    }
};

//        根据窗口大小自适应导航长度
window.onload=function () {
    monitorWin();
};
function monitorWin(lastWidth) {
    var winWidth;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winWidth = document.documentElement.clientWidth;
    }
    if(lastWidth!=winWidth){
        console.log("当前窗口大小： "+winWidth);
        setNavWidth(winWidth);
    }
    var repeat="monitorWin("+winWidth+")";
    setTimeout(repeat,1);
}
function setNavWidth(winWidth) {
    var navPadding=20;
    var nav=document.getElementsByClassName("list")[0];
    if(winWidth>960){
        navPadding=20+(winWidth-1023)/2;
        if(navPadding<=20){
            navPadding=20;
        }
        console.log("应设置为: "+navPadding);
        nav.style.width=(parseInt(723))+"px";
        nav.style.paddingLeft=navPadding+"px";
//                navAnimation(navWidth);
    }else{
        console.log("应设置为: "+navPadding);
        nav.style.width=(parseInt(723))+"px";
        nav.style.paddingLeft=navPadding+"px";
    }
}