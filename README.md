winston-slackihook
==================

Winston Transport for Slack chat integration with incoming webHooks.

Uses the [**Incoming WebHooks**](https://bravi.slack.com/services/new/incoming-webhook) to send log messages through [Wiston](https://github.com/flatiron/winston) to [Slack](https://slack.com/).
It was originally based on [winston-slack](https://github.com/TDASinternal/winston-slack).

## Install

```js
$ npm install winston-slackihook
```

Also requires install of winston

```js
$ npm install winston
```

## Usage

```js
var winston = require('winston');
var something = require('winston-slackihook').Slack;

winston.add(something, {
  incomingWebhookURL: "https://hooks.slack.com/services/...",
  channel: "#test-channel",
  username: "ErrorBot",
  level: 'error',
  handleExceptions : true
});
```
