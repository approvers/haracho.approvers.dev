# haracho.approvers.dev への貢献

## 貢献の流れ

1. 当リポジトリをフォークしてください。
2. フォークしたリポジトリをクローンしてください。
3. ディレクトリを開き、ブランチを作成してチェックアウトしてください。

```sh
git checkout -b <branch-name>
```

4. 開発を行い、その内容を GitHub へアップロードします。

```sh
git add <file-name>
git commit -m "hoge"
git push
```

5. 開発が終了したら GitHub から当リポジトリの `main` ブランチへ新規 pull request を作成してください。
6. 当プロジェクト コントリビューターによるレビュー・GitHub Actions によるテストなどが行われた後、マージが可能になります。

## コミットメッセージ

コミットメッセージを書く際は [**Conventional Commit**](https://conventionalcommits.org/ja/) に従ってください。

> Conventional Commits の仕様はコミットメッセージのための軽量の規約です。 明示的なコミット履歴を作成するための簡単なルールを提供します。この規則に従うことで自動化ツールの導入を簡単にします。 コミットメッセージで機能追加・修正・破壊的変更などを説明することで、この規約は SemVer と協調動作します。
> 引用: [Conventional Commits](https://conventionalcommits.org/ja/)

コミットメッセージは次のような形にする必要があります。

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

`<type>` は、OreOreBot2 を使用する利用者や開発者に意図を伝えるために以下に記載するそれぞれの型を指定する必要があります。

| 型         | 要素                                                                           |
| ---------- | ------------------------------------------------------------------------------ |
| `fix`      | この型を持つコミットはコードベースのバグにパッチを当てます。                   |
| `feat`     | この型を持つコミットはコードベースに新しい機能を追加します。                   |
| `build`    | この型を持つコミットはプログラムをコンパイル、ビルドする部分の変更を行います。 |
| `ci`       | この型を持つコミットは GitHub Actions に関する変更を行います。                 |
| `docs`     | この型を持つコミットはドキュメントなどの変更を行います。                       |
| `refactor` | この型を持つコミットはコードベースのリファクタリングを行います。               |
| `chore`    | この型を持つコミットはファイル整理や依存関係の更新などを行います。             |

`BREAKING CHANGE` とフッターにかかれているか型/スコープの直後に `!` が追加されているコミットは仕様の破壊的変更を意味します。 (Semantic Versioning における `MAJOR` に相当します)

また、 `BREAKING CHANGE` は任意の型のコミットに含めることも可能です。

### 例 (引用: [Conventional Commits](https://conventionalcommits.org/ja))

#### タイトルおよび破壊的変更のフッターを持つコミットメッセージ

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### 本文を持たないコミットメッセージ

```
docs: correct spelling of CHANGELOG
```

詳しくは [Conventional Commits](https://conventionalcommits.org/) を参照してください。

## Issue

不具合報告や機能の要望、立案を行う際は [Issue](https://github.com/approvers/haracho.approvers.dev/issues/new/choose) を利用してください。

haracho.approvers.dev では Issue Template (Form) を用意しています。

## Pull Request

- Pull Request のタイトルは Conventional Commit の型を使用して作成してください。
  - 例: `feat: えぬ留年構文ジェネレータの実装`, `fix: えぬが留年しない問題の修正`
- Pull Request 作成時は Issue と同様テンプレートが用意されているので詳細情報の記載をお願いします。
- draft などぜひ有効活用してください。
  - 一度作成しても Assign の欄に `Still in progress? Convert to draft` とわかりにくいですがこれを利用することで途中からでも draft に設定できます。
