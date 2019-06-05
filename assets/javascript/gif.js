$(document).ready(function () {

//vars for array of buttons
var topics = ['Babies','Puppies','Kittens','Ponies', 'Ducklings', 'Bambi', 'Chicks','Pigs','Shrek'];


//adding click event listener
$("#buttons").on("click", function (topics) {
  var baby = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + baby +
    "&api_key=2LWuyvR2In1qc9st20gT4JCWDe2hdENT&limit=10";

    // console.log(topics)

  //performing an AJAX request with queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
    })
      .then(function (response) {
        console.log(queryURL);
    
    //storing the data from the AJAX requesting in the results var
    var results = response.data;

    //for loop
    for (var i = 0; i < results.length; i++) {

        //Creating a div tag
        var babyDiv = $("<div>");

        //Creating a paragraph tag with the rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        
        //Creating and storing an img tag
        var babyImage = $("<img>");

        //setting src attribute of the image to a property
        babyImage.attr("src", results[i].images.fixed_height.url);

        //appending the p and img tags to babyDiv
        babyDiv.append(p);
        babyDiv.append(babyImage);

        //prepending the babyDiv to the HTML page
        $("#gifs-appear-here").prepend(babyDiv);

      console.log(babyDiv);

      };
    });
  });
});