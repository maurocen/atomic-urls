const { Template } = require('../../classes')
const { TWITTER } = require('../../constants');

let Twitter;

const TwitterUrlBuilder = function() {
  this.Twitter = new Template(TWITTER.TWITTER)
    .setAtomValue('PROTOCOL', TWITTER.PROTOCOL)
    .setAtomValue('ROOT_URL', TWITTER.ROOT_URL);
}

TwitterUrlBuilder.prototype._buildProfileUrl = function (username) {
  return new Template(TWITTER.TEMPLATES.PROFILE_URL)
    .setAtomValue('TWITTER', this.Twitter)
    .setAtomValue('USERNAME', username);
};

TwitterUrlBuilder.prototype._buildTweetUrl = function (username, tweetId) {
  return new Template(TWITTER.TEMPLATES.TWEET_URL)
    .setAtomValue('PROFILE_URL', this._buildProfileUrl(username))
    .setAtomValue('TWEET_ID', tweetId);
}

TwitterUrlBuilder.prototype._buildHashtagsUrl = function (hashtag) {
  return new Template(TWITTER.TEMPLATES.HASHTAG_TWEETS_URL)
    .setAtomValue('TWITTER', this.Twitter)
    .setAtomValue('HASHTAG', hashtag);
}

TwitterUrlBuilder.prototype._buildPrefilledTweetUrl = function (content, options = {}) {
  let contentToSet = content;

  if (options.encode || typeof options.encode === 'undefined') {
    contentToSet = encodeURIComponent(contentToSet);
  }

  return new Template(TWITTER.TEMPLATES.PREFILLED_TWEET_URL)
    .setAtomValue('TWITTER', this.Twitter)
    .setAtomValue('CONTENT', contentToSet);
}

TwitterUrlBuilder.prototype.getProfileUrl = function (username) {
  return this._buildProfileUrl(username).getValue();
}

TwitterUrlBuilder.prototype.getTweetUrl = function (username, tweetId) {
  return this._buildTweetUrl(username, tweetId).getValue();
}

TwitterUrlBuilder.prototype.getHashtagsUrl = function (hashtag) {
  return this._buildHashtagsUrl(hashtag).getValue();
}

TwitterUrlBuilder.prototype.getPreFilledTweetUrl = function (content, options) {
  return this._buildPrefilledTweetUrl(content, options).getValue();
}

TwitterUrlBuilder.getInstance = function() {
  if (Twitter) {
    return Twitter;
  } else {
    Twitter = new TwitterUrlBuilder();
    return Twitter;
  }
};

module.exports = TwitterUrlBuilder.getInstance();
