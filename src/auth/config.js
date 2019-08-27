import Ready from '../ready'

export default {
  ready: Ready(),
  urls: {
    start: '#!/auth/',
    register: '#!/auth/register/',
    login: '#!/auth/login/',
    reset: '/user.json',
    register_ajax: '/api/auth/register/',
    login_ajax: '/api/auth/login/',
    logout_ajax: '/api/auth/logout/',
    logout: '#!/auth/logout/',
  },
  GREETING: 'Please Login to Continue',
}