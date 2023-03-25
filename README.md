# 会員限定ブログ投稿システム

## 概要

会員限定のブログ投稿システムです。会員登録することで記事の閲覧と投稿ができます。

# 機能

### 記事関連

- 記事の投稿
  - 記事のタイトル、本文、公開状態、カテゴリ、タグを入力可能
- 記事の編集
  - 投稿した記事の編集が可能
- 記事の一覧表示
  - 公開状態に関わらず、投稿した記事の一覧表示が可能
  - 記事のタイトル、公開状態、投稿日、カテゴリ、タグを表示
- 記事の詳細表示
  - 投稿した記事の詳細表示が可能
  - 記事のタイトル、本文、投稿日、カテゴリ、タグを表示
- 記事の削除
  - 投稿した記事の削除が可能

### 認証関連

- ユーザーの登録
  - ユーザー名、メールアドレス、パスワードを入力してユーザー登録が可能
- ログイン
  - メールアドレス、パスワードを入力してログインが可能
- ログアウト
  - ログアウトが可能
- ユーザー情報の編集
  - 登録したユーザー情報の編集が可能

### その他

- カテゴリとタグの管理
  - カテゴリとタグの追加、編集、削除が可能
- 画像のアップロード
  - 記事に画像を添付する場合に、画像のアップロードが可能

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
