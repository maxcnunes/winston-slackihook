var SlackIHook = require('slackihook'),
    util = require('util'),
    winston = require('winston');


var Slack = exports.Slack  = function (options) {
  options = options || {};
  if(!options.incomingWebhookURL) {
    throw new Error('options cannot be null');
  }

  this.incomingWebhookURL   = options.incomingWebhookURL;
  this.channel    = options.channel;
  this.domain     = options.domain;
  this.username   = options.username || 'winston-slackihook';
  this.level      = options.level    || 'info';
  this.silent     = options.silent   || false;
  this.raw        = options.raw      || false;
  this.name       = options.name     || 'slack';
  this.customFormatter = options.customFormatter;

  /**
   * Enabled loging of uncaught exceptions
   */
  this.handleExceptions = options.handleExceptions || false;

  /**
   * Initialize SlackIHook
   */
  this.slack = new SlackIHook(this.incomingWebhookURL);
};


/**
 * Inherit from `winston.Transport` so you can take advantage
 * of the base functionality and `.handleExceptions()`.
 */
util.inherits(Slack, winston.Transport);


/**
 * Attaches this Transport to the list of available transports
 */
winston.transports.Slack = Slack;


Slack.prototype.log = function (level, msg, meta, callback) {
  var data = this.customFormatter ?
    this.customFormatter(level, msg, meta) :
    defaultMessage(level, msg, this.channel, this.username);

  this.slack.send(data, callback);
};


function defaultMessage (level, msg, channel, username) {
  return {
    text: '[' + level + '] ' + msg,
    channel: channel,
    username: username
  };
}
