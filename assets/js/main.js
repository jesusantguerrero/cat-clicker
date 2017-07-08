var model = {
  init: function () {
    this.cats = [{
        id: 1,
        name: 'Herbie',
        clickCount: 0,
        picture: 'https://i0.wallpaperscraft.com/image/cat_face_glasses_thick_65455_300x168.jpg'
      },
      {
        id: 2,
        name: 'Sheercat',
        clickCount: 0,
        picture: 'http://wallpapercave.com/wp/TxarQV1.jpg'
      },
      {
        id: 3,
        name: 'The twins',
        clickCount: 0,
        picture: 'https://images6.alphacoders.com/334/334727.jpg'
      },
      {
        id: 4,
        name: 'BoredCat',
        clickCount: 0,
        picture: 'http://cdn.wallpapersafari.com/99/42/EU5PQL.jpg'
      },
      {
        id: 5,
        name: 'Ninja Cat',
        clickCount: 0,
        picture: 'http://www.wallpapersfans.com/wp-content/uploads/2016/11/ninja-cat-fight-funny_wallpaper.jpg'
      }
    ]
  },

  getAllCats: function(){
    return this.cats
  },

  getCat: function(name){
    this.activeCat = ''
    this.cats.forEach(function(cat){
      if(cat.name == name){
        activeCat = cat
      }
    })
    return activeCat
  },

  updateClickCount: function(id){
    var index = id - 1
    this.cats[index].clickCount++
    displayView.init(this.cats[index])
  }
}

var octopus = {
  getCats: function(){
    return model.getAllCats();
  },

  updateDisplay: function(name){
    var activeCat =  model.getCat(name)
    displayView.init(activeCat)
  },

  updateClick: function(id){
    model.updateClickCount(id)
  },

  init: function(){
    model.init()
    catListView.init()
    octopus.clickItem()
  }
}

var displayView = {
  init: function(cat){
    this.$display = $('.game-container');
    displayView.render(cat)
  },
  render: function(cat){
    var activeCat = `
      <img class="cats active-cat" src="${cat.picture}"/>
      <p class="cat-name">${cat.name}</p>
      <p class="click-number"> <span class="clicks">${cat.clickCount}</span><span class="text">Clicks</span></p>`
   this.$display.html(activeCat)
   displayView.clickHandler(cat.id)
  },
  clickHandler: function(id){
  
    this.activeCatId = id
    var activeCat = $(".active-cat")
    activeCat.on('click',function(){
      octopus.updateClick(id)
    })
  }
}

var catListView = {
  init: function(){
    this.$catList = $('.cat-list');
    catListView.render()
  },

  render: function(){
    this.catItems = ' '
    octopus.getCats().forEach(function(cat) {
      this.catItems += `<li class="cat-item"><img class="cats" src="${cat.picture}" />
        <p class="name">${cat.name}</p>
      </li>`
    }, this);
    this.$catList.html(this.catItems);
    catListView.clickHandler()
  },
  
  clickHandler: function(){
    var catItem = $(".cat-item")

    catItem.on('click', function () {
      var $this = $(this)
      catItem.removeClass("selected")
      $this.addClass("selected")
      octopus.updateDisplay($this.find('.name').text())
    })
  },
}

octopus.init();