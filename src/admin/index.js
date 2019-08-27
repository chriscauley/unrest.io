import router from '../router/router'
import css from '../css/'
import auth from '../auth'

import './tags'

const admin = {
  DEBUG_URLS: [],
  URL_PREFIX: 'admin',

  reverse() {
    const path = [this.URL_PREFIX, ...arguments].join('/')
    return `#!/${path}/`
  },

  start: () => auth.ready(() => {
    if (!auth.user || !auth.user.is_superuser) {
      return
    }
    const route = name => router.routeElement('ur-admin-'+name)

    router.add({
      '#!/admin/$': route('home'),
      '#!/admin/([^/]+)/$': route('app'),
      '#!/admin/([^/]+)/([^/]+)/$': route('list'),
      '#!/admin/([^/]+)/([^/]+)/(\\d+|new)/$': route('edit'),
    })

    uR.element.create('a', {
      className: css.icon('edit'),
      href: '#!/admin/',
      parent: document.body,
      id: 'admin-link',
    })
  }),
}

export default admin
