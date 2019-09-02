[![CircleCI](https://circleci.com/gh/brandsExclusive/svc-pdf.svg?style=svg)](https://circleci.com/gh/brandsExclusive/svc-pdf)


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

If you just want to do both in one:

```
yarn dev
```

## Production

Start server:

```
yarn start
```

## Deploy

https://apex.sh/docs/up/credentials/

```
bash deploy/deploy-jenkins.sh test
```
