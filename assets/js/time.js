let months = ["0","JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
setInterval(function(){
    var date = new Date();
    $(".tme").text(date.getHours().toLocaleString(undefined,{minimumIntegerDigits: 2})+":"+date.getMinutes().toLocaleString(undefined,{minimumIntegerDigits: 2})+":"+date.getSeconds().toLocaleString(undefined,{minimumIntegerDigits: 2}));
    $(".dte").text(date.toDateString());
},1000);