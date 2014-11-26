var winston = require('winston');
var Slack = require('winston-slackihook').Slack;


var logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console()
  ]
});


logger.add(Slack, {
  // replace it with the url generated from: https://<domain>.slack.com/services/new/incoming-webhook
  incomingWebhookURL: "https://hooks.slack.com/services/...",
  channel: "#test-channel",
  username: "ErrorBot",
  level: 'error',
  handleExceptions : true
});


logger.error("Testing...");
