$.fn.extend({
	scrotop : function(itemheight){
		$(this).css({
			"top":scht-itemheight+"px",
			"opacity" : 1
			
		})
	},
	scronone : function(){
		$(this).css({
			"opacity" : 0,
			"transition" : "opacity 0.5s"
		})
	},
});
window.onscroll = function(){
	scht = document.body.scrollTop;	
	now();
	homepage();
	me();
	main();
	friend();
	produ();
	end();
	background();
	console.log(scht);
};
function homepage(){
	scht = document.body.scrollTop;
	if( 0<= scht &&scht <= 400){
		$(".homePage p").addClass("homeplay2");
		$(".homePage .img1").addClass("homeplay1");
	}else{
		$(".homePage p").removeClass("homeplay2");
		$(".homePage .img1").removeClass("homeplay1");
	};
	if( 400<= scht &&scht <= 690){
		$(".homePage p").scrotop(0);
	};
	if(scht >= 600){$(".homePage p").scronone()};
};
function now(scrheight){	
	for(let i=0;i<3 ; i++){
		if(400 <= scht && scht <= 1500){
			$(".nowimg").eq(i).addClass("nowplay1-" + i);
			$(".nowdiv").eq(i).addClass("nowplay2-" + i);
		}else{
			$(".nowimg").eq(i).removeClass("nowplay1-" + i);
			$(".nowdiv").eq(i).removeClass("nowplay2-" + i);
		};
	}
};
function me(){
	scht = document.body.scrollTop;
	if(2300 <= scht && scht <= 2450){
		$(".about .me").scrotop(1770);
		$(".about .abspan1").scrotop(1660);
	}else{
		$(".about .me").css("top", " 450px").css("transition","top 0.5s");
		$(".about .abspan1").css("top","560px").css("transition","top 0.5s");
	}
};
//图片轮播
function about(){
	// let len = $(".change").length,
	// temp = 0,
	// tempNext = 1;

	// $(".mebutton").click(function(){
	// 	if(temp >= len)temp=0;
	// 	if(tempNext >= len)tempNext = 1;
	// 	// for(var i = 0; i<len ; i++){
	// 	// 	if(i!=temp && i!=tempNext)$(".change").eq(i).css({
	// 	// 		"transition":"none",
	// 	// 		"left":0,
	// 	// 		"z-index" : 1
	// 	// 	});
	// 	// };
	// 	if(temp < len){
	// 		$(".change").eq(temp).css({
	// 			"left":"-200px",
	// 			"transition" : "left 1s ",
	// 			"z-index" : 5
	// 		});
	// 	};
	// 	$(".change").eq(tempNext).css({"left":"0"});
	// 	temp++;
	// 	tempNext++;
	// })
	var changes = document.querySelectorAll(".change"),
			len = changes.length,
			btn = document.querySelector(".mebutton"),
			temp = 0,
			tempNext = 1;
		changes[temp].style.left = 0;
	btn.onclick = function(){
		if(temp>=len)temp = 0;
		if(tempNext>=len)tempNext = 0;
		for(var i=0;i<len;i++){
			changes[i].style.transition = "left .8s";
		}
		for(i=0;i<len;i++){
			changes[i].style.left = 200+"px";
			if(i!=temp&&i!=tempNext)changes[i].style.transition = "none";
		}
		changes[temp].style.left = -200+"px";
		changes[tempNext].style.left = 0;
		temp++;
		tempNext++;
	}
	console.log($(".me img"));
};
about();
//创建兴趣卡
var arr=[
	{
		name : "旅游",
		url : "./image/bb3-0.png"
	},
	{
		name : "篮球",
		url : "./image/bb2-0.png"
	},
	{
		name : "越野",
		url : "./image/bb1-0.png"
	},
	{
		name : "看书",
		url : "./image/bb4-0.png"
	},
	{
		name : "电影",
		url : "./image/bb5-0.png"
	}
];

function classify(option){
	option.forEach(function(item,index){
		$("<div></div>").addClass("main").html('<div class="maintopimg"></div><div class="mainline"></div><span class="mainspan">'
				+ item.name +'</span><div class="maintrue">点击详情</div>').appendTo($(".classify"));
		$(".maintopimg").eq(index).css("backgroundImage","url("+item.url+")");
		$(".maintrue").eq(index).click(function(){
			for(var i=0;i<$(".maintrue").length ;i++){
				$(".classbot").eq(i).css("width","0");
			}
			$(".classbot").eq(index).css({
				"width":"1200px",
			});
		});
	});
};
classify(arr);

function main(){
	let temp = 0;
	if(2500 <= scht && scht <= 3800){
		$(".hobby h1").slideDown("slow").delay(2000);
		const maint = setInterval(function(){
			if(temp == 5)temp = 0;
				$(".classify .main-ul .liimg").eq(temp).addClass("mainpaly1");
				$(".main").eq(temp).addClass("mainpaly2");
				temp++;
		},600);
	}else{
		$(".hobby h1").slideUp("slow");
		$(".classify .main-ul img").removeClass("mainpaly1");
		// clearInterval(maint);
	}
};
//加载具体图片
const arr1 = [0,1,2,3,4];
const arr2 = [0,1,2,3,4,5,6,7,8,9];
arr1.forEach(function(item){
	$("<div></div>").addClass("classbot").appendTo(".hobby").html('<div class="close">☹</div>');
	$(".close").eq(item).click(function(){
		$(".classbot").eq(item).css("display","none");
		console.log(1);
	});
	arr2.forEach(function(item1){
		$("<img />").attr("src","./image/d"+ item +"-" + item1+".jpg").appendTo($(".classbot").eq(item));
	});
});
//创建人物
const arr3 = [
	{
		name : "阿昊",
		pijia : "一个UI很厉害的家伙，人很好",
		pp : "p1"
	},
	{
		name : "板栗",
		pijia : "一个原生JS很厉害的，味道不错",
		pp : "p2"
	},
	{
		name : "文杰",
		pijia : "没有什么特长，人很欢乐",
		pp : "p3"
	},
	{
		name : "金博",
		pijia : "全方面都很突出，人比较腼腆,但是很好相处，很安静",
		pp : "p4"
	},
	{
		name : "小月月",
		pijia : "写书出身，有文学功底",
		pp : "p5"
	},
	{
		name : "高峰",
		pijia : "努力的家伙，老实",
		pp : "p6"
	},
	{
		name : "凌杰",
		pijia : "高高的，静静的。。。",
		pp : "p7"
	}
];
arr3.forEach(function(item,index){
	$("<div></div>").addClass("pel").addClass(item.pp).html('<img src="./image/'+ item.pp +'.jpg"><span>'
		+item.name+'</span><p>'+item.pijia+'</p></div>').appendTo($(".friend")).attr("draggable","true");
});
//人物分时段出现
function friend(){
	let temp = 0;
	if(3600 <= scht && scht <= 4900){
		const friendt =setInterval(function(){
			if(temp == 7)temp = 0;
				$(".people").eq(temp).addClass("pplay");
				$(".pel").eq(temp).addClass("pplay");
				temp++;
		},400);
	}else{
		$(".people").removeClass("pplay");
		$(".pel").removeClass("pplay");
	}
};
//作品展示
function produ(){
	let temp = 0,
		len = $(".production ul li").length;
	for(var i  = 0 ;i< len;i++){
		let temp1 = $(".production ul li").eq(i).index();
		$(".production ul li").eq(i).click(function(){			
			for(var j = 0 ; j<len ;j++){
				$(".proimg img").eq(j).css({
					"transform":"rotateX(90deg)"
				});
				$(".production ul li").eq(j).css({
					"backgroundColor" : "white",
					"color":"black"
				});
			};
			$(".proimg img").eq(temp1).css({
					"transform":"rotateX(0deg)"
			});
			$(".production ul li").eq(temp1).css({
				"backgroundColor" : "grey",
				"color":"white"
			});
			$(".production ul li").eq(temp1).click(function(){
				if(temp == 0){		
					$(".proimg img").eq(temp1).css({
						"transform":"rotateX(90deg)"
					});
					$(".production ul li").eq(temp1).css({
						"backgroundColor" : "",
						"color":""
					});
					temp = 1;
				}else{			
					$(".proimg img").eq(temp1).css({
						"transform":"rotateX(0deg)"
					});
					$(".production ul li").eq(temp1).css({
						"backgroundColor" : "grey",
						"color":"white",
					});
					temp = 0;
				};
			});
		});
	};
	if( 4600<= scht &&scht <= 5900){
		$(".production .tio").addClass("tioplay");
		$(".production ul").addClass("tioliplay");
	}else{
		$(".production .tio").removeClass("tioplay");
		$(".production ul").removeClass("tioliplay");
	};
};
function end(){
	if( 5600<= scht){
		$(".end .text1").addClass("txtplay1");
		$(".end .endnew").addClass("txtplay1");
		$(".end .endplace").addClass("txtplay2");
		$(".end .anniu").addClass("txtplay2");
	}else{
		$(".end .text1").removeClass("txtplay1");
		$(".end .endnew").removeClass("txtplay1");
		$(".end .endplace").removeClass("txtplay2");
		$(".end .anniu").removeClass("txtplay2");
	}
};
//背景图片换
function background(){
	if(3200 <= scht && scht <= 5350){
		$(".background").css("backgroundImage","url(./image/bg5.jpg)");
	}else if(scht >= 5400){
		$(".background").css("backgroundImage","url(./image/bg8.jpg)");
	}else{
		$(".background").css("backgroundImage","url(./image/bg0.jpg)");
	};
};
// document.onmousemove = function shubiao1(){
// 	e = arguments[0]||window.event;
// 	x = e.clientX;
// 	y = e.clientY;
// 	$(".pel").eq(2).css({
// 		"position" : "fixed",
// 		"top" : y+"px",
// 		"left" : x + "px",
// 		"transition" : "none"
// 	});
// 	console.log(x,y);
// };
// document.onmousemove = shubiao1;
var VVG = {};  //命名空间
VVG.DOM = {
    $: function(id) { //创建方便的选择符
        return typeof id == "string" ? document.getElementById(id) : id;
    },
    bindEvent: function(node, type, func) { //事件绑定方法
        if (node.addEventListener) {
            node.addEventListener(type, func, false);
        } else if (node.attachEvent) {
            node.attachEvent("on" + type, func);
        } else {
            node["on" + type] = func;
        }
    },
    getEvent: function(event) { //获取事件
        return event ? event : window.event;
    },
    getTarget: function(event) { //获取事件目标
        return event.target || event.srcElement;
    }
}
    var DragDrop =  function() { //新建一个返回对象的函数
        var box = VVG.DOM.$(".friend"); //获取外围BOX
        var dragBox = VVG.DOM.$(".pel");//获取需要拖动的BOX
        var dragging = null; //初始化对象
        function drag(event) { //事件执行函数
            event = VVG.DOM.getEvent(event); 
            var target = VVG.DOM.getTarget(event);
            switch (event.type) {//判断事件类型
            case "mousedown":
                if(target.id == "dragBox"){ //当事件对象的ID等于要拖动的BOX的ID时
                    dragging = target; //赋值到拖动目标
                };
                console.log(1);
                break;
            case "mousemove":
                if(dragging){ //当有拖动目标时执行
                    sTop = document.documentElement.scrollTop || document.body.scrollTop; //当有滚动条的时候卷去页面的高度
                    dragging.style.left = (event.clientX - box.offsetLeft - dragBox.offsetWidth/2) + "px";
                    dragging.style.top = (event.clientY + sTop - box.offsetTop  - dragBox.offsetHeight/2 ) + "px";
                    var left = parseInt(dragging.style.left);
                    var top = parseInt(dragging.style.top);
                    //console.log("left:"+left+"-----top:"+top + "-------sTop:"+sTop);
                    // 比较坐标是否超出外围的BOX
                    if(left < 0){
                        dragging.style.left = 0 +"px";
                    }
                    if(top < 0){
                        dragging.style.top = 0+"px";
                    }
                    if(left > box.offsetWidth - dragBox.offsetWidth){
                        dragging.style.left = (box.offsetWidth - dragBox.offsetWidth - 2 )+"px";
                    }
                    if(top >  box.offsetHeight - dragBox.offsetHeight){
                        dragging.style.top =( box.offsetHeight - dragBox.offsetHeight  - 2 )+"px";
                    }
                }
                break;
            case "mouseup":
                // 清空拖动目标
                dragging = null;
                break;
            }
        };
        return {
            dragStart: function() {
                // 绑定事件
                VVG.DOM.bindEvent(document, "mousedown", drag);
                VVG.DOM.bindEvent(document, "mousemove", drag);
                VVG.DOM.bindEvent(document, "mouseup", drag);
            }
        }
    }();
    DragDrop.dragStart();
