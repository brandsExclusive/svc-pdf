# PDF Service

Send some data, get a PDF

## Local development

Install release:

https://github.com/wkhtmltopdf/wkhtmltopdf/releases/0.12.4

Get the path to wkhtmltopdf and update `WKHTMLTOPDF_COMMAND` in `.env`:

```
which wkhtmltopdf
```

In one shell watch for changes:

```
yarn dev:build
```

And in another shell start the server:

```
yarn dev:start
```

## Production

Start server:

```
yarn start
```

## Deploy

https://up.docs.apex.sh/#aws_credentials

```
bash deploy/deploy-jenkins.sh test
```
