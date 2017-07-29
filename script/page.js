var userName = '';
var whoToTalk = '';
var chatLoaded  = false;
$(document).ready(function(){
	page();
	loading();
	
	$('#chat').mouseover(function(){
		chatStyle();
	})
	
	$("#whoToTalk tr").click(function(){
		whoToTalk = $(this).data('value');
		$("#whoToTalk tr").css('background', "#fff");
		$(this).css('background', '#f4ff5f');
	})
	
});

function goPage(pageTo,pageFrom){	
	pageFrom = pageFrom!==null ? pageFrom : 0;
	if(pageFrom !== null){
		$("[data-page='" + pageFrom + "']").css('opacity', 0);
		
		//setTimeout(function(){
			$("[data-page='" + pageTo + "']").css('display', 'block');
			$("[data-page='" + pageTo + "']").css('transition', '2s');
			$("[data-page='" + pageTo + "']").css('opacity', 0);
		//}
		setTimeout(function(){
			$("[data-page='" + pageTo + "']").css('opacity', 1);
		}, 200);
		
		setTimeout(function(){
			$("[data-page='" + pageFrom + "']").css('display', 'none');
			
		}, 2000);
	}
	
}

function nameSend(){
	if($("#name").val() == ''){
		alert("主人 請正確的輸入名字呦");
		return;
	}
	else {
		userName = $("#name").val();
		goPage(2,1)
	}
}

function getInChat() {
	var avatar = 'unknown.png';
	if(whoToTalk !== ""){
		var realName;
		if(whoToTalk == 'rem'){
			avatar = 'rem.png';
			realName = 'レム';
		}
		else if(whoToTalk == 'sagiri'){
			avatar = 'sagiri.jpg';
			realName = '和泉 紗霧';
		}
		else if(whoToTalk == 'shimakaze'){
			realName = 'しまかぜ';
		}		
		goPage(3,2);
		
		$("#chat header h4 span").text(realName);
		setTimeout(function(){goPage(4,3)},5000);
	}
}






function page(){
	$(".page-wrapper").height($(window).height() * 0.90);
	$(".page-wrapper").css('top',($(window).height() * 0.05));
	$(".page-wrapper").css('left',($(window).width() - $(".page-wrapper").width()) / 2);
	

	
}
function loading(){
	$(".cssload-container").css('top',($(window).height() / 2 - $(".cssload-container").height() / 2))
	//goPage(0,'null');
	setTimeout(function(){goPage(1,0)},5000)
}
function chatStyle(){
	if(chatLoaded)return;
	$("#chat article").css('top',$("#chat header").height())
	$("#chat article").animate({scrollTop: $("#chat article").height()}, 200);
	//$("#chat footer").css('top',$("#chat article").height() + $("#chat article").css('top'));
	$("#chat footer").height($("#chat").height() - $("#chat header").height() - $("#chat article").height())
	chatLoaded = true;
}

