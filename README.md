# SvelteKitで使えるUIライブラリ一覧

| 順位 | ライブラリ名              | 特徴                                           | Vanilla Extractとの相性 | 備考                                                                   |
| ---- | ------------------------- | ---------------------------------------------- | ----------------------- | ---------------------------------------------------------------------- |
| 1    | Skeleton UI               | Tailwind CSSベースのSvelte専用UIライブラリ     | 条件付き                | Tailwindと競合するため同時利用は非推奨                                 |
| 2    | Svelte Headless UI        | ロジックだけを提供するヘッドレスコンポーネント | 使いやすい              | スタイルが未定義のため、Vanilla Extractで完全制御が可能                |
| 3    | Svelte Material UI (SMUI) | GoogleのMaterial Designに準拠したUIライブラリ  | 難しい（独自CSSで完結） | 独自CSSで完結でスタイルを記載するため、Vanilla Extractとの連携が難しい |
| 4    | Flowbite Svelte           | Tailwind + Flowbite を組み合わせたUIセット     | 非推奨                  | Tailwind依存のため、Vanilla Extractとの連携が難しい                    |
| 5    | Attractions               | 軽量でシンプルなUIコンポーネント集             | 難しい                  | スタイルが内包されているため、Vanilla Extractとの連携が難しい          |
| 6    | Carbon Components Svelte  | IBMのCarbon Design SystemをSvelteに移植        | 難しい                  | SCSS前提の設計のため、Vanilla Extractとの連携が難しい                  |
| 7    | SvelteStrap               | BootstrapをベースにしたSvelte UIライブラリ     | 難しい                  | グローバルCSS前提の設計のため、Vanilla Extractとの連携が難しい         |

---

## その他のUIライブラリ

| 順位 | ライブラリ名            | 特徴                                    | Vanilla Extractとの相性       | 備考                                                                     |
| ---- | ----------------------- | --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------ |
| -    | Shadcn/Svelte（開発中） | Headless UIをベースにしたSvelte対応予定 | 対応予定（Headless UIベース） | React版はVanilla Extractとの相性が良く、Svelte版にも期待が寄せられている |
| -    | Svelte DaisyUI          | Tailwind + DaisyUI をSvelteで利用可能   | 非推奨                        | Tailwind依存のため、Vanilla Extractとの連携が難し                        |
