
var catItem = $(".cat-item");
var displayItem = $(".cat-display")
var activeCat = $('.active-cat')
var activeCatClicks = displayItem.find('.clicks')

$("#cat-name1").text("Harbie")
$("#cat-name2").text("Sheercat")

displaySelected()

catItem.on('click',function(){
  catItem.removeClass("selected")
  $(this).addClass("selected")
  displaySelected()
})

activeCat.on('click',function(){
  var element = $(this)
  var elementId = element.attr('id')
  $()
  setCatScale(element,"1.1")
  setTimeout(()=>{
    setCatScale(element,"1.01")
  },100)
  updateClicks()
})

function setCatScale(el,scale){
  el.css({transform:`scale(${scale})`});
}

function displaySelected(){
  var selectedCat = $('.cat-item.selected')
  var src = selectedCat.find('img').attr('src')
  displayItem.find('img').attr("src",src)
  getClicks()
}

function updateClicks(){
  var el = $('.cat-item.selected')
  var clicksCount = el.find(".clicks")
  var clicks = Number(clicksCount.text()) + 1
  clicksCount.text(clicks)
  activeCatClicks.text(clicks)
}

function getClicks(){
  var el = $('.cat-item.selected')
  var clicksCount = el.find(".clicks")
  var clicks = clicksCount.text()
  activeCatClicks.text(clicks)
}