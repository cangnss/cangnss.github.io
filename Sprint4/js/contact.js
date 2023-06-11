$(document).ready(function () {
  $("#messageDate").datepicker();

  $(".submitBtn").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#surePopup",
        type: "inline",
      },
    });
  });

  $("#cancelPopup").click(function () {
    $.magnificPopup.close({
      items: {
        src: "#surePopup",
        type: "inline",
      },
    });
  });

  $("#confirmPopup").click(function () {
    $.magnificPopup.close({
      items: {
        src: "#surePopup",
        type: "inline",
      },
    });
    toastr.success("Message sent successfully.")
  });
});
