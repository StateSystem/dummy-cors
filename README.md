# dummy-cors

EV217 用です。フロントは `apps/web`、API は `apps/api` の Fastify です。ソースに CORS は書いていません。

`main` でデプロイしたあと、フロントのページに API の URL を入れて「APIを呼ぶ」を押します。

`with-cors` は、API 側であらかじめ `Access-Control-Allow-Origin` を返します。二重に付かないことの確認用です。
