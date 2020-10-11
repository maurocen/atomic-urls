const PROFILE_URL = '{{FACEBOOK}}/{{USERNAME}}';
const PROTOCOL = 'https';
const ROOT_URL = 'www.facebook.com';
const GROUP_URL = '{{FACEBOOK}}/groups/{{GROUP_ID}}';
const FACEBOOK = '{{PROTOCOL}}://{{ROOT_URL}}';
const POST_URL = '{{PROFILE_URL}}/{{POST_TYPE}}/{{POST_ID}}';

export default {
  PROTOCOL,
  ROOT_URL,
  FACEBOOK,
  TEMPLATES: {
    PROFILE_URL,
    GROUP_URL,
    POST_URL,
  },
};
