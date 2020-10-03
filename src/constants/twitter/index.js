const HASHTAG_TWEETS_URL = '{{TWITTER}}/hashtag/{{HASHTAG}}';
const PREFILLED_TWEET_URL = '{{TWITTER}}/intent/tweet?text={{CONTENT}}';
const TWITTER = '{{PROTOCOL}}://{{ROOT_URL}}'
const PROFILE_URL = '{{TWITTER}}/{{USERNAME}}';
const PROTOCOL = 'https';
const ROOT_URL = 'www.twitter.com';
const TWEET_URL = '{{PROFILE_URL}}/status/{{TWEET_ID}}';

module.exports = {
  PROTOCOL,
  ROOT_URL,
  TWITTER,
  TEMPLATES: {
    HASHTAG_TWEETS_URL,
    PREFILLED_TWEET_URL,
    PROFILE_URL,
    TWEET_URL,
  },
};
