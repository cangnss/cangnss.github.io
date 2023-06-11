$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/comments",
    dataType: "json",
    success: function (data) {
      console.log("data: ", data);
      data.forEach((item, index) => {
        if (index < 20) {
          var element = cardElement(item);
          $("#commentsTable").append(element);
        }
      });
    },
    error: function (xhr, status, error) {
      console.log("AJAX Error:", error);
    },
  });

  function cardElement(props) {
    return `
        <tr>
            <td>${props.id}</td>
            <td>${props.email}</td>
            <td>${props.body}</td>
        </tr>
    `;
  }
});
