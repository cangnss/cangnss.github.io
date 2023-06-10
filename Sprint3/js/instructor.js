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
  $.ajax({
    url: `../json_files/instructors.json`,
    dataType: "json",
    success: function (data) {
      const instructors = data.instructors;
      instructors.map((instructor, index) => {
        index += 1
        var element = cardElement(instructor, index);
        $(`#slider`).append(element);
      });
    },
    error: function (xhr, status, error) {
      console.log("AJAX Error:", error);
    },
  });
});
