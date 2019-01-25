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
yarn build-watch
```

And in another shell start the server:

```
yarn start-dev
```

## Production

Start server:

```
yarn build
yarn start
```
