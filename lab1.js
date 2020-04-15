var list = $('.userlist');
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
    console.log(response);
    $.each(response.data, function(x)){
        var li = $('<li></li>');
        li.text(this.email);
        list.append(li);
    });
})