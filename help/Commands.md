Liste des Commandes Git et Structure de Base
Chaque fichier dans src/commands/ représentera une commande Git spécifique. Voici des exemples de structures pour quelques commandes :

Init

Fichier : src/commands/init.js
Fonction : Initialiser un nouveau dépôt Git.
Add

Fichier : src/commands/add.js
Fonction : Ajouter des fichiers à la zone de staging.
Commit

Fichier : src/commands/commit.js
Fonction : Committer les fichiers de la zone de staging avec un message.
Status

Fichier : src/commands/status.js
Fonction : Afficher l'état des fichiers dans le dépôt (modifiés, non suivis, etc.).
Push

Fichier : src/commands/push.js
Fonction : Pousser les commits vers un dépôt distant.
Checkout

Fichier : src/commands/checkout.js
Fonction : Changer de branche ou restaurer les fichiers de l'arborescence de travail.
Branch

Fichier : src/commands/branch.js
Fonction : Listes, création ou suppression de branches.
Pull

Fichier : src/commands/pull.js
Fonction : Récupérer depuis et intégrer avec un autre dépôt ou une branche locale.
Merge

Fichier : src/commands/merge.js
Fonction : Fusionner deux ou plusieurs historiques de développement ensemble.
Diff

Fichier : src/commands/diff.js
Fonction : Afficher les changements entre commits, l'arborescence de travail, etc.
Tag

Fichier : src/commands/tag.js
Fonction : Créer, lister, supprimer ou vérifier un tag d'objet signé avec GPG.
Log

Fichier : src/commands/log.js
Fonction : Afficher l'historique des commits.
Reset

Fichier : src/commands/reset.js
Fonction : Réinitialiser la HEAD courante à l'état spécifié.
Rm

Fichier : src/commands/rm.js
Fonction : Supprimer des fichiers de l'index de suivi et de l'arborescence de travail.
Stash

Fichier : src/commands/stash.js
Fonction : Mettre en cache des modifications dans un dépôt de travail sale.
Show

Fichier : src/commands/show.js
Fonction : Afficher divers types d'objets Git.
Fetch

Fichier : src/commands/fetch.js
Fonction : Télécharger des objets et des références d'un autre dépôt.
Clone

Fichier : src/commands/clone.js
Fonction : Cloner un dépôt dans un nouveau répertoire.
Autres commandes Git

Fichiers pour ls-tree, cat-file, grep, gitk, instaweb, gc, archive, prune, fsck, rebase, etc.