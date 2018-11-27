# blog-portrolio-site

## ディレクトリ構成
```
.
├── docker-compose.yml
├── app-api 
│   └──  Dockerfile 
├── app-front 
│   └──  Dockerfile 
└── README.md
```

## 開発用コマンド
- 開発環境立ち上げ
```
docker-compose up
```
- 開発環境停止
```
docker-compose down
```
- gemの追加後
```
docker-compose run rails bundle install
```
- schemaファイルの追加・変更後(ridgepole)
```
docker-compose runweb bundle exec ridgepole --config config/database.yml --file db/schemas/Schemafile -E development --apply
```
- コンテナに入る
```
docker-compose run コンテナ名　bash
```
- コンテナ一覧
```
docker ps
```

## 本番環境用コマンド
### app-api(heroku)
- herokuリポジトリへのプッシュ(rootから--prefixでディレクトリを指定してプッシュ)
```
git subtree push --prefix app-api heroku master 
```

- ridgepoleの適用
```
heroku run "bundle exec ridgepole -c config/database.for.heroku.ridgepole.yml  -E production -f db/schemas/Schemafile --apply"
```
