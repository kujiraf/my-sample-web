# requirements

## インフラストラクチャ

- AWSを使用すること
- インフラストラクチャはコード化すること (Infrastructure as Code)
- EKSを使用すること
- クラスター内に複数のノードがあること
- EKSクラスターのノードはマネージドノードグループを使用すること
- ログをCloudWatch Logsに転送すること
- S3を使用すること
- S3に静的なファイルを保存すること
- CloudFrontを使用してフロントエンドを配信すること

## セキュリティ

- AWS Cognitoを使用してユーザー認証を行うこと
- Google OIDCを使用してCognitoを設定すること
- ユーザーのセッションをDynamoDBに保存すること
- Lambda関数でセッション管理処理を行うこと
- 公開するサービスやリソースに対しては、HTTPSを使用すること
- フロントALBがTLS終端になること
- WAFを使用してセキュリティを強化すること

## アプリケーション

- Dockerコンテナを使用すること
- サービスはEKS上で実行すること
- Ingressを使用してEKSのAPIを公開すること
- フロントエンドを公開するためのALB（フロントALB）を用意すること
- EKSを公開するIngressとしてのALB（バックエンドALB）を用意すること
- フロントALBとバックエンドALBの間にAPI Gatewayを設置すること
- バックエンドサービスはRESTful APIとしてSpring Bootで実装すること
- フロントエンドはSPAとしてReactで実装すること

## デプロイ戦略

- GitOpsを採用して、Kubernetesによるデプロイを行うこと
- GitHub Actionを使用してCI/CDパイプラインを構築すること
