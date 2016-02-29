'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

const Frenemy = sequelize.define('frenemy', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  foe: Sequelize.BOOLEAN
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

Project.hasMany(Frenemy, {as: 'workers'});

let agent;

sequelize.sync().then( () => {
  agent = Frenemy.create({
    username: 'Agent Smith',
    birthday: new Date(2000, 1, 1)
  });
}).then(function(frenemy) {
  console.log(agent);
}).then( () => {
    return Project.create({
    name: 'Invasion 101'
  });
});
