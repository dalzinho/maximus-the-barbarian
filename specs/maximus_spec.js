var maximus = require('../maximus');
var assert = require('assert');

describe('Maximus', function(){

  beforeEach(function(){
    maximus.health = 50;
    maximus.anger = 0;
    maximus.alive = true;
  });

  it('has a name', function(){
    assert.equal('Maximus the Barbarian', maximus.name);
  });

  it('has a weapon', function(){
    assert.equal('Mighty Weapon', maximus.weapon);
  });

  it('is healthy', function(){
    assert.equal(50, maximus.health);
  });

  it('is not angry', function(){
    assert.equal(0, maximus.anger);
  });

  it('has favourite beer', function(){
    assert.equal("Great Beer", maximus.faveBeer);
  });

  it('gets healthier when drinking his favourite beer', function(){
    maximus.drink('Great Beer');
    assert.equal(60, maximus.health);
  });

  it('gets angry when drinking anything other than his favourite beer', function(){
    maximus.drink("Shite beer");
    assert.equal(10, maximus.anger);
  });

  it('rampage smashes the place up', function(){
    assert.equal("Maximus the Barbarian smashes the place up with his Mighty Weapon", maximus.rampage());
  });

  it('is alive at start', function(){
    assert.equal(true, maximus.alive);
  })

  it('dies after rampage', function(){
    maximus.rampage();
    assert.equal(0, maximus.health);
    assert.equal(false, maximus.alive);
  });

  it('dies when health = 0', function(){
    maximus.health = 0;
    maximus.checkHealth();
    assert.equal(false, maximus.alive);

  });

  it('goes on the rampage when anger = 100', function(){
    maximus.drink('mediocre beer');
    maximus.drink('mediocre beer');
    maximus.drink('mediocre beer');
    maximus.drink('mediocre beer');
    maximus.drink('mediocre beer');


    assert.equal(false, maximus.alive);
  });

  it('cannot drink beer if dead', function(){
    maximus.rampage();
    assert.equal("Maximus the Barbarian is too dead for more beer :(", maximus.drink());
  });

  it('is less than kind about non-favourite beer varieties', function(){
    assert.equal("What is this pish?", maximus.drink('crap beer'));
  });

  it('will not die after a rampage if fave beer drunk first', function(){
    maximus.drink("Great Beer");
    maximus.rampage();
    assert.equal(true, maximus.checkHealth());
  });

  it('cannae rampage while deid', function(){
    maximus.rampage();
    assert.equal('Maximus the Barbarian is deid. Nae rampage.', maximus.rampage());
  })

})