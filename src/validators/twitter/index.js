const { twitter: twitterRegexes } = require('../../regexes');

let Twitter;

const TwitterUrlValidator = function() {
}

TwitterUrlValidator.prototype.validateProfileUrl = function (url) {
  return twitterRegexes.PROFILE_LINK.test(url)
}

TwitterUrlValidator.prototype.validateTweetUrl = function (url) {
  return twitterRegexes.TWEET_LINK.test(url);
}

TwitterUrlValidator.prototype.validateHashtagsUrl = function (url) {
  return twitterRegexes.TWITTER_HASHTAG_LINK.test(url);
}

TwitterUrlValidator.getInstance = function() {
  if (Twitter) {
    return Twitter;
  } else {
    Twitter = new TwitterUrlValidator();
    return Twitter;
  }
};

module.exports = TwitterUrlValidator.getInstance();
