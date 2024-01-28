OpenGitFlow/
│
├── bin/                            
│   └── opengitflow                 # Script principal de la CLI
│
├── src/                            
│   ├── commands/                   # Commandes individuelles de Git et OpenCommit
│   │   ├── config.js
│   │   ├── init.js
│   │   ├── add.js
│   │   ├── clone.js
│   │   ├── commit.js
│   │   ├── status.js
│   │   ├── push.js
│   │   ├── checkout.js
│   │   ├── remote.js
│   │   ├── branch.js
│   │   ├── pull.js
│   │   ├── merge.js
│   │   ├── diff.js
│   │   ├── tag.js
│   │   ├── log.js
│   │   ├── reset.js
│   │   ├── rm.js
│   │   ├── stash.js
│   │   ├── show.js
│   │   ├── fetch.js
│   │   ├── lsTree.js
│   │   ├── catFile.js
│   │   ├── grep.js
│   │   ├── gitk.js
│   │   ├── instaweb.js
│   │   ├── gc.js
│   │   ├── archive.js
│   │   ├── prune.js
│   │   ├── fsck.js
│   │   ├── rebase.js
│   │   └── opencommit.js            # Commande pour intégrer OpenCommit
│   │
│   ├── utils/                      # Utilitaires et fonctions helpers
│   │   ├── gitUtils.js             # Outils pour les opérations Git
│   │   ├── openCommitUtils.js      # Outils spécifiques à OpenCommit
│   │   ├── promptDirectory.js      # Utilitaire pour demander le chemin du dossier Git
│   │   └── ...
│   │
│   └── index.js                    # Point d'entrée principal pour regrouper les commandes
│
├── .env                            # Fichier pour les variables d'environnement
├── package.json                    # Dépendances et scripts npm
├── README.md                       # Documentation du projet
└── .gitignore                      # Fichiers à ignorer dans Git
