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

## Example usage - generate a PDF gift card

```
$ curl -d '{"gift_card_code":"ABC123","expires_at":"2099-01-01","gift_card_value":"20","currency":"AUD"}' -H "Content-Type: application/json" -H 'Cookie:access_token='"$ACCESS_TOKEN"'' --output ./gift_card.pdf https://${API_BASE_URI}/api/pdf/gift-cards
```

## Docker

Dockerfile included for local development.  Refer to https://github.com/brandsExclusive/infra-le-local-dev for instructions with Docker Compose.

## Production

Start server:

```
yarn start
```

## Deploy

This service is run on AWS Lambda, with api gateway in front of it
We are using [up](https://up.docs.apex.sh/#introduction) as the abstraction for this

to deploy we can just run the following JOBS on jenkins

* [TEST](https://jenkins.luxgroup.com/job/release-test-pdf-svc/)

* [PRODUCTION](https://jenkins.luxgroup.com/job/release-prod-pdf-svc/)

```
bash deploy/deploy-jenkins.sh test
```
