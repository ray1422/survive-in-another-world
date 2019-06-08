var queue = null;

$(document).ready(function(){
	$("#send").click(function(){
		onsend();
	})
	$("#input").keydown(function(event){
		if(event.which == 13)
			onsend();
	})
})

function onsend(){
	if($("#input").val() != ''){
			if(queue !== null){
				clearTimeout(queue);
			}
			var rd = RandomNumber();
			$("#chat_wrapper").html($("#chat_wrapper").html() + '<div class="mine"><div class="msg">' + $("#input").val() + '</div></div><a id="'+ rd + '" href="#' + rd + '"></a>');
			var re = reply($("#input").val());
			$('#' + rd)[0].click();			
			$("#input").val('')
			//$("#input")[0].focus('')
			
			
			queue = setTimeout(function(){
				var rd2 = RandomNumber();
				$("#chat_wrapper").html($("#chat_wrapper").html() + '<div class="yours"><div class="msg">' + re + '</div></div><a id="'+ rd2 + '" href="#' + rd2 + '"></a>');
				$('#' + rd2)[0].click();
				$("#sound_new")[0].play();

			},(2000 * Math.random()) + 3000)

					

	}
}
function RandomNumber(){
    var array1 = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
　　var Str = "";
    for (var i=1; i<=87; i++)
    {
        index = Math.floor(Math.random() * array1.length);
        Str = Str +array1[index];
    }

  　return Str;

}


function reply(input){
	
	var replyText = "恩恩";
	if(input == ("蝦")
	|| input.indexOf("蛤") >= 0
	|| input.indexOf("蝦?") >= 0
	){
		var j = 0;
		var rd = Math.random();
		var ReQus = new Array();
		ReQus[j++] = '沒事';
		ReQus[j++] = '沒什麼';
		ReQus[j++] = '沒事 今天天氣真好';
		
		var i = ~~(rd * ReQus.length);
		return ReQus[i];
	}
	if(input.indexOf("?") >= 0 
	|| input.indexOf("嗎") >= 0
	|| input.indexOf("什麼") >= 0
	){// 問句
		var j = 0;
		var rd = Math.random();
		var ReQus = new Array();
		ReQus[j++] = '我不知道欸';
		ReQus[j++] = '我不清楚欸0..0';
		ReQus[j++] = '問你囉~';
		
		var i = ~~(rd * ReQus.length);
		return ReQus[i];
	}
	if(input.indexOf("hi") >= 0 ||
		input.indexOf("HI") >= 0 ||
		input.indexOf("Hi") >= 0 ||
		input.indexOf("嗨") >= 0 ||
		input.indexOf("安安") >= 0 ||
		input.indexOf("初次見面") >= 0){// hi
		var j = 0;
		var rd = Math.random();
		var ReQus = new Array();
		ReQus[j++] = '你好';
		ReQus[j++] = '安安';
		ReQus[j++] = '安安你好';
		ReQus[j++] = 'HI';
		ReQus[j++] = '初次見面///';
		
		var i = ~~(rd * ReQus.length);
		return ReQus[i];
	}
	return replyText;
}

