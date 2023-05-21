$(document).ready(function () {
  $(".card-number").payment("formatCardNumber");
  $(".card-exp").payment("formatCardExpiry");
  $(".card-cvv").payment("formatCardCVC");
  $("#joinCourse1").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#paymentPopup1",
        type: "inline",
      },
    });
  });
  $("#joinCourse2").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#paymentPopup2",
        type: "inline",
      },
    });
  });
  $("#joinCourse3").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#paymentPopup3",
        type: "inline",
      },
    });
  });
  $("#joinCourse4").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#paymentPopup4",
        type: "inline",
      },
    });
  });

  $(".pay-btn1").click(function () {
    var cardNumber = document.getElementById("card-number");
    var cardExp = document.getElementById("card-exp");
    var cardOwner = document.getElementById("card-owner");
    var cardCvv = document.getElementById("card-cvv");
    if (
      cardNumber.value.length == 0 ||
      cardExp.value.length == 0 ||
      cardOwner.value.length == 0 ||
      cardCvv.value.length == 0
    ) {
      toastr.warning("Please! Fill all the blanks!");
    } else {
      $.magnificPopup.close({
        items: {
          src: "#paymentPopup1",
          type: "inline",
        },
      });
      toastr.success("Payment received successfully.");
    }
  });
  $(".pay-btn2").click(function () {
    var cardNumber = document.getElementById("card-number");
    var cardExp = document.getElementById("card-exp");
    var cardOwner = document.getElementById("card-owner");
    var cardCvv = document.getElementById("card-cvv");
    if (
      cardNumber.value.length == 0 ||
      cardExp.value.length == 0 ||
      cardOwner.value.length == 0 ||
      cardCvv.value.length == 0
    ) {
      toastr.warning("Please! Fill all the blanks!");
    } else {
      $.magnificPopup.close({
        items: {
          src: "#paymentPopup2",
          type: "inline",
        },
      });
      toastr.success("Payment received successfully.");
    }
  });
  $(".pay-btn3").click(function () {
    var cardNumber = document.getElementById("card-number");
    var cardExp = document.getElementById("card-exp");
    var cardOwner = document.getElementById("card-owner");
    var cardCvv = document.getElementById("card-cvv");
    if (
      cardNumber.value.length == 0 ||
      cardExp.value.length == 0 ||
      cardOwner.value.length == 0 ||
      cardCvv.value.length == 0
    ) {
      toastr.warning("Please! Fill all the blanks!");
    } else {
      $.magnificPopup.close({
        items: {
          src: "#paymentPopup3",
          type: "inline",
        },
      });
      toastr.success("Payment received successfully.");
    }
  });
  $(".pay-btn4").click(function () {
    var cardNumber = document.getElementById("card-number");
    var cardExp = document.getElementById("card-exp");
    var cardOwner = document.getElementById("card-owner");
    var cardCvv = document.getElementById("card-cvv");
    if (
      cardNumber.value.length == 0 ||
      cardExp.value.length == 0 ||
      cardOwner.value.length == 0 ||
      cardCvv.value.length == 0
    ) {
      toastr.warning("Please! Fill all the blanks!");
    } else {
      $.magnificPopup.close({
        items: {
          src: "#paymentPopup4",
          type: "inline",
        },
      });
      toastr.success("Payment received successfully.");
    }
  });
});
