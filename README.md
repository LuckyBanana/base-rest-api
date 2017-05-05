# REST API Template

Template de base pour la création d'API REST / Web apps basé sur Express

## Installation ##

```
mkdir new-project
cd new-project
git archive --remote=git@bitbucket.org:mvaret/base-rest-api.git HEAD | tar -x
```

### Base de données ###

Basé sur Knex. Nécessite l'installation du (des) drivers de base de données correspondants.

```
yarn add sqlite3
yarn add oracledb
yarn add mysql
yarn add pg
```

```
const Knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.Database.Host,
    user: config.Database.User,
    password: config.Database.Password,
    database: config.Database.Name,
    charset: 'utf8'
  }
})
```

### Authentification ###

* Basée sur JWT, le fichier controllers/authentication doit être complété.
* Le sel du JWT doit être renseigné dans le fichier de configuration.

### Config ###

Basée sur des fichiers json dans le dossier config.
Pour utiliser le fichier production.json
```
NODE_ENV=production
```
