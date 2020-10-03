const { Template } = require('../../classes')
const { FACEBOOK } = require('../../constants');

let Facebook;

const FacebookUrlBuilder = function() {
  this.Facebook = new Template(FACEBOOK.FACEBOOK)
    .setAtomValue('PROTOCOL', FACEBOOK.PROTOCOL)
    .setAtomValue('ROOT_URL', FACEBOOK.ROOT_URL);
}

FacebookUrlBuilder.prototype._buildProfileUrl = function (username) {
  return new Template(FACEBOOK.TEMPLATES.PROFILE_URL)
    .setAtomValue('FACEBOOK', this.Facebook)
    .setAtomValue('USERNAME', username);
};

FacebookUrlBuilder.prototype._buildPageUrl = function (pageId) {
  return new Template(FACEBOOK.TEMPLATES.PROFILE_URL)
    .setAtomValue('FACEBOOK', this.Facebook)
    .setAtomValue('USERNAME', pageId);
};

FacebookUrlBuilder.prototype._buildGroupUrl = function (groupId) {
  return new Template(FACEBOOK.TEMPLATES.GROUP_URL)
    .setAtomValue('FACEBOOK', this.Facebook)
    .setAtomValue('GROUP_ID', groupId);
};

FacebookUrlBuilder.prototype._buildPostUrl = function (usernameOrGroupId, postId, options = {}) {
  let postType = 'posts';
  let profileUrl = this._buildProfileUrl(usernameOrGroupId);

  if (options.groupPost) {
    postType = 'permalink';
    profileUrl = this._buildGroupUrl(usernameOrGroupId)
  }

  return new Template(FACEBOOK.TEMPLATES.POST_URL)
    .setAtomValue('PROFILE_URL', profileUrl)
    .setAtomValue('POST_TYPE', postType)
    .setAtomValue('POST_ID', postId);
};

FacebookUrlBuilder.prototype.getProfileUrl = function (username) {
  return this._buildProfileUrl(username).getValue();
};

FacebookUrlBuilder.prototype.getPageUrl = function (pageId) {
  return this._buildPageUrl(pageId).getValue();
};

FacebookUrlBuilder.prototype.getGroupUrl = function (groupId) {
  return this._buildGroupUrl(groupId).getValue();
};

FacebookUrlBuilder.prototype.getPostUrl = function (usernameOrGroupId, postId, options) {
  return this._buildPostUrl(usernameOrGroupId, postId, options).getValue();
};

FacebookUrlBuilder.getInstance = function() {
  if (Facebook) {
    return Facebook;
  } else {
    Facebook = new FacebookUrlBuilder();
    return Facebook;
  }
};

module.exports = FacebookUrlBuilder.getInstance();
