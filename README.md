winston-slackihook
==================

Winston Transport for Slack chat integration with incoming webhooks.

Uses the [Incoming WebHooks](https://<domain>.slack.com/services/new/incoming-webhook) to send log messages to [Slack](https://slack.com/) through [Wiston](https://github.com/flatiron/winston) library.

It was originally based on [winston-slack](https://github.com/TDASinternal/winston-slack). But different from that it uses [slackihook](https://github.com/keyvanfatehi/slackihook) to send notification messages. Which implements the new Slack's api for **Incoming WebHooks**.

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
  // replace it with the url generated from: https://<domain>.slack.com/services/new/incoming-webhook
  incomingWebhookURL: "https://hooks.slack.com/services/...",
  channel: "#test-channel",
  username: "ErrorBot",
  level: 'error',
  handleExceptions : true
});
```
