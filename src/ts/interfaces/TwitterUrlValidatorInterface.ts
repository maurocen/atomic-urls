export default interface TwitterUrlValidatorInterface {
  validateProfileUrl(url : string) : boolean,
  validateTweetUrl(url : string) : boolean,
  validateHashtagsUrl(url : string) : boolean,
  getInstance() : TwitterUrlValidatorInterface,
};
