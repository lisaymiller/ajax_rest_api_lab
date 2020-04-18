var num = Math.floor(Math.random()*100);

$("#button1").click(function() {
  	var list = $('li.list1');    
    var li = $('<h1></h1>');
        li.text(num);
        list.append(li);
});

$("#button2").click(function testNum(num) {
	var list = $('li.list2');    
    var li = $('<h3></h3>');

   	p = new Promise((resolve, reject) => {
		if (num > 50) {
			resolve("greater")
		} else {
			reject("less than")
		}
	})

	p.then((message) => {
		li.text('Your number is ' + message + ' than 50!');
		list.append(li);
	}).catch((message) => {
		li.text('Your number is ' + message + ' than 50!');
		list.append(li);
	})
	
});

