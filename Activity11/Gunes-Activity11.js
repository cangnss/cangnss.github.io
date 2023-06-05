$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    $("main").empty();
    var title = $(this).attr("title");

    $.ajax({
      url: `./json_files/${title}.json`,
      dataType: "json",
      success: function (jsonData) {
        var title = $("<h1>").text(jsonData.speakers[0].title);
        var month = $("<h2>").text(jsonData.speakers[0].month);
        var name = $("<h2>").text(jsonData.speakers[0].speaker);
        var image = $("<img>").attr("src", jsonData.speakers[0].image);
        var text = $("<p>").text(jsonData.speakers[0].text);
        
        $("main").append(
          title,
          month,
          name,
          image,
          text
        );
      },
      error: function (xhr, status, error) {
        console.log("AJAX Error:", error);
      },
    });
  });
}); // end ready
