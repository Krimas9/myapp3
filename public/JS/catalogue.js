$(document).on("click", ".bouttonDetailArticle", function (e) {
  $("#articleMain").show();
  $(".mainArticle").hide();

  console.log(1);
});
$(document).on("click", ".retourCatalogue", function (e) {
  $(".mainArticle").show();
  $("#articleMain").hide();
});
