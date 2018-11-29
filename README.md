# blog-portrolio-site

## ディレクトリ構成
```
myblog-base
├── README.md
├── docker-compose.yml
├── myblog-api(api用のリポジトリからcloneしたディレクトリ)
├── myblog-front(front用のリポジトリからcloneしたディレクトリ)
└── netlify.toml(netlify用)
```

## 開発用コマンド
- build
```
docker-compose build
```
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
docker-compose run web bundle exec ridgepole --config config/database.yml --file db/schemas/Schemafile -E development --apply
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
