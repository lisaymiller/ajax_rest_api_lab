//Get all posts
$("#button1").click(function(){
  //Make a GET request for the items to render
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
    //Iterate over the response, adding elements to DOM
    posts.forEach(function(post){
    //Get reference to the list element
    var list = $('li.list1');    
    var li = $('<li></li>');
        li.text(JSON.stringify(posts));
        list.empty();
        list.append(li);  
    });
})
});

//Get all posts with ID of 10
$("#button2").click(function(){r
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {id: 10},function(posts){
    posts.forEach(function(post){
    var list = $('li.list2');    
    var li = $('<li></li>');
        li.text(JSON.stringify(posts));
        list.empty();
        list.append(li);  
    });
})
});

//Get comments from post with ID of 12
$("#button3").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12}, function(comments){
    comments.forEach(function(comment){
    var list = $('li.list3');    
    var li = $('<li></li>');
        li.text(JSON.stringify(comments));
        list.empty();
        list.append(li);  
    });
})
});

//Get all posts from user with ID of 2
$("#button4").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {id: 2}, function(posts){
    posts.forEach(function(post){
    var list = $('li.list4');    
    var li = $('<li></li>');
        li.text(JSON.stringify(posts));
        list.empty();
        list.append(li);  
    });
})
});

//Create a new post and log the ID generated for it by the server
$("#button5").click(function(){
  $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {userID: 15, title: "Check", body: 123 }, function(datas){
    var list = $('li.list5');    
    var li = $('<li></li>');
        li.text(JSON.stringify(datas.id));
        list.empty();
        list.append(li);  
    });
});

//Replace the post with ID of 12 
$("#button6").click(function(){
  $.ajax({ 
          method: 'POST',
          url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
          data: {
            id: 12,
            title: "Replacement",
            body: "by Lisa."
          },
          complete: function(datas){
            var list = $('li.list6');    
            var li = $('<li></li>');
                li.text(JSON.stringify(datas));
                list.empty();
                list.append(li);  
            }
    });
});

//Replace the title of post with ID of 12
$("#button7").click(function(){
  $.ajax({ 
          method: 'POST',
          url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
          data: {
            id: 12,
            title: "Replacement by Lisa",
          },
          complete: function(datas){
            var list = $('li.list7');    
            var li = $('<li></li>');
                li.text(JSON.stringify(datas));
                list.empty();
                list.append(li);  
            }
    });
});

//Delete the post with ID of 12 and render a success message
$("#button8").click(function(){
  $.ajax({ 
          method: 'DELETE',
          url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
          data: {
            id: 12,
          },
          complete: function(datas){
            var list = $('li.list8');    
            var li = $('<li></li>');
                li.text('Success!');
                list.empty();
                list.append(li);  
            }
    });
});

//Display a list of posts
$("#button9").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
    posts.forEach(function(post){
    var list = $('li.list9');    
    var li = $('<li></li>');
        li.text(JSON.stringify(posts));
        list.empty();
        list.append(li);  
    });
})
});

//When the user clicks on a post, display all the comments from that post
$("#button10").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 15}, function(comments){
    var list = $('li.list10');    
    var li = $('<li></li>');
        li.text(JSON.stringify(comments));
        list.empty();
        list.append(li);  
    });
});

//Display a link back to all the posts
$("#button11").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(comments){
    var list = $('li.list11');    
    var li = $('<li></li>');
        li.html("<a href='https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'>All Posts</a>");
        list.empty();
        list.append(li);  
    });
});

//?????
$("#button12").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
    posts.forEach(function(post){
    var list = $('li.list12');    
    var li = $('<li></li>');
        li.text('Have a good day!! You are important :)');
        list.empty();
        list.append(li);  
    });
})
});

//clear button functions

$("#clear1").on("click", function() {
    $("li.list1").empty();
  });

$("#clear2").on("click", function() {
    $("li.list2").empty();
  });

$("#clear3").on("click", function() {
    $("li.list3").empty();
  });

$("#clear4").on("click", function() {
    $("li.list4").empty();
  });

$("#clear5").on("click", function() {
    $("li.list5").empty();
  });

$("#clear6").on("click", function() {
    $("li.list6").empty();
  });

$("#clear7").on("click", function() {
    $("li.list7").empty();
  });

$("#clear8").on("click", function() {
    $("li.list8").empty();
  });

$("#clear9").on("click", function() {
    $("li.list9").empty();
  });

$("#clear10").on("click", function() {
    $("li.list10").empty();
  });

$("#clear11").on("click", function() {
    $("li.list11").empty();
  });

$("#clear12").on("click", function() {
    $("li.list12").empty();
  });
