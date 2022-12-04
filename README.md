# Configurando seu projeto.

## Primeira vez que baixo
```console
npm install
```
```console
npx sequelize-cli db:migrate
```
```console
npx sequelize-cli db:seed:all
```

### Toda vez que pegar uma atualização nova no projeto

Rodar esse quando um novo seeder for criado
```console
console npx sequelize-cli db:seed --seed nomedoarquivo.js
```

Rodar esse toda vez que houverem novas migrations
```console
console npx sequelize-cli db:migrate
```