var imgIndex
		
$(".gallery img").click(function(){
	var imgUrl = $(this).attr("src")
	$(".overlay img").attr("src", imgUrl)
	$(".overlay").fadeIn()
	$("body").css("overflow","hidden")
			
	imgIndex = $("img").index(this)
})
		
$(".close").click(function(){
	$(".overlay").fadeOut("slow")
	$("body").css("overflow","auto")
})
		
$(".left").click(function(){
	nextIndex(--imgIndex)
})
		
$(".right").click(function(){
	nextIndex(++imgIndex)
})
		
function nextIndex(){
	imgIndex %= $(".gallery img").length
	//$("label").text(Math.abs(imgIndex))
			
	$(".overlay img").fadeOut("fast", function(){
		$(this).attr("src", $(".gallery img").eq(Math.abs(imgIndex)).attr("src")).fadeIn("fast")
	})
}