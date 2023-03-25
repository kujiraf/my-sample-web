# 会員限定ブログ投稿システム

## 概要

会員限定のブログ投稿システムです。会員登録することで記事の閲覧と投稿ができます。

## 機能

- 会員登録機能
- ログイン機能
- 記事閲覧機能
- 記事投稿機能
- 記事編集機能
- 記事削除機能

## 技術スタック

- Java 17
- Spring Boot 2.6.3
- Spring Security
- Thymeleaf
- PostgreSQL
- Maven
- Git

## ディレクトリ構成
```
├── src
│ ├── main
│ │ ├── java
│ │ │ └── com.example.blog
│ │ │ ├── controller
│ │ │ ├── model
│ │ │ ├── repository
│ │ │ ├── security
│ │ │ └── service
│ │ ├── resources
│ │ │ ├── static
│ │ │ └── templates
│ │ └── webapp
│ │ └── WEB-INF
│ └── test
│ └── java
│ └── com.example.blog
│ ├── controller
│ ├── model
│ ├── repository
│ ├── security
│ └── service
└── pom.xml
```
- `src/main/java/com.example.blog`: Javaソースコード
  - `controller`: リクエストを受け取り、レスポンスを返すコントローラークラス
  - `model`: データモデルのクラス
  - `repository`: データアクセスのためのリポジトリクラス
  - `security`: Spring Securityの設定クラス
  - `service`: サービスクラス
- `src/main/resources/static`: 静的ファイル（CSS、JavaScript、画像など）
- `src/main/resources/templates`: HTMLテンプレート
- `src/main/webapp/WEB-INF`: ビューのコンテナ設定
- `src/test/java/com.example.blog`: テストコード
- `pom.xml`: Mavenプロジェクトの設定ファイル

## ライセンス

このソフトウェアはMITライセンスのもとで公開されています。詳細については、LICENSEファイルを参照してください。
