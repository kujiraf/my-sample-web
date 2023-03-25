## データベース設計

### テーブル一覧

- users
- posts
- comments
- likes
- follows

### users テーブル

| Column | Type | Options |
| ------ | ---- | ------- |
| id | integer | PRIMARY KEY |
| email | string | NOT NULL |
| password_digest | string | NOT NULL |
| name | string | NOT NULL |
| introduction | text | |
| profile_image | string | |
| created_at | datetime | NOT NULL |
| updated_at | datetime | NOT NULL |

### posts テーブル

| Column | Type | Options |
| ------ | ---- | ------- |
| id | integer | PRIMARY KEY |
| user_id | integer | FOREIGN KEY |
| content | text | NOT NULL |
| image | string | |
| created_at | datetime | NOT NULL |
| updated_at | datetime | NOT NULL |

### comments テーブル

| Column | Type | Options |
| ------ | ---- | ------- |
| id | integer | PRIMARY KEY |
| user_id | integer | FOREIGN KEY |
| post_id | integer | FOREIGN KEY |
| content | text | NOT NULL |
| created_at | datetime | NOT NULL |
| updated_at | datetime | NOT NULL |

### likes テーブル

| Column | Type | Options |
| ------ | ---- | ------- |
| id | integer | PRIMARY KEY |
| user_id | integer | FOREIGN KEY |
| post_id | integer | FOREIGN KEY |
| created_at | datetime | NOT NULL |
| updated_at | datetime | NOT NULL |

### follows テーブル

| Column | Type | Options |
| ------ | ---- | ------- |
| id | integer | PRIMARY KEY |
| follower_id | integer | FOREIGN KEY |
| followed_id | integer | FOREIGN KEY |
| created_at | datetime | NOT NULL |
| updated_at | datetime | NOT NULL |

