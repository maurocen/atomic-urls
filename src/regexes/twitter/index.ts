/* eslint-disable no-useless-escape */
const TWITTER_RAW = '^(?:https?:\\/\\/)?(?:www\\.|m(?:obile)?\\.?)?(?:twitter|twttr)\\.co(?:m|\\.uk)'
const PROFILE_LINK_RAW = `${TWITTER_RAW}\/@?[a-z0-9_]{1,15}`;
const TWEET_LINK_RAW = `${TWITTER_RAW}\/@?[a-z0-9_]{1,15}\/status\/\d+`;

const PROFILE_LINK = new RegExp(`${PROFILE_LINK_RAW}$`, 'i');
const TWITTER_HASHTAG_LINK = new RegExp(`${TWITTER_RAW}\/hashtag\/[a-z][a-z0-9_]{0,99}$`, 'i');
const TWEET_LINK = new RegExp(`${TWEET_LINK_RAW}$`, 'i');
const TWITTER_LINK = new RegExp(TWITTER_RAW, 'i');
/* eslint-enable no-useless-escape */

export default {
  PROFILE_LINK,
  TWITTER_HASHTAG_LINK,
  TWEET_LINK,
  TWITTER_LINK,
}
