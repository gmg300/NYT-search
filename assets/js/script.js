$(document).ready(function() {

    $('#search-btn').on('click', function(e) {
        e.preventDefault();
        getArticles();
    });

    

    function getArticles() {
        $("#articles-view").empty();
        var query = $('#search-term').val()
        var numArticles = $('#num-retrieve').val();
        console.log(query);
        console.log(numArticles);
        var options = {
            q: $('#search-term').val(),
            apikey: "&api-key=OiNGOaH6j7oxKKYeNI09HkZ7tnJ5HqWn"
        }
        var queryURL =
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        query + "&api-key=OiNGOaH6j7oxKKYeNI09HkZ7tnJ5HqWn";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(res) { 
          for(i = 0; i < numArticles; i++) {
              var count = i + 1;
              var title = res.response.docs[1].abstract;
              var content = res.response.docs[1].lead_paragraph;
              var link = res.response.docs[1].web_url; 
              var block = 
              `<div class="card">
                <div class="card-header">
                  <h5 class="card-title"><span class="bg-navy text-light rounded py-2 px-3 mr-2">${count}</span>${title}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">${content}</p>
                    <a href="${link}" class="btn bg-navy text-light">View Article</a>
                </div>
              </div>` 
              $('#articles-view').append(block);
          }
         
        });
        
      }
    
      



});

