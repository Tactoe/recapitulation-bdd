import { Template } from 'meteor/templating'
import { Accounts } from 'meteor/accounts-base';

import './Account.html';

Template.account.helpers(
  {
    utilisateurConnecte() {
      return (Meteor.user() !== null)

    }
  }
)

Template.account.events({
  'submit .account-form'(e) {
    e.preventDefault();

    const target = e.target;

    const _username = target.username.value;
    const _password = target.password.value;

    Accounts.createUser({username: _username, password: _password});
  }
});
