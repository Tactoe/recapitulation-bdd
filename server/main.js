import { Meteor } from 'meteor/meteor';
import { News } from '../imports/bdd/bdd.js';
//import { Users } from '../imports/bdd/bdd.js';

Meteor.startup(() => {
  if (News.find().count() === 0)
  {
    News.insert({ title: "info interessante"});
  }
  /*Accounts.createUser({
      username: "titouan",
      password: "motdepasse",
    });*/
});
