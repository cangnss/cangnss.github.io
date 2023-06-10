$(document).ready(function () {
  var cardElement = (props) => {
    return `
    <div class="instructor">
      <img src="${props.image}" alt="" class="instructor-img" />
      <h4>Instructor Name: ${props.firstname} ${props.lastname}</h4>
      <p>
        ${props.bio}
      </p>
      <div class="instructor-branch">
        <span class="branch">${props.branchs.firstBranch}</span>
        <span class="branch">${props.branchs.secondBranch}</span>
      </div>
    `;
  };
  $.getJSON("../json_files/instructors.json", function (data) {
    // Map through the instructors and update corresponding HTML elements
    const instructors = data.instructors;
      instructors.map((instructor, index) => {
        index += 1
        var element = cardElement(instructor, index);
        $(`#slider`).append(element);
      });
  }).fail(function () {
    // Log an error message to the console if data fetching fails
    console.log("Error: Cannot fetch data from " + url);
  });
});
