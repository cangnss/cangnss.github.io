$(document).ready(function () {
  $("#birthday").datepicker();

  var languages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
  ];

  $("#language").autocomplete({
    source: languages,
  });
});
