function productOver() {
  var productElement = document.getElementById("product");
  productElement.style = "display: block";
}

function importOver() {
  var importElement = document.getElementById("import");
  importElement.style = "display: block";
}

function exportOver() {
  var exportElement = document.getElementById("export");
  exportElement.style = "display: block";
}

function productOut() {
  var productElement = document.getElementById("product");
  productElement.style = "display: none";
}

function importOut() {
  var importElement = document.getElementById("import");
  importElement.style = "display: none";
}

function exportOut() {
  var exportElement = document.getElementById("export");
  exportElement.style = "display: none";
}

function hospitalityOver() {
  var hospitalityElement = document.getElementById("hospitality");
  hospitalityElement.style = "display: block";
}

function hospitalityOut() {
  var hospitalityElement = document.getElementById("hospitality");
  hospitalityElement.style = "display: none";
}

$(document).ready(function() {
  $(".carousel").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
