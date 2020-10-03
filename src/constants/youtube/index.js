const PROFILE_URL = '{{YOUTUBE}}/{{PROFILE_TYPE}}/{{USERNAME}}';
const PROTOCOL = 'https';
const ROOT_URL = 'www.youtube.com';
const VIDEO_URL = '{{YOUTUBE}}/watch?v={{VIDEO_ID}}'
const YOUTUBE = '{{PROTOCOL}}://{{ROOT_URL}}'

module.exports = {
  PROTOCOL,
  ROOT_URL,
  YOUTUBE,
  TEMPLATES: {
    PROFILE_URL,
    VIDEO_URL
  },
};
