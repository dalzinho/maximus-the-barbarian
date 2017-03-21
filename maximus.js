var maximus = {
  name: 'Maximus the Barbarian',
  weapon: 'Mighty Weapon',
  health: 50,
  anger: 0,
  faveBeer: "Great Beer",
  alive: true,

  drink: function(beer){  
    if (beer === this.faveBeer){
      this.health += 10;
    } else {
      this.anger += 10;
      if(this.anger >= 100){
        this.rampage();
      }
    }
  },

  checkHealth: function(){
    if (this.health <= 0){
      this.alive = false;
    }
  },


  rampage: function(){
    this.health -= 50;
    this.checkHealth();
    return this.name + " smashes the place up!";

  },

  


}

module.exports = maximus;