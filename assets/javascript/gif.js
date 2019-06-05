$(document).ready(function () {

//vars for array of buttons
var topics = ['Babies','Puppies','Kittens','Ponies', 'Ducklings', 'Bambi', 'Chicks','Pigs','Shrek'];


    //on click event
    $("#buttons").on("click", function () {
        var baby = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + baby +
            "&api_key=2LWuyvR2In1qc9st20gT4JCWDe2hdENT&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);

            var results = response.data;

            //for loop
            for (var i = 0; i < results.length; i++) {
                console.log(results);
            };
        });

    });
});