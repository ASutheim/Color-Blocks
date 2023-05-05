console.log("🟥 🟦 🟩 🟨");

$(document).ready(onReady);

//The functions below link functions to button clicks:
function onReady() {
  $("#red-btn").on("click", addRedBlock);
  $("#blue-btn").on("click", addBlueBlock);
  $("#yellow-btn").on("click", addYellowBlock);
  $("#green-btn").on("click", addGreenBlock);
  $(".all-blocks").on("click", ".block", removeBlock);
}

//The functions below add blocks of the designated color to the DOM to the page

function addRedBlock() {
  $(".all-blocks").append('<div class="block red-fill"></div>');
}

function addBlueBlock() {
  $(".all-blocks").append('<div class="block blue-fill"></div>');
}

function addYellowBlock() {
  $(".all-blocks").append('<div class="block yellow-fill"></div>');
}

function addGreenBlock() {
  $(".all-blocks").append('<div class="block green-fill"></div>');
}

//The functions below makes color squares disappear when clicked.

function removeBlock() {
  $(this).remove();
}
