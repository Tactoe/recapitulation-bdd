import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Utilisateurs } from '/imports/server_client/bdd.js';
import { Accounts } from 'meteor/accounts-base';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

function insererUtilisateur(nom, prenom) {
  Utilisateurs.insert({nom, prenom, createdAt: new Date()});
}

Meteor.startup(() => {
  if (Utilisateurs.find().count() === 0) {
    insererUtilisateur("jean", "dupont");
  }

  // Pour trouver un element dans la bdd
  console.log(Utilisateurs.findOne({nom: "jean"}));

  // Pour creer un compte utilisateur
  //Accounts.createUser({username:"wow", password:"password"});

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
