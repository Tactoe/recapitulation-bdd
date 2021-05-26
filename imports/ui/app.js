import { Template } from 'meteor/templating';

import './app.html';

Template.body.helpers({
  isUserLogged() {
    console.log(Meteor.user());
    return (Meteor.user() !== null);
  }
});
