updateQuote();
$(document).ready(() => {
  console.log('jquery');
  $('#submitButton').click( function (e) {
    //e.preventDefault();
    updateQuote();
    console.log("update");
  });
    /*
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $('#quoteText').html(a[0].content);
      $('#quoteAuthor').html(a[0].title);
    })*/
});
/*
function updateQuote(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $('#quoteText').html(a[0].content);
    $('#quoteAuthor').html(a[0].title);
    console.log(a);
  });
}
*/
function updateQuote(){
  $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        console.log(post);
        $('#quoteAuthor').html(post.title);
        $('#quoteText').html(post.content);
      },
      cache: false
    });
}
