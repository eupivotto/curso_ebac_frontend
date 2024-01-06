$("form").on("submit", function (e) {
  e.preventDefault();

  const inputTaskName = $("#task-name").val();
  const newItemTask = $("<li></li>").text(inputTaskName);

  newItemTask.appendTo("ul")
  $(newItemTask).appendTo("ul");
  $("#task-name").val("");
});

$(document).ready(function () {
  $("#button-submit").click(function () {
    $("ul").slideDown();
  });
});

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});
