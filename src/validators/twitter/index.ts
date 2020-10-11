import TwitterUrlValidatorInterface from 'ts/interfaces/TwitterUrlValidatorInterface';
import regexes from '../../regexes';

const {
  twitter: twitterRegexes,
} = regexes;

class TwitterUrlValidator implements TwitterUrlValidatorInterface {
  instance = null;

  validateProfileUrl = (url : string) : boolean => {
    return twitterRegexes.PROFILE_LINK.test(url)
  }

  validateTweetUrl = (url : string) : boolean => {
    return twitterRegexes.TWEET_LINK.test(url);
  }

  validateHashtagsUrl = (url : string) : boolean => {
    return twitterRegexes.TWITTER_HASHTAG_LINK.test(url);
  }

  getInstance = () => {
    if (!this.instance) {
      this.instance = new TwitterUrlValidator();
    }

    return this.instance;
  };
}

export default TwitterUrlValidator.getInstance();
