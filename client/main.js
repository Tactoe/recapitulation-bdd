import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import '../imports/ui/Login.js';
import '../imports/ui/Account.js';

//Meteor.loginWithPassword("titouan", "motdepasse");

Template.body.helpers({
  isUserLogged() {
    console.log(Meteor.user());
    return (Meteor.user() !== null);
  },

  getUserName() {
    return (Meteor.user().username);
  }
});
