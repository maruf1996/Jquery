$(".hide").click(function () {
  $("h1").hide();
});
$(".show").click(function () {
  $("h1").show();
});
// $(".toggle").click(function () {
//   $("h1").toggle();
// });
$(".toggle").on("click", function () {
  $("h1").toggle();
});

$(".fadein").click(function () {
  $("h2").fadeIn();
});
$(".fadeout").click(function () {
  $("h2").fadeOut();
});
$(".fadetoggle").click(function () {
  $("h2").fadeToggle();
});

$(".slideup").click(function () {
  $(".box").slideUp();
});
$(".slidedown").click(function () {
  $(".box").slideDown();
});
$(".slidetoggle").click(function () {
  $(".box").slideToggle();
});

function newFunction() {
  alert("animation has been done");
}

$(".animate").click(function () {
  $(".box").animate(
    { left: "350px", width: "150px", height: "150px" },
    3000,
    newFunction
  );
});

$(".chain").click(function () {
  $(".box").slideUp(5000).slideDown(3000);
});

// var buttonText = $(".chain").text();
// var buttonText = $(".chain").text("Chain Text Replace");
var buttonText = $(".box-2").html("<h4>New Heading</h4>");
var inputText = $("input").val("Mariful Islam");

$(".box-2").before("Before Text");
$(".box-2").after("After Text");

$(".heading").prepend(" 'Prepend Text' ");
$(".heading").append(" 'Append Text'");

$(".remove").remove();

$(".empty").empty();

$(".css").css({
  color: "red",
  fontWeight: "600",
  fontSize: "30px",
});

$(".add-color").click(function () {
  $(".box-design").addClass("set-color");
});
$(".remove-color").click(function () {
  $(".box-design").removeClass("set-color");
});
$(".toggle-color").click(function () {
  $(".box-design").toggleClass("set-color");
});

$(".box-5").width("400px");

// parent(), parents(), parentsUntil(),

// $(".new-heading").parent().addClass("parent");
// $(".new-heading").parents().addClass("parents");
// $(".new-heading").parentsUntil().addClass("parentsUntil");
$(".new-heading").parentsUntil(".container").addClass("parentsUntil");

// children(), find()
// $(".container").children().addClass("children");
$(".container").find("h1").addClass("children");

// siblings()
// $(".container span").siblings().addClass("siblings");
$(".container span").siblings("p").addClass("siblings");

// first(), last()
$(".text-group p").first().css("color", "red");
$(".text-group p").last().css("color", "red");
