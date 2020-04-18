$("button").click(function() {
  	var list = $('#target');    
    var li = $('<li></li>');
    	li.text($('input').val().toUpperCase());
        list.append(li);
});


$("button").click(function () {
	var mylist = $('#target');
	var listitems = mylist.children('li').get();
	listitems.sort(function(a, b) {
   	return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

})
