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

  start: () => {
    const { routeElement } = uR.router
    uR.router.add({
      '#!/admin/$': routeElement('ur-admin-home'),
      '#!/admin/([^/]+)/$': routeElement('ur-admin-app'),
      '#!/admin/([^/]+)/([^/]+)/$': routeElement('ur-admin-list'),
      '#!/admin/([^/]+)/([^/]+)/(\\d+|new)/$': routeElement('ur-admin-edit'),
    })

    uR.element.create('a', {
      className: uR.css.icon('edit'),
      href: '#!/admin/',
      parent: document.body,
      id: 'admin-link',
    })
  },
}

export default admin
