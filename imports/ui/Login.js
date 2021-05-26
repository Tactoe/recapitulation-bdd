import { Template } from 'meteor/templating'

import './Login.html';

Template.login.helpers(
  {
    utilisateurConnecte() {
      return (Meteor.user() !== null)

    }
  }
)

Template.login.events({
  'submit .login-form'(e) {
    console.log("event correct");
    e.preventDefault();

    const target = e.target;

    const username = target.username.value;
    const password = target.password.value;

    Meteor.loginWithPassword(username, password);
  }
});
