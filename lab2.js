//promises are part of async programming, don't have to run all the time


var num = Math.floor(Math.random()*100);

$("#button1").click(function() {
  	var list = $('li.list1');    
    var li = $('<h1></h1>');
        li.text(num);
        list.append(li);
});

$("#button2").click(function testNum(num) {
	p = new Promise((resolve, reject) => {
		if (num > 50) {
			resolve(num + "is greater than 50!")
		} else {
			reject(num + "is less than 50!")
		}
	})
	// return p //uncaught promise??
	var list = $('li.list2');    
    var li = $('<h1></h1>');
        li.text(p.data);
        list.append(li);
});

//clear button functions

$("#clear1").on("click", function() {
    $("li.list1").empty();
 });
$("#clear1").on("click", function() {
    $("li.list1").empty();
 });