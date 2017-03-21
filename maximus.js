var maximus = {
  name: 'Maximus the Barbarian',
  weapon: 'Mighty Weapon',
  health: 50,
  anger: 0,
  faveBeer: "Great Beer",
  alive: true,

  drink: function(beer){
    if(this.checkHealth()){
      if (beer === this.faveBeer){
        this.increaseHealth(10);
      } else {
        this.getAngrier(10);
        if(this.anger >= 50){
          this.rampage();
        }
        return "What is this pish?"
      }
    } else {
      return this.name + " is too dead for more beer :(";
    }
  },

  checkHealth: function(){
    var aliveStatus = this.alive;
    if (this.health <= 0){
      this.alive = false;
    }
    return aliveStatus;
  },

  rampage: function(){
    this.health -= 50;
    this.checkHealth();
    return this.name + " smashes the place up with his " + this.weapon;

  },

  increaseHealth: function(amount){
    this.health += amount;
  },

  getAngrier: function(amount){
    this.anger += amount;
  }

}

module.exports = maximus;