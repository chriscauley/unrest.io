import cookie from 'cookie'
import _ from 'lodash'

var queryStringify = params => Object.keys(params).map(
  (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
).join('&')

const ajax = opts => {
  if (typeof opts === 'string') {
    opts = { url: opts }
  }
  let url = opts.url
  const fetch_opts = {
    method: opts.method || 'GET',
    headers: { 'X-CSRFToken': cookie.parse(document.cookie).csrftoken },
  }
  if (fetch_opts.method === 'GET' && !_.isEmpty(opts.data)) {
    if (url.endswith('?')) {
      url += '?'
    }
    url += queryStringify(opts.data)
  } else {
    if (opts.data) {
      fetch_opts.body = JSON.stringify(opts.data)
    }
  }

  return fetch(url, fetch_opts)
    .then(response => {
      if (response.status >= 400) {
        throw "NotImplemented: HTTP" + response.status
      }
      return response.json()
    })
}

export default ajax
