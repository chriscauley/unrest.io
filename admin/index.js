import uR from '../index'

import './tags'

const admin = {
  URL_PREFIX: 'admin',

  reverse: function() {
    const path = [uR.admin.URL_PREFIX, ...arguments].join('/')
    return `#!/${path}/`
  },

  route: function() {
    return uR.route(uR.admin.reverse(...arguments))
  },

  start: () => uR.auth.ready(() => {
    if (!uR.auth.user.is_superuser) {
      return
    }
    const { routeElement } = uR.router
    const route = name => routeElement('ur-admin-'+name)

    uR.router.add({
      '#!/admin/$': route('home'),
      '#!/admin/([^/]+)/$': route('app'),
      '#!/admin/([^/]+)/([^/]+)/$': route('list'),
      '#!/admin/([^/]+)/([^/]+)/(\\d+|new)/$': route('edit'),
    })

    uR.element.create('a', {
      className: uR.css.icon('edit'),
      href: '#!/admin/',
      parent: document.body,
      id: 'admin-link',
    })
  }),
}

export default admin
