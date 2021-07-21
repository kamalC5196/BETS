$("#constsel").click(function() {
	$(".modal-content").addClass("animated fadeInDown faster");
    $("#constModal").css("display","block");
	$(".wrapper").css("-webkit-filter","blur(5px)");
});
	  
$("#vers").click(function() {
	$(".modal-content").addClass("animated zoomIn faster");
    $("#verModal").css("display","block");
	$(".wrapper").css("-webkit-filter","blur(7px)");   					
});
      
$("#posi").click(function() {
	$(".modal-content").addClass("animated zoomIn faster");
    $("#posModal").css("display","block");
	$(".wrapper").css("-webkit-filter","blur(7px)");   					
});
	
$("#settings").click(function() {
	$(".ethM").addClass("animated zoomIn faster");
    $("#ethModal").css("display","block"); 
	$(".wrapper").css("-webkit-filter","blur(5px)");
});

$(".ethh").click(function(e) {
	$(".ntwM").addClass("animated zoomIn faster");
    $("#ntwModal").css("display","block");
	$("#ethModal").css("display","none");
	$("#setModal").css("-webkit-filter","blur(5px)");
	$("#setModal").css("display","none");
});

$("#info").click(function() {
	$(".modal-content").addClass("animated zoomIn faster");
    $("#infoModal").css("display","block");
	$(".wrapper").css("-webkit-filter","blur(5px)");
});
	  
$(".close1").click(function() {
    $(".modal-custom").css("display","none");
	$(".wrapper").css("-webkit-filter","none");
	$("#setModal").css("-webkit-filter","none");
});
	  
$(".ntwM > .close1").click(function() {
	$(".ethM").addClass("animated zoomIn faster");
    $("#ethModal").css("display","block"); 
	$(".wrapper").css("-webkit-filter","blur(5px)");
});
      
$(".csb > button").click(function() {
    $(".modal-custom").css("display","none");
	$(".wrapper").css("-webkit-filter","none");
	$("#setModal").css("-webkit-filter","none");
});