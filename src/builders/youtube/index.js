const { Template } = require('../../classes')
const { YOUTUBE } = require('../../constants');

let YouTube;

const YouTubeUrlBuilder = function() {
  this.YouTube = new Template(YOUTUBE.YOUTUBE)
    .setAtomValue('PROTOCOL', YOUTUBE.PROTOCOL)
    .setAtomValue('ROOT_URL', YOUTUBE.ROOT_URL);
}

YouTubeUrlBuilder.prototype._buildProfileUrl = function (username) {
  return new Template(YOUTUBE.TEMPLATES.PROFILE_URL)
    .setAtomValue('YOUTUBE', this.YouTube)
    .setAtomValue('PROFILE_TYPE', 'user')
    .setAtomValue('USERNAME', username);
};

YouTubeUrlBuilder.prototype._buildChannelUrl = function (username) {
  return new Template(YOUTUBE.TEMPLATES.PROFILE_URL)
    .setAtomValue('YOUTUBE', this.YouTube)
    .setAtomValue('PROFILE_TYPE', 'channel')
    .setAtomValue('USERNAME', username);
};

YouTubeUrlBuilder.prototype._buildVideoUrl = function (videoId) {
  return new Template(YOUTUBE.TEMPLATES.VIDEO_URL)
    .setAtomValue('YOUTUBE', this.YouTube)
    .setAtomValue('VIDEO_ID', videoId);
};

YouTubeUrlBuilder.prototype.getProfileUrl = function (username) {
  return this._buildProfileUrl(username).getValue();
};

YouTubeUrlBuilder.prototype.getChannelUrl = function (channelId) {
  return this._buildChannelUrl(channelId).getValue();
};

YouTubeUrlBuilder.prototype.getVideoUrl = function (videoId) {
  return this._buildVideoUrl(videoId).getValue();
};

YouTubeUrlBuilder.getInstance = function() {
  if (YouTube) {
    return YouTube;
  } else {
    YouTube = new YouTubeUrlBuilder();
    return YouTube;
  }
};

module.exports = YouTubeUrlBuilder.getInstance();
