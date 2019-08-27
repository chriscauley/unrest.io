(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('object-hash'), require('riot'), require('lodash'), require('cookie'), require('date-fns')) :
  typeof define === 'function' && define.amd ? define(['object-hash', 'riot', 'lodash', 'cookie', 'date-fns'], factory) :
  (global = global || self, global.uR = factory(global['object-hash'], global.riot, global.lodash, global.cookie, global['date-fns']));
}(this, function (hash, riot, _, cookie, dateFns) { 'use strict';

  hash = hash && hash.hasOwnProperty('default') ? hash['default'] : hash;
  riot = riot && riot.hasOwnProperty('default') ? riot['default'] : riot;
  var ___default = 'default' in _ ? _['default'] : _;
  cookie = cookie && cookie.hasOwnProperty('default') ? cookie['default'] : cookie;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /* A task queue that can be started and stopped.
     Usage:
     ready = Ready();
     const f = () => console.log(1);
     ready(f);
     ready(f,f,f);
     ready.start(); // logs 1 four times
     ready(f) // logs 1
     ready.stop();
     ready(f); // no logs (until next start)
  */
  var Ready = function Ready() {
    var isReady = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return false;
    };

    var _ready = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var stop_count = 1;

    var ready = function ready() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _ready = _ready.concat(args);

      while (isReady() && _ready.length) {
        _ready.shift()();
      }

      while (isReady() && ready._then.length) {
        ready._then.shift()();
      }
    };

    ready._then = [];

    ready.then = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      ready._then = ready._then.concat(args);
      ready();
    };

    ready.start = function (arg0) {
      if (stop_count) {
        stop_count--;
      }

      if (!stop_count) {
        isReady = function isReady() {
          return true;
        };

        ready();
      }

      return arg0;
    };

    ready.stop = function () {
      stop_count += 1;

      isReady = function isReady() {
        return false;
      };
    };

    return ready;
  };

  var router = {
    _routes: {},
    do404: function do404() {
      throw 'NotImplemented';
    },
    // #! TODO
    MODAL_PREFIX: /^#!/,
    ready: Ready(),
    add: function add(new_routes) {
      return Object.assign(router._routes, new_routes);
    }
  };
  riot.observable(router);

  var base = {
    // bootstrap is default
    "default": {
      outer: 'card',
      content: 'card-body',
      footer: 'card-footer',
      header: 'card-header',
      header_title: 'h4'
    },
    modal: {
      mask: 'modal-backgrop fade show',
      root: 'modal',
      outer: 'modal-dialog modal-content',
      header: 'modal-header',
      content: 'modal-body',
      footer: 'modal-footer',
      header_title: 'modal-title'
    },
    none: {
      header_title: 'h4'
    },
    error: 'alert alert-danger',
    table: 'table table-striped table-hover',
    form: {
      field: 'input-field',
      select: 'browser-default'
    },
    btn: {
      "default": 'btn',
      primary: 'btn btn-primary',
      success: 'btn btn-success',
      cancel: 'btn btn-error',
      warning: 'btn bg-warning',
      link: 'btn btn-link',
      group: 'btn-group',
      group_block: 'btn-group' // DNE for bootstrap

    },
    bg: {},
    // #! TODO bootstrap
    mixin_attrs: ['btn', 'bg']
  };
  var spectre = {
    modal: {
      mask: 'modal-overlay',
      root: 'modal active',
      outer: 'modal-container',
      header_title: 'modal-title h4'
    },
    form: {
      field: 'form-group mb-2',
      input: 'form-input',
      label: 'form-label'
    },
    btn: {
      group_block: 'btn-group btn-group-block'
    },
    error: 'bg-gray text-error p-2 mb-2',
    success: 'label label-success mb-2',
    hide: 'd-hide',
    text: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      dark: 'text-dark',
      gray: 'text-gray',
      light: 'text-light',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
      red: 'text-error'
    },
    bg: {
      primary: 'bg-primary p-1',
      secondary: 'bg-secondary p-1',
      dark: 'bg-dark p-1',
      gray: 'bg-gray p-1',
      light: 'bg-light p-1',
      success: 'bg-success p-1',
      warning: 'bg-warning p-1',
      error: 'bg-error p-1',
      red: 'bg-error p-1'
    } // #! TODO
    // this needs to eventually look at link tags and decide on mixins
    // maybe should be wrapped in uR.ready, but then importing in ThemeMixin is complicated

  };
  var css = {};
  var config = ___default.merge(css, base, spectre);

  var overrides = {};

  var icon = function icon(i) {
    return overrides[i] || 'fa fa-' + i;
  };

  icon.overrides = overrides;

  var Mixin = {
    init: function init(opts) {
      this.css = ___default.cloneDeep(config);
      Object.assign(this, ___default.pick(this.css, this.css.mixin_attrs), {
        icon: icon
      });
    }
  };

  var ThemeMixin = {
    init: function init(opts) {
      var _this = this;

      this.mixin(Mixin);

      if (opts.ur_modal) {
        this.theme = this.css.modal;
      } else {
        this.theme = this.css[opts.theme || "default"];
      }

      if (opts.ur_modal) {
        if (opts.cancel) {
          this.one('unmount', opts.cancel);
        }

        var mask = document.createElement('div');
        mask.className = this.theme.mask;
        mask.addEventListener('click', function () {
          return _this.unmount();
        });
        this.root.appendChild(mask);
      }

      this.theme.root && this.theme.root.split(' ').forEach(function (c) {
        return _this.root.classList.add(c);
      });
    }
  };

  Object.assign(config, {
    ThemeMixin: ThemeMixin,
    Mixin: Mixin,
    icon: icon
  });

  var auth = {
    ready: Ready(),
    urls: {
      start: '#!/auth/',
      register: '#!/auth/register/',
      login: '#!/auth/login/',
      reset: '/user.json',
      register_ajax: '/api/auth/register/',
      login_ajax: '/api/auth/login/',
      logout_ajax: '/api/auth/logout/',
      logout: '#!/auth/logout/'
    },
    GREETING: 'Please Login to Continue'
  };

  var pushState = _.debounce(function (path, _data) {
    if (window.location.pathname === path) {
      return;
    } // #! TODO the empty string here is the page title. Need some sort of lookup table


    history.replaceState({
      path: path
    },  document.title, path);
  }, 100);

  var resolve = (function (path) {
    for (var key in router._routes) {
      var regexp = new RegExp(key);
      var match = path.match(regexp);

      if (match) {
        match.key = key;
        return match;
      }
    }
  });

  var route = (function (href) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var new_url = new URL(href, href.match('://') ? undefined : window.location.origin);
    var old_url = new URL(window.location.href);
    var pathname = (new_url.pathname || href).replace(window.location.origin, '');
    var path_match = resolve(pathname);
    var hash_match = new_url && resolve(new_url.hash);
    router.trigger('route');

    if (hash_match) {
      data = _objectSpread2({
        matches: hash_match,
        ur_modal: new_url.hash.match(router.MODAL_PREFIX),
        cancel: function cancel() {
          window.location.hash = '';
          this.unmount && this.unmount();
        }
      }, data);

      router._routes[hash_match.key](new_url.hash, data);
    }

    if (path_match) {
      _.extend(data, {
        matches: path_match
      });
      document.body.dataset.ur_path = pathname;

      router._routes[path_match.key](pathname, data);

      if (router._stale) {
        window.location.hash = '';
      }
    }

    if (!hash_match && !path_match && router.default_route) {
      router.default_route(pathname);
    }

    pushState(href);
    router._stale = true; // #! TODO router.do404();
  });

  // Stops click events from changing the page if caught by unrest router
  var onClick = (function (e) {
    if (e.which !== 1 || // not left click
    e.metaKey || e.ctrlKey || e.shiftKey || // or meta keys
    e.defaultPrevented // or default prevented
    ) return;
    var el = e.target;
    var loc = window.history.location || window.location;

    while (el && el.nodeName !== 'A') {
      el = el.parentNode;
    }

    if (!el || el.nodeName !== 'A' || // not A tag
    el.hasAttribute('download') || // has download attr
    !el.hasAttribute('href') || // has no href attr
    el.target && el.target !== '_self' || // another window or frame
    el.href.indexOf(loc.href.match(/^.+?\/\/+[^/]+/)[0]) === -1 // cross origin
    ) return;
    /*if (el.href !== loc.href && (
      el.href.split('#')[0] === loc.href.split('#')[0] // internal jump
      || el.href.startsWith("#") // hash only
      || base[0] !== '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
      || base[0] === '#' && el.href.split(base)[0] != loc.href.split(base)[0] // outside of #base
      || !go(getPathFromBase(el.href), el.title || document.title) // route not found
      )) return*/

    e.preventDefault();
    route(el.href);
  });

  var emptyElement = (function (element) {
    var children = element.childNodes;
    var i = element.childNodes.length;

    while (i--) {
      element.removeChild(children[i]);
    }
  });

  // Usage uR.element.create("my-tag",attrs,options)
  var create = (function (tagName, attrs, riot_opts) {
    var element = document.createElement(tagName);

    if (attrs.parent) {
      if (typeof attrs.parent === 'string') {
        attrs.parent = document.querySelector(attrs.parent);
      }

      if (attrs.clear) {
        // #! TODO there's probably a better way to handle this
        // technically clear isn't an attribute, but we need a way to empty the parent
        emptyElement(attrs.parent);
        delete attrs.clear;
      }

      attrs.parent.appendChild(element);
      delete attrs.parent;
    }

    Object.assign(element, attrs);

    if (riot_opts) {
      try {
        riot.mount(element, riot_opts);
      } catch (e) {
        console.error("unable to mount", element, riot_opts);
        throw e;
      }
    }

    return element;
  });

  var config$1 = {
    mount_alerts_to: '#ur-alerts',
    mount_to: '#ur-content'
  };

  // Usage: same as uR.element.create but with defaults:
  // should this be moved into the router?
  // this would also let the create('div',{...}) go in uR.router.ready()
  //#! TODO this breaks if not in browser (document DNE)
  // move to unrest.io/index.js

  if (typeof document !== "undefined") {
    [config$1.mount_alerts_to, config$1.mount_to].forEach(function (selector) {
      if (!document.querySelector(selector)) {
        create('div', {
          id: selector.replace('#', ''),
          parent: document.body
        });
      }
    });
  }

  var alert = (function (tagName, attrs, riot_opts) {
    if (riot_opts) {
      riot_opts.ur_modal = true;
    }

    attrs.parent = config$1.mount_alerts_to;
    return create(tagName, attrs, riot_opts);
  });

  var text2obj = (function (obj) {
    // takes in a string or an object, returns an object like { text: String }
    if (typeof obj === "string") {
      return {
        text: obj
      };
    }

    return obj;
  });

  var element = {
    alert: alert,
    config: config$1,
    create: create,
    emptyElement: emptyElement,
    text2obj: text2obj
  };

  var routeElement = (function (element_name) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (pathname) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data = _objectSpread2({}, data, {}, typeof opts === 'function' ? opts(pathname, data) : opts);
      var tagName = element_name.toUpperCase();
      var _current = router._current_tag;
      var attrs = {
        parent: element.config[data.ur_modal ? 'mount_alerts_to' : 'mount_to'],
        clear: true
      };

      if (_current && _current.root.tagName === tagName) {
        // #! TODO needs test
        // reuse _current_tag since it matches the desired route
        _current.trigger('route', data);
      } else {
        element.create(element_name, attrs, data);
      }
    };
  });

  var clearHash = (function () {
    window.location.hash = '';
  });

  Object.assign(router, {
    route: route,
    routeElement: routeElement,
    resolve: resolve,
    clearHash: clearHash
  });
  router.ready(function () {
    document.addEventListener('click', onClick); // if router has not been activated, trigger for current location

    !router._stale && router.route(window.location.href);
    window.addEventListener('hashchange', function () {
      var path = window.location.pathname;

      if (window.location.hash) {
        path += "#" + window.location.hash;
      } // #! TODO this is needed so you can manuall change the hash
      // but I can't get it to not break the general router behavior
      // such as #/abc/ => /arst/ ends up going to /
      //route(path)

    });
  });

  var queryStringify = function queryStringify(params) {
    return Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  };

  var ajax = function ajax(opts) {
    if (typeof opts === 'string') {
      opts = {
        url: opts
      };
    }

    var url = opts.url;
    var fetch_opts = {
      method: opts.method || 'GET',
      headers: {
        'X-CSRFToken': cookie.parse(document.cookie).csrftoken
      }
    };

    if (fetch_opts.method === 'GET' && !___default.isEmpty(opts.data)) {
      if (url.endswith('?')) {
        url += '?';
      }

      url += queryStringify(opts.data);
    } else {
      if (opts.data) {
        fetch_opts.body = JSON.stringify(opts.data);
      }
    }

    return fetch(url, fetch_opts).then(function (response) {
      if (response.status >= 400) {
        throw "NotImplemented: HTTP" + response.status;
      }

      return response.json();
    });
  };

  riot.tag2('ur-auth-start', '<div class="{theme.outer}"> <div class="{theme.header}"> <div class="{theme.header_title}">{auth.GREETING}</div> </div> <div class="{theme.content}"> <p> <a href="{auth.urls.register}" class="{css.btn.primary}">Create New Account</a> </p> <p> <a href="{auth.urls.login}" class="{css.btn.default}">Login</a> </p> </div> </div>', '', '', function(opts) {
    this.auth = auth;
    this.mixin('ThemeMixin');
  });

  riot.tag2('ur-auth-login', '<div class="{theme.outer}"> <div class="{theme.content}"> <ur-form schema="{schema}" submit="{submit}" url="{url}" success="{success}"></ur-form> </div> </div>', '', '', function(opts) {
    this.on("mount", () => {
      if (auth.user && auth.user.id) {
        uR.router.route(uR.router.default_url);
        this.unmount();
      }
    });
    this.mixin('ThemeMixin');
    this.schema = {
      username: {},
      password: { type: 'password' },
    };
    this.submit = form => {
      auth.AUTH_SUCCESS = () => window.location.reload();
      return ajax({
        url: auth.urls.login_ajax,
        data: form.getData(),
        method: "POST",
      }).then(r=> auth.reset())
    };
  });

  var loginRequired = (function (func) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // first argument can be a string to imply we should route directly to a tag
    // #! TODO it would probably be better to do this as a flag on routeElement instead
    // or make a separate shortcut
    if (typeof func === 'string') {
      var tagname = func;

      func = function func(path, data) {
        return create(tagname, data);
      };
    }

    var wrapped = function wrapped() {
      var args = arguments;
      auth.ready(function () {
        var success = function success(data) {
          if (data) {
            auth.setUser(data.user);
          }

          if (window.location.href.indexOf('/auth/') !== -1) {
            router.clearHash();
          }

          func.apply(void 0, _toConsumableArray(args));
        };

        if (!auth.user || data.force) {
          auth.AUTH_SUCCESS = success;
          data.next = window.location.href;

          if (auth.auto) {
            router.route(auth.urls.register, data);
          } else {
            router.route(auth.urls.start, data);
          }
        } else {
          success();
        }
      });
    };

    wrapped.login_required = true;
    return wrapped;
  });

  var setUser = (function (user) {
    if (!user && !auth.user) {
      return;
    } // already logged out


    if (auth.user && user && auth.user.id === user.id) {
      return;
    } // already logged in
    // #!TODO storage.set('auth.user',user || null); // JSON.stringify hates undefined


    auth.user = user;
    riot.update(auth.tag_names);
  });

  var reset = (function () {
    if (!auth.enabled) {
      // assume a dummy user
      auth.setUser({
        username: "TEST USER",
        email: "anon@example.com",
        id: -1,
        is_superuser: true
      });
      auth.ready.start();

      if (auth.user && auth.AUTH_SUCCESS) {
        auth.AUTH_SUCCESS();
        auth.AUTH_SUCCESS = undefined;
      }

      return true;
    }

    auth.setUser(); // removes current user

    return ajax({
      url: auth.urls.reset
    }).then(function (data) {
      auth.setUser(data.user);
      auth.ready.start(); // #! TODO use riot observable so uR.auth.one vs uR.auth.on can control removing event

      if (auth.user && auth.AUTH_SUCCESS) {
        auth.AUTH_SUCCESS();
        auth.AUTH_SUCCESS = undefined;
      }
    });
  });

  auth.ready(function () {
    var _router$add;

    var register = router.routeElement('ur-auth-register');

    if (auth.FAST_REGISTER) {
      register = function register() {
        ajax(auth.urls.register_ajax).then(auth.reset);
      };
    }

    router.add((_router$add = {}, _defineProperty(_router$add, auth.urls.start + '$', router.routeElement('ur-auth-start')), _defineProperty(_router$add, auth.urls.login, router.routeElement('ur-auth-login')), _defineProperty(_router$add, auth.urls.register, register), _defineProperty(_router$add, auth.urls.logout, function () {
      ajax({
        url: auth.urls.logout_ajax,
        method: 'POST'
      }).then(function () {
        uR.router.route("#");
        window.location.reload();
      });
    }), _router$add));
  });
  Object.assign(auth, {
    loginRequired: loginRequired,
    setUser: setUser,
    reset: reset,
    enabled: true,
    FAST_REGISTER: true
  });

  var ready = Ready();

  /* uR.schema.unslugify usage:
     "this_is_a_slug" => "This Is A Slug"
     "ABC.xyz%$_()  asRt" => "Abc Xyz Arst"
  */

  var unslugify = (function (s) {
    if (typeof s !== 'string') {
      s = s.toString();
    }

    return s.replace(/[-_]/g, ' ').replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  });
  var camel2SpaceCase = function camel2SpaceCase(s) {
    return s.replace(/([A-Z])/g, ' $1') // uppercase the first character
    .replace(/^./, _.toUpper);
  };

  var _nameAppAndModel = function _nameAppAndModel(model) {
    if (model.slug) {
      var _model$slug$split = model.slug.split(".");

      var _model$slug$split2 = _slicedToArray(_model$slug$split, 2);

      model.app_label = _model$slug$split2[0];
      model.model_name = _model$slug$split2[1];
    } else if (model.app_label && model.model_name) {
      model.slug = "".concat(model.app_label, ".").concat(model.model_name);
    } else {
      throw "Model \"".concat(model.name, "\" needs app_label and model_name or a slug");
    }
  };

  var _getOrCreateApp = function _getOrCreateApp(app_label) {
    if (!register.db[app_label]) {
      register.db[app_label] = {
        verbose_name: unslugify(app_label || "main"),
        name: app_label,
        _models: []
      };
      register.db.apps.push(register.db[app_label]);
    }

    return register.db[app_label];
  };

  var register = function register(model) {
    _nameAppAndModel(model);

    var app_label = model.app_label,
        model_name = model.model_name,
        slug = model.slug;

    var app = _getOrCreateApp(app_label); // assign model to app and uR.register.db


    register.db[slug] = app[model_name] = model;

    app._models.push(model); // human readable string e.g. "BlogPost" => "Blog Post"


    model.verbose_name = model.verbose_name || camel2SpaceCase(model_name);
  };

  var assert = function assert(bool, exception) {
    if (!bool) {
      throw exception;
    }
  };

  var ForeignKey = function ForeignKey(fk_model) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var field = Field(undefined, opts);
    ready(function () {
      if (typeof fk_model === 'string') {
        fk_model = field.fk_model = ___default.get(register.db, fk_model);
      }

      var setFK = function setFK(obj, fk_obj) {
        obj[field.name + "_id"] = fk_obj.id;
        obj[field.name] = fk_obj;
        return fk_obj;
      };

      field.deserialize = function (pk, json, obj) {
        if (pk instanceof fk_model) {
          return setFK(obj, pk);
        }

        var fk_obj;

        if (!pk && json[field.name + '_id']) {
          pk = json[field.name + '_id'];
        } else if (pk && pk.id) {
          // it's an actual instance
          fk_obj = pk;
          pk = pk.id;
        }

        if (pk && !fk_obj) {
          fk_obj = fk_model.objects.get(pk);
        }

        return fk_obj && setFK(obj, fk_obj);
      };
    });
    Object.assign(field, {
      type: "foreignkey",
      fk_model: fk_model,
      deserialize: function deserialize(pk, json, obj) {
        ready(function () {
          field.deserialize(pk, json, obj);
        });
        return pk;
      },
      serialize: function serialize(obj) {
        if (typeof obj === "string") {
          return parseInt(obj);
        }

        if (typeof obj === "number") {
          return obj;
        }

        return obj && obj.id;
      }
    });
    return field;
  };

  var DateTime = function DateTime() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var now = function now() {
      return new Date().valueOf();
    };

    var initial = opts.auto_now_add || opts.auto_now ? now : undefined;
    var field = Field(initial, opts);
    return Object.assign(field, {
      type: 'datetime',
      serialize: function serialize(value) {
        if (typeof value === "string") {
          return new Date(value).valueOf();
        }

        return value && value.valueOf ? value.valueOf() : value;
      }
    });
  };

  var Time = function Time(initial) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var field = Field(initial, opts);
    field.type = 'time';
    return field;
  };

  var Field = function Field(initial) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var field = _objectSpread2({
      initial: initial,
      serialize: function serialize(v) {
        v = field.coerce(v); // validators will throw errors for invalid values

        field.validators.forEach(function (f) {
          return f(v);
        });
        return v;
      },
      validators: [],
      coerce: function coerce(v) {
        return v;
      },
      toString: function toString() {
        return "".concat(field.model.name, ".").concat(field.name);
      },
      model: {},
      // set by __makeMeta on an Model
      deserialize: function deserialize(v) {
        return v;
      },
      type: opts.type,
      required: opts.required || opts.required === undefined
    }, opts);

    field.required && // defaults to true!
    field.validators.push(function (v) {
      return assert(!___default.isNil(v), "ValueError: ".concat(field, " is required"));
    });
    return field;
  };

  var Int = function Int(initial) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.type = 'int';
    var field = Field(initial, opts);
    field.validators.push(function (v) {
      if (___default.isNil(v)) {
        return; // this will be caught by required validator
      }

      assert(!isNaN(v), "ValueError: ".concat(field, " requires a number"));
    });

    field.coerce = function (v) {
      return typeof v === 'string' ? Number(v) : v;
    };

    return field;
  };

  var String = function String(initial) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.type = 'string';
    var field = Field(initial, opts);
    field.validators.push(function (v) {
      if (___default.isNil(v) || v === '') {
        return; // this will be caught by required validator
      }

      assert(typeof v === 'string', "ValueError: ".concat(field, " requires a string not ").concat(v));
    });
    return field;
  };

  var _Number = Int;

  var Boolean = function Boolean(initial) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.type = 'boolean';

    opts.coerce = function (v) {
      return v && v !== 'false';
    };

    var field = Field(initial, opts);
    return field;
  };

  var List = function List(type) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var deserialize = function deserialize(list) {
      return list;
    };

    if (typeof type === 'function') {
      deserialize = function deserialize(list) {
        return (list || []).map(function (item) {
          return new type(item);
        });
      };
    }

    return Field([], _objectSpread2({
      type: 'list',
      serialize: function serialize(list) {
        return (list || []).map(function (item) {
          return ___default.isFunction(item.serialize) ? item.serialize() : item;
        });
      },
      deserialize: deserialize
    }, opts));
  };

  var TYPES = {
    number: _Number,
    string: String,
    "boolean": Boolean,
    array: List
  };

  var fields = /*#__PURE__*/Object.freeze({
    TYPES: TYPES,
    Number: _Number,
    List: List,
    Boolean: Boolean,
    Field: Field,
    Int: Int,
    ForeignKey: ForeignKey,
    String: String,
    DateTime: DateTime,
    Time: Time
  });

  var notNil = ___default.negate(___default.isNil);

  var Model =
  /*#__PURE__*/
  function () {
    //static fields = { id: 0 } // defines the data structure to be serialized
    //manager = // Storage class to be used for instances
    function Model(opts) {
      _classCallCheck(this, Model);

      this.opts = opts; // maybe move this.opts and this.fields into this.META?

      this.makeOpts(opts);
      this.makeMeta();
      this.deserialize(opts);
    }

    _createClass(Model, [{
      key: "makeOpts",
      value: function makeOpts(opts) {
        this.constructor.__makeOpts();

        for (var _i = 0, _Object$entries = Object.entries(this.constructor.BASE_OPTS); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              default_value = _Object$entries$_i[1];

          this[key] = opts[key] === undefined ? default_value : opts[key];
        }
      }
    }, {
      key: "getFields",
      value: function getFields() {
        return this.META.fields;
      }
    }, {
      key: "makeMeta",
      value: function makeMeta() {
        this.constructor.__makeMeta();

        this.META = this.constructor.META;
      }
    }, {
      key: "deserialize",
      value: function deserialize() {
        var _this = this;

        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.META.fields.forEach(function (field, name) {
          var value = json[name];

          if (!json.hasOwnProperty(name)) {
            value = field.initial;
          }

          if (typeof value === 'function') {
            value = value();
          }

          if (field.deserialize) {
            _this[name] = field.deserialize(value, json, _this);
          } else if (typeof field === 'function') {
            // this is not a 100% accurate test for when to use new
            // https://stackoverflow.com/a/40922715
            // maybe check if object is a subclass of uR.Object?
            _this[name] = field.prototype ? new field(_this, value) : field(_this, value);
          } else {
            _this[name] = value;
          }
        });
      }
    }, {
      key: "serialize",
      value: function serialize() {
        var _this2 = this;

        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _toConsumableArray(this.META.fields.keys());

        var json = ___default.pick(this, keys);

        Object.keys(json).forEach(function (key) {
          var field = _this2.META.fields.get(key);

          json[key] = field.serialize(json[key]);
        });
        return ___default.pickBy(json, notNil);
      }
    }, {
      key: "getFieldnames",
      value: function getFieldnames() {
        return this.constructor.editable_fieldnames || [];
      }
    }, {
      key: "__str__",
      value: function __str__() {
        return "[".concat(this.constructor.model_name, " #").concat(this.id, "]");
      }
    }], [{
      key: "__makeOpts",
      value: function __makeOpts() {
        var _this3 = this;

        if (this.hasOwnProperty('BASE_OPTS')) {
          return; // only execute once!
        }

        this.BASE_OPTS = _objectSpread2({}, this.opts);
        var cls = this;

        while (cls !== Model) {
          cls = Object.getPrototypeOf(cls);

          if (cls.opts) {
            Object.entries(cls.opts).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              if (!_this3.BASE_OPTS.hasOwnProperty(key)) {
                _this3.BASE_OPTS[key] = value;
              }
            });
          }
        }
      }
    }, {
      key: "__makeMeta",
      value: function __makeMeta() {
        var _this4 = this;

        // this is for model level setup (eg primitives to fields or adding manager)
        if (this.hasOwnProperty('META')) {
          return; // only execute once!
        }

        this.META = {};
        var cls = this;
        var manager = this.manager;
        register(this);
        var fieldsets = [cls.fields];

        while (cls !== Model) {
          cls = Object.getPrototypeOf(cls);

          if (cls.hasOwnProperty('fields')) {
            fieldsets.push(cls.fields);
          }

          manager = manager || cls.manager;
        }

        var fields = this.META.fields = new Map(Object.entries(___default.defaults.apply(___default, [{}, manager && manager.fields].concat(_toConsumableArray(___default.reverse(fieldsets))))));
        fields.forEach(function (field, name) {
          var _type = _typeof(field);

          if (_type !== 'object') ; else if (Array.isArray(field)) {
            _type = 'array';
          }

          var type = TYPES[_type]; // primitives are lazily coerced

          if (type) {
            fields.set(name, field = type(field));
          }

          field.name = name;
          field.model = _this4;
        });

        if (manager && !this.objects) {
          this.objects = new manager(this);
        }

        this.prototype.toString = function () {
          return this.__str__();
        };
      }
    }]);

    return Model;
  }();

  Model.opts = {}; // non-data initialization options

  var BaseManager =
  /*#__PURE__*/
  function () {
    function BaseManager(model) {
      var _this = this;

      _classCallCheck(this, BaseManager);

      _defineProperty(this, "create", function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        data = _this.normalize(data);
        var obj = new _this.model(data);
        return _this.set(obj);
      });

      _defineProperty(this, "save", function (obj) {
        console.warn("Manager.save should be renamed to set");
        return _this.set(obj);
      });

      _defineProperty(this, "set", function (obj) {
        _this._set(obj);

        return Promise.resolve(obj);
      });

      _defineProperty(this, "_set", function (obj) {
        if (!(obj instanceof _this.model)) {
          obj = new _this.model(obj);
        }

        if (!obj.id) {
          if (uR.FAKE_IDS) {
            obj.id = ++_this._next_id;
          } else {
            throw "Object cannot be set without id";
          }
        }

        _this.items.set(obj.id, obj);

        return obj;
      });

      this._next_id = 0;
      this.model = model;
      model.manager = model.manager || this.constructor;
      model.objects = this;

      this.model.__makeMeta();

      this.refresh();
    }

    _createClass(BaseManager, [{
      key: "normalize",
      value: function normalize(data) {
        if (typeof data.serialize === 'function') {
          data = data.serialize();
        }

        Object.entries(data).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          // this is just for foreign key
          // maybe the Model constructor could serialize it first?
          if (value instanceof Model) {
            data[key] = value.id;
          }
        });
        return data;
      }
    }, {
      key: "all",
      value: function all() {
        return _toConsumableArray(this.items.values());
      }
    }, {
      key: "filter",
      value: function filter(opts) {
        var results = this.all();

        if (typeof opts === 'function') {
          return results.filter(opts);
        }

        Object.entries(opts).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          results = results.filter(function (r) {
            return r[key] === value;
          });
        });
        return results;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.items = new Map();
      }
    }, {
      key: "get",
      value: function get(id) {
        return this.items.get(parseInt(id));
      }
    }]);

    return BaseManager;
  }();

  var APIManager =
  /*#__PURE__*/
  function (_BaseManager) {
    _inherits(APIManager, _BaseManager);

    function APIManager() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, APIManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(APIManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "create", function (data) {
        data = _this.normalize(data); // #! TODO should be ready.block or ready.ajax

        ready.stop();
        return ajax({
          url: _this._get_base_url(),
          method: 'POST',
          data: data
        }).then(function (data) {
          var obj = _this._set(data);

          ready.start(); //#! TODO

          return obj;
        });
      });

      return _this;
    }

    _createClass(APIManager, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // #! TODO should be ready.block or ready.ajax
        ready.stop();
        return ajax(this._get_base_url()).then(function (response) {
          _this2.pagination = response.pagination;
          _this2.items = new Map();
          response.results.forEach(_this2._set);
        }).then(ready.start); //#! TODO
      }
    }, {
      key: "_get_base_url",
      value: function _get_base_url() {
        var _this$model = this.model,
            app_label = _this$model.app_label,
            model_name = _this$model.model_name;
        return "/api/".concat(app_label, "/").concat(model_name, "/");
      }
    }]);

    return APIManager;
  }(BaseManager);

  var Storage =
  /*#__PURE__*/
  function () {
    function Storage(prefix) {
      _classCallCheck(this, Storage);

      this.PREFIX = prefix || '';
      this.META = 'META/';
      this.defaults = {}; // table with default values

      this._schema = {};
      this.__CACHE = {};

      if (!this.test_supported()) {
        console.warn('Storage not supported, falling back to dummy storage');
        var FAKE_STORAGE = {};

        this.set = function (key, value) {
          return FAKE_STORAGE[key] = value;
        };

        this.get = function (key) {
          return FAKE_STORAGE[key];
        };

        this.has = function (key) {
          return FAKE_STORAGE.hasOwnProperty(key);
        };

        this.remove = function (key) {
          return delete FAKE_STORAGE[key];
        };
      }

      this.times = this.get(this.META + 'times') || {};
      this.keys = this.get(this.META + 'keys') || [];
    }

    _createClass(Storage, [{
      key: "_",
      value: function _(key) {
        return this.PREFIX + key;
      }
    }, {
      key: "_getItem",
      value: function _getItem(key) {
        if (this.__CACHE[key] === undefined) {
          this.__CACHE[key] = localStorage.getItem(this._(key));
        }

        return this.__CACHE[key];
      }
    }, {
      key: "_setItem",
      value: function _setItem(key, value) {
        localStorage.setItem(this._(key), this.__CACHE[key] = value);
      }
    }, {
      key: "_removeItem",
      value: function _removeItem(key) {
        return localStorage.removeItem(this._(key));
      }
    }, {
      key: "_hasOwnProperty",
      value: function _hasOwnProperty(key) {
        return localStorage.hasOwnProperty(this._(key));
      }
    }, {
      key: "get",
      value: function get(key) {
        // pull a json from local storage or get an object from the defaults dict
        var value;

        if (this._hasOwnProperty(key)) {
          try {
            value = JSON.parse(this._getItem(key));
          } catch (e) {
            console.warn("Item \"".concat(key, "\" in Storage(").concat(this.PREFIX, ") was not JSON"), value);

            if (!value) {
              this.remove(key);
            }
          }
        } else if (this.defaults.hasOwnProperty(key)) {
          value = this.defaults[key];
        }

        return value;
      }
    }, {
      key: "update",
      value: function update(data) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            this.set(key, data[key]);
          }
        }
      }
    }, {
      key: "set",
      value: function set(key, value) {
        // store stringified json in localstorage
        if (!value && value !== 0 && value !== '') {
          return this.remove(key);
        }

        this._setItem(key, JSON.stringify(value));

        this.times[key] = new Date().valueOf();
        this.keys.indexOf(key) === -1 ? this.keys.push(key) : undefined;

        this._save();

        return this.get(key);
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.keys.indexOf(key) !== -1;
      }
    }, {
      key: "remove",
      value: function remove(key) {
        // note, removing a key will revert to default (if present), not undefined
        this._removeItem(key);

        this.keys = this.keys.filter(function (k) {
          return k !== key;
        });
        delete this.times[key];

        this._save();
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var key in this.times) {
          this.remove(key);
        }

        this._save();
      }
    }, {
      key: "_save",
      value: function _save() {
        this._setItem(this.META + 'times', JSON.stringify(this.times));

        this._setItem(this.META + 'keys', JSON.stringify(this.keys));
      }
    }, {
      key: "test_supported",
      value: function test_supported() {
        // incognito safari and older browsers don't support local storage. Use an object in ram as a dummy
        try {
          localStorage.setItem('test', '1');
          localStorage.removeItem('test');
          return true;
        } catch (e) {
          console.warn('No local storage found. Falling back.');
        }
      }
    }]);

    return Storage;
  }();

  var StorageManager =
  /*#__PURE__*/
  function (_BaseManager) {
    _inherits(StorageManager, _BaseManager);

    function StorageManager(opts) {
      var _this;

      _classCallCheck(this, StorageManager);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(StorageManager).call(this, opts));

      _defineProperty(_assertThisInitialized(_this), "_set", function (obj) {
        if (!obj.id) {
          obj.id = _this.next_id++;
        }

        _this.items.set(obj.id, obj);

        _this.storage.set(obj.id, obj);
      });

      return _this;
    }

    _createClass(StorageManager, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        _get(_getPrototypeOf(StorageManager.prototype), "refresh", this).call(this);

        this.next_id = 1;
        this.storage = this.storage || new Storage(this.model.slug);
        this.storage.keys.forEach(function (key) {
          var obj = new _this2.model(_this2.storage.get(key));
          _this2.next_id = Math.max(_this2.next_id, obj.id + 1);

          _this2.set(obj);
        });
        return Promise.resolve();
      }
    }]);

    return StorageManager;
  }(BaseManager);

  _defineProperty(StorageManager, "fields", {
    id: Int(undefined, {
      required: false
    })
  });

  var db = _objectSpread2({
    ready: ready,
    register: register,
    APIManager: APIManager,
    BaseManager: BaseManager,
    StorageManager: StorageManager,
    Model: Model,
    fields: fields,
    apps: [],
    REQUIRED: {}
  }, fields, {
    getModel: function getModel(model) {
      if (typeof model === 'string') {
        model = db[model];
      }

      return model;
    }
  });

  register.db = db;

  riot.tag2('ur-admin-app', '<div class="{theme.outer}"> <ur-breadcrumbs></ur-breadcrumbs> <div class="{theme.header}"> <div class="{theme.header_title}">{app.verbose_name} Admin</div> </div> <div class="{theme.content}"> <ur-table></ur-table> </div> </div>', '', '', function(opts) {
  this.mixin('ThemeMixin');
  this.on("before-mount",function() {
    const app_label = this.opts.matches[1];
    this.app = db[app_label];
    this.thead = ["Model","Count"];
    this.tbody = this.app._models.map(function(model) {
      return [
        `<a href="#!/admin/${app_label}/${model.model_name}/">${model.verbose_name}</a>`,
        model.objects.all().length
      ]
    });
    this.update();
  });
  });

  class BreadCrumbs {
    constructor(app,model,obj) {
      this.items = [];
      this.path = "#!/";
      this.addPath("Home",'admin');
      app && this.addPath(app.name);
      model && this.addPath(model.model_name);
      obj && this.addPath(obj,obj.id);
    }
    addPath(text,path) {
      this.path += (path || text) + "/";
      this.items.push({
        text,
        href: this.path,
      });
    }
  }

  riot.tag2('ur-breadcrumbs', '<div style="display:flex"> <div class="{css.word}">{hostname}</div> <div each="{item,index in items}" class="{css.crumb}"> <a href="{item.href}" class="{css.word}"> {item.text} </a> </div> </div>', '', 'class="{css.bread}"', function(opts) {
    this.css = {
      bread: "breadcrumb",
      crumb: "breadcrumb-item",
      word: `${uR.css.bg.gray}`,
    };
    this.hostname = window.location.hostname.split(".")[0];

    const { app, obj, model } = this.parent;
    const _bc = new BreadCrumbs(app,model,obj);
    this.items = _bc.items;
    this.items[this.items.length-1].last = true;
    this.on("mount", () => this.update());
  });

  riot.tag2('ur-admin-edit', '<div class="{theme.outer}"> <ur-breadcrumbs></ur-breadcrumbs> <div class="{theme.content}"> <ur-form model="{model}" object="{object}" theme="none" title="{title}" success="{success}"></ur-form> </div> </div>', '', '', function(opts) {
  this.mixin('ThemeMixin');
  this.success = function(new_obj) {
    if (this.obj === "new") {
      const { app_label, model_name } = this.model;
      router.route(`#!/admin/${app_label}/${model_name}/${new_obj.id}/`);
    }
  }.bind(this);
  this.on("before-mount",function() {
    const [_path,app_label,model_name,object_id] = this.opts.matches;
    this.app = db[app_label];
    this.model = this.app[model_name];
    this.obj = this.object = this.model.objects.get(object_id);
    this.title = `Editing: ${this.object}`;
    if (!this.object) {
      this.title = "Add new " + this.model.model_name;
      this.obj = "new";
    }
  });
  });

  riot.tag2('ur-admin-home', '<div class="{theme.outer}"> <ur-breadcrumbs></ur-breadcrumbs> <div class="{theme.header}"> <div class="{theme.header_title}">Admin Home</div> </div> <div class="{theme.content}"> <div class="mb-2"> <ur-table></ur-table> </div> <div if="{links}" class="mb-2"> <h4>Debug Links</h4> <ur-table thead="{links.head}" tbody="{links.body}"></ur-table> </div> </div> </div>', '', '', function(opts) {
  this.mixin(uR.css.ThemeMixin);
  this.on("mount",function() {
    this.thead = ["Model","Count"];
    this.tbody = [];
    db.apps.map(app => {
      const url_root = `#!/admin/${app.name}/`;
      app._models.filter(model => model.objects).map(
        model => this.tbody.push([
          `<a href="${url_root}${model.model_name}/">${model.slug}</a>`,
          model.objects.all().length
        ])
      );
    });

  console.warn("need to import DEBUG_URLS somehow");
  let DEBUG_URLS;
    if (DEBUG_URLS.length) ;
    this.update();
  });
  });

  riot.tag2('ur-admin-list', '<div class="{theme.outer}"> <ur-breadcrumbs></ur-breadcrumbs> <div class="{theme.header}"> <div class="{theme.header_title}"> {model.verbose_name} Admin <a class="{css.btn.primary} {css.right}" href="#!/admin/{app.name}/{model.model_name}/new/">New {model.verbose_name}</a> </div> </div> <div class="{theme.content}"> <ur-table></ur-table> </div> </div>', '', '', function(opts) {
  this.mixin('ThemeMixin');
  this.on("before-mount", function() {
    const [ _pathname, app_label, model_name ] = this.opts.matches;
    this.app = db[app_label];
    this.model = db[app_label][model_name];
    this.thead = ["Object name"];
    this.tbody = this.model.objects.all().map(function(obj) {
      return [`<a href="#!/admin/${app_label}/${model_name}/${obj.id}/">${obj}</a>`]
      });
    this.update();
  });
  });

  riot.tag2('ur-table', '<table class="{css.table}"> <thead></thead> <tbody></tbody> <tfoot></tfoot> </table>', '', '', function(opts) {

    this.Mixin("CSSMixin");
    this.on("mount",function() {
      var self = this;
      ["thead","tbody","tfoot"].map(function(section) {
        var t_element = self.root.querySelector(section);
        var rows = self.opts[section] || self.parent[section];
        if (!rows) { return }
        if (!Array.isArray(rows[0])) { rows = [rows]; }
        rows && rows.map(function(row) {
          var tr = document.createElement("tr");
          row.map(function(column) {
            if (typeof column == "string" || typeof column == 'number') { column = { innerHTML: column +"" }; }
            column.parent = tr;
            element.create("td",column);
          });
          t_element.appendChild(tr);
        });
      });
    });
  });

  var admin = {
    DEBUG_URLS: [],
    URL_PREFIX: 'admin',
    reverse: function reverse() {
      var path = [this.URL_PREFIX].concat(Array.prototype.slice.call(arguments)).join('/');
      return "#!/".concat(path, "/");
    },
    start: function start() {
      return auth.ready(function () {
        if (!auth.user || !auth.user.is_superuser) {
          return;
        }

        var route = function route(name) {
          return router.routeElement('ur-admin-' + name);
        };

        router.add({
          '#!/admin/$': route('home'),
          '#!/admin/([^/]+)/$': route('app'),
          '#!/admin/([^/]+)/([^/]+)/$': route('list'),
          '#!/admin/([^/]+)/([^/]+)/(\\d+|new)/$': route('edit')
        });
        uR.element.create('a', {
          className: config.icon('edit'),
          href: '#!/admin/',
          parent: document.body,
          id: 'admin-link'
        });
      });
    }
  };

  var actions = ['mouseover', 'mouseout', 'mousemove', 'mouseclick', 'mouseup', 'mousedown', 'mousewheel', 'keydown', 'keyup'];

  var Controller =
  /*#__PURE__*/
  function (_db$Model) {
    _inherits(Controller, _db$Model);

    function Controller(opts) {
      var _this;

      _classCallCheck(this, Controller);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this, opts));

      _defineProperty(_assertThisInitialized(_this), "unmount", function () {
        var _assertThisInitialize = _assertThisInitialized(_this),
            parent = _assertThisInitialize.parent;

        _this.bound_actions.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              action = _ref2[0],
              func = _ref2[1];

          parent.removeEventListener(action, func);
        });
      });

      _this.bound_actions = [];

      _this.bindKeys();

      return _this;
    }

    _createClass(Controller, [{
      key: "bindKeys",
      value: function bindKeys() {
        var _this2 = this;

        var parent = this.parent; // make parent focusable

        parent.tabIndex = parent.tabIndex || "0";
        parent.focus();
        actions.filter(function (action) {
          return _this2.target[action];
        }).forEach(function (action) {
          var func = function func(e) {
            return _this2.target[action](e);
          };

          _this2.bound_actions.push([action, func]);

          parent.addEventListener(action, func);
        });
      }
    }]);

    return Controller;
  }(db.Model);

  _defineProperty(Controller, "slug", "unrest.Controller");

  _defineProperty(Controller, "opts", {
    parent: db.REQUIRED,
    // html element to bind to
    target: db.REQUIRED,
    // object being controlled
    is_keyboard: true
  });

  var isEven = function isEven(value) {
    if (value % 2) {
      throw "".concat(value, " is not even");
    }
  };

  var config$2 = {
    fields: {},
    type: {
      number: {
        type: 'number',
        validators: [isEven]
      }
    },
    name: {}
  };

  var prep = (function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        obj = _ref2[1];

    if (_typeof(obj) !== 'object') {
      obj = {
        value: obj
      };
    }

    return _objectSpread2({
      type: 'text'
    }, config$2.type[_typeof(obj.value)], {}, config$2.name[name], {}, obj, {
      name: name
    });
  });

  /* Returns a list of [value,label] pairs
     Usage:
     parseChoices([1,2,[3,'three']]) => [[1,1],[2,2],[3,'three']]
  */
  var parseChoices = (function (choices) {
    if (typeof choices === 'function') {
      choices = choices();
    }

    if (choices instanceof Map) {
      choices = _toConsumableArray(choices.keys());
    }

    return choices.map(function (c) {
      var type = _typeof(c);

      if (type === 'undefined') {
        return ['', 'None'];
      }

      if (type === 'string' || type === 'number') {
        return [c, c];
      }

      return c;
    });
  }); // #! TODO This should eventually accomodate groupings as well like:
  // choices = [["group_name",[choice1,choice2,choice3]...],group2,group3]
  // #! TODO Maybe this should be broken out into multiple functions?
  // I can see use cases where someone wants any of these
  // choices.slugify([a,b]) => [[slugify(a),a],[slugify(b),b]]
  // choices.noop([a,b]) => [[a,a],[b,b]]
  // choices.unslugify([a,b]) => [[a,unslugify(a)],[b,unslugify(b)]]

  var prepChoices = (function (opts) {
    if (typeof opts === "function") {
      // is this ever used? opts.choices if what we actually want
      console.warn("opts is funciton, look at me");
      opts = opts();
    }

    return parseChoices(opts.choices).map(function (c, index) {
      return {
        value: c[0],
        label: c[1],
        id: opts.name + '__' + index
      };
    });
  });

  /* Unrest schema definition
     {
       name: string, // required, literally input[name]
       type: string, // required, analogous to input[type]
       value: any, // intial value for input[value]
     }
     An unrest schema object asks "What would this look like in the database"
  */
  var schema = {
    config: config$2,
    prep: prep,
    unslugify: unslugify,
    parseChoices: parseChoices,
    prepChoices: prepChoices
  };

  var config$3 = {
    tag2class: {},
    type2class: {},
    name2class: {}
  };

  var Input =
  /*#__PURE__*/
  function () {
    function Input(opts) {
      _classCallCheck(this, Input);

      _defineProperty(this, "ATTRS", ['name', 'id', 'placeholder', 'required', 'minlength', 'value']);

      _defineProperty(this, "default_tag", 'ur-input');

      ___default.defaults(this, opts, {
        tagName: this.default_tag,
        input_tagname: 'input',
        input_type: opts.type,
        validators: [],
        coerce: function coerce(v) {
          return v;
        },
        value: opts.initial,
        //#! TODO: this is because spectre isn't playing nice
        // remove this and then look at an empty, requierd inupt.
        placeholder: ' '
      });

      if (typeof this.value === 'function') {
        this.value = this.value();
      }

      this.css = {
        label: config.form.label,
        field: "".concat(config.form.field, " ur-").concat(opts.type, " field__").concat(this.name),
        input: config.form.input
      };

      this._updateCss();
    }

    _createClass(Input, [{
      key: "_updateCss",
      value: function _updateCss() {
        var _this$css$error;

        this.css.error = (_this$css$error = {}, _defineProperty(_this$css$error, config.error, true), _defineProperty(_this$css$error, config.hide, this.valid || !this.show_error), _this$css$error);
      }
    }, {
      key: "_createInput",
      value: function _createInput(attrs) {
        attrs = _objectSpread2({}, attrs, {
          type: this.input_type,
          parent: this.tag.root,
          className: this.css.input
        });
        this._input = create(this.input_tagname, ___default.omitBy(attrs, ___default.isNil));
      }
    }, {
      key: "createInput",
      value: function createInput() {
        this._createInput(___default.pick(this, this.ATTRS));
      }
    }, {
      key: "bindTag",
      value: function bindTag(tag) {
        this.tag = tag;
        tag.input = this;
        this.createInput();
        this.bindEvents(this._input);

        this._checkValidity();
      }
    }, {
      key: "_checkValidity",
      value: function _checkValidity() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
        this.valid = false;

        try {
          // this is valid if no validator throws an exception
          this.validators.forEach(function (f) {
            return f(value);
          });
          this.valid = true;
          this.error = undefined;
          this.show_error = true;
        } catch (error) {
          this.error = error;
        }

        return this.valid;
      }
    }, {
      key: "_get_value",
      value: function _get_value() {
        return this.coerce(this._input.value);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents(input) {
        var _this = this;

        var EVENTS = ['change', 'focus', 'keyup', 'keydown'];
        var form_tag = this.tag.parent;

        var bounceSubmit = ___default.debounce(form_tag.submit, 2000);

        EVENTS.forEach(function (name) {
          input.addEventListener(name, function (_event) {
            var new_value = _this._get_value();

            if (_this.value !== new_value) {
              _this.value = new_value;

              _this._checkValidity();

              _this._updateCss();

              form_tag.update();

              if (form_tag.opts.autosubmit) {
                bounceSubmit();
              }
            }
          });
        });
        input.addEventListener('blur', function (_event) {
          _this.show_error = true;

          _this._updateCss();

          _this.tag.parent.update();
        });
      }
    }, {
      key: "focus",
      value: function focus() {}
    }, {
      key: "keydown",
      value: function keydown() {}
    }, {
      key: "keyup",
      value: function keyup() {}
    }, {
      key: "change",
      value: function change() {}
    }, {
      key: "blur",
      value: function blur() {}
    }]);

    return Input;
  }();

  config$3.tag2class['ur-input'] = Input;

  var Select =
  /*#__PURE__*/
  function (_Input) {
    _inherits(Select, _Input);

    function Select() {
      _classCallCheck(this, Select);

      return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
    }

    _createClass(Select, [{
      key: "createInput",
      value: function createInput() {
        var _this = this;

        this.css.input = 'form-select';
        this.input_tagname = 'select';
        this.input_type = undefined;

        _get(_getPrototypeOf(Select.prototype), "createInput", this).call(this);

        this.choices = prepChoices(this);
        this.choices.forEach(function (c) {
          create('option', {
            parent: _this._input,
            innerHTML: c.label,
            id: c.id,
            value: c.value
          });
        });
        this.ATTRS.forEach(function (attr) {
          _this._input[attr] = _this[attr];
        });
      }
    }]);

    return Select;
  }(Input);

  var Checkboxes =
  /*#__PURE__*/
  function (_Input) {
    _inherits(Checkboxes, _Input);

    function Checkboxes(opts) {
      var _this;

      _classCallCheck(this, Checkboxes);

      opts.tagName = 'ur-checkboxes';
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkboxes).call(this, opts));
      _this.choices = prepChoices(_assertThisInitialized(_this));
      _this.input_type = 'checkbox';
      return _this;
    }

    _createClass(Checkboxes, [{
      key: "createInput",
      value: function createInput() {
        return;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this2 = this;

        this.tag.on("mount", function () {
          _this2._getInputs().forEach(function (i) {
            i.checked = _this2.value.includes(i.value);

            _get(_getPrototypeOf(Checkboxes.prototype), "bindEvents", _this2).call(_this2, i);
          });
        });
      }
    }, {
      key: "_getInputs",
      value: function _getInputs() {
        return _toConsumableArray(this.tag.root.querySelectorAll('input'));
      }
    }, {
      key: "_get_value",
      value: function _get_value() {
        return this._getInputs().filter(function (i) {
          return i.checked;
        }).map(function (i) {
          return i.value;
        });
      }
    }]);

    return Checkboxes;
  }(Input);

  var getCls = function getCls(opts) {
    // config will be used here eventually
    if (opts.type === 'boolean') {
      opts.choices = [['false', 'No'], ['true', 'Yes']];
    }

    if (config$3.type2class[opts.type]) {
      return config$3.type2class[opts.type];
    }

    if (config$3.name2class[opts.name]) {
      return config$3.name2class[opts.name];
    }

    if (opts.choices) {
      if (opts.type === 'list') {
        return Checkboxes;
      }

      return Select;
    }

    return Input;
  };

  var FormMixin = {
    prepOpts: function prepOpts() {
      this.opts.opts && Object.assign(this.opts, this.opts.opts);
      var matches = this.opts.matches;

      if (matches && db[matches[1]]) {
        this.opts.model = db[matches[1]];
        this.opts.object = this.opts.model.objects.get(matches[2]);
      }
    },
    init: function init() {
      var _this = this;

      this.prepOpts();
      this.inputs = [];

      ___default.defaults(this.opts, {
        success_text: 'Submit',
        cancel_text: 'Cancel',
        prefix: ''
      });

      ___default.assign(this, {
        title: this.opts.title,
        addInputs: function addInputs() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.opts;
          var object = opts.object,
              editable_fieldnames = opts.editable_fieldnames;

          var _fields, fieldnames, submit;

          if (object) {
            opts.initial = object.serialize();
            _fields = object.getFields();
            fieldnames = editable_fieldnames || object.getFieldnames();

            submit = function submit() {
              Object.assign(object, _this.getData());
              var promise = Promise.resolve(object);

              if (object.constructor.objects) {
                promise = object.constructor.objects.create(object.serialize());
              }

              return promise.then(function (item) {
                _this.success_message = "".concat(item, " has been saved");
                opts.success && opts.success(item);
                riot.update();
              });
            };
          } else if (opts.model) {
            var model = db.getModel(opts.model);

            model.__makeMeta();

            _fields = model.META.fields;
            fieldnames = editable_fieldnames || model.editable_fieldnames;

            submit = function submit() {
              return model.objects.create(_this.getData()).then(function (item) {
                _this.success_message = "".concat(item, " has been created");
                opts.success && opts.success(item);
                riot.update();
              });
            };
          } else if (opts.schema) {
            _fields = new Map(Object.entries(opts.schema));
            fieldnames = _toConsumableArray(_fields.keys());
          } else {
            throw 'ValueError: <ur-form> requires a schema, model, or object';
          }

          var fields = new Map();

          if (!fieldnames) {
            throw "ur-form cannot be used without fieldnames";
          }

          fieldnames.forEach(function (fieldname) {
            fields.set(fieldname, _fields.get(fieldname));
          }); // called by tag when form is submitted

          opts.submit = opts.submit || submit; // pre-process and create the inputs

          Array.from(fields).filter(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                name = _ref2[0],
                _obj = _ref2[1];

            return fieldnames.indexOf(name) !== -1;
          }).map(schema.prep) // #! TODO is this necessary for Object/Model or just raw schema
          .forEach(_this.addInput);
        },
        addInput: function addInput(field) {
          // converts a schema field to input options
          var opts = {
            label: schema.unslugify(field.name),
            id: "".concat(_this.prefix || '', "__").concat(field.name)
          };

          ___default.assign(opts, field);

          if (opts.type === "foreignkey") {
            // #! TODO maybe this could be in opts.prepInput or something?
            // currently it's too specific to foreignkey
            opts.choices = opts.fk_model.objects.all().map(function (obj) {
              return [obj.id, obj.toString()];
            });
          }

          if (opts.type === "list") {
            opts.coerce = function (v) {
              return v.split(",");
            };
          }

          if (_this.opts.initial) {
            opts.initial = _this.opts.initial[opts.name];
          }

          var cls = getCls(opts);

          _this.inputs.push(new cls(opts));
        },
        checkValidity: function checkValidity() {
          // form is valid if there are no invalid inputs
          _this.valid = !_this.inputs.filter(function (f) {
            return !f.valid;
          }).length;
          return _this.valid;
        },
        getData: function getData() {
          var result = _objectSpread2({}, this.opts.initial);

          this.inputs.forEach(function (f) {
            return result[f.name] = f.value;
          });
          return result;
        }
      });

      this.addInputs(this.opts);
    }
  };

  var DateTimeInput =
  /*#__PURE__*/
  function (_Input) {
    _inherits(DateTimeInput, _Input);

    function DateTimeInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DateTimeInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "default_tag", 'ur-datetime');

      return _this;
    }

    _createClass(DateTimeInput, [{
      key: "_createInput",
      value: function _createInput() {
        var _this2 = this;

        var date_value, time_value;

        if (this.value) {
          var dt = new Date(this.value);
          date_value = dateFns.format(dt, 'YYYY-MM-DD');
          time_value = dateFns.format(dt, 'HH:mm');
        }

        setTimeout(function () {
          return _this2._date_input.value = date_value;
        }, 2000);
        this._date_input = create('input', {
          type: 'date',
          value: date_value,
          className: this.css.input,
          parent: this.tag.root
        });
        this._time_input = create('input', {
          type: 'time',
          value: time_value,
          className: this.css.input,
          parent: this.tag.root
        });
      }
    }, {
      key: "_get_value",
      value: function _get_value() {
        var str = this._date_input.value + ' ' + this._time_input.value;
        return new Date(str).valueOf();
      }
    }, {
      key: "bindTag",
      value: function bindTag(tag) {
        this.tag = tag;
        tag.input = this;

        this._createInput();

        this.bindEvents(this._date_input);
        this.bindEvents(this._time_input);

        this._checkValidity();
      }
    }]);

    return DateTimeInput;
  }(Input);
  config$3.type2class['datetime'] = DateTimeInput;

  riot.tag2('ur-input', '', '', '', function(opts) {
  this.on("before-mount",() => {
    this.opts.input.bindTag(this);
  });
  });

  riot.tag2('ur-form', '<div class="{theme.outer}"> <div class="{theme.header}" if="{title}"> <div class="{theme.header_title}">{title}</div> </div> <div class="{theme.content}"> <div class="rendered_content"></div> <form onsubmit="{submit}" class="{className}"> <yield from="pre-form"></yield> <div class="fields"> <div each="{input,_i in inputs}" class="{input.css.field}"> <label if="{css.form.label}" for="{input.id}" class="{input.css.label}"> {input.label} </label> <div data-is="{input.tagName}" input="{input}"></div> <div class="{input.css.error}">{input.error}</div> <div class="{input.css.help_text}">{input.help_text}</div> </div> </div> <div if="{error}" class="{css.error}" style="display: block;">{error}</div> <div if="{success_message}" class="{css.success}" style="display: block;"> {success_message}</div> <div class="button_div"> <yield from="button_div"></yield> <virtual if="{!opts.autosubmit}"> <button class="{css.btn.success}" onclick="{submit}" disabled="{!valid}"> {opts.success_text}</button> <button class="{css.btn.cancel}" if="{opts.cancel}" onclick="{cancel}"> {opts.cancel_text}</button> </virtual> </div> </form> </div> </div>', '', 'class="ur-form"', function(opts) {
  this.mixin(FormMixin);
  this.mixin(ThemeMixin);
  this.on("mount",() => {
    this.update();
  });

  this.on("update", () => {
    this.checkValidity();
  });

  this.submit = function(e) {
    this.error = undefined;
    e && e.preventDefault && e.preventDefault();
    if (!this.checkValidity()) {
      this.form.inputs.forEach( input => input.show_error = true );
      this.update();
      return;
    }
    this.update();
    this.opts.submit(this).catch(e=> {
      this.error = "An unknown error has occurred: "+e;
      this.update();
      throw e
    });
  }.bind(this);

  this.cancel = function(e) {
    e && e.preventDefault && e.preventDefault();
    this.opts.cancel.bind(this)(e);
  }.bind(this);
  });

  riot.tag2('ur-datetime', '<div>Woot</div>', '', '', function(opts) {
  this.on("before-mount",() => {
    this.opts.input.bindTag(this);
  });
  });

  riot.tag2('ur-checkboxes', '<div each="{choice in choices}"> <input type="checkbox" name="{input.name}" id="{choice.id}" riot-value="{choice.value}"> <label for="{choice.id}"> {choice.label} </label> </div>', 'ur-checkboxes,[data-is="ur-checkboxes"]{ column-count: auto; column-width: 8rem; }', '', function(opts) {
  this.choices = [];
  this.on("before-mount",() => {
    this.opts.input.bindTag(this);
    this.choices = this.input.choices;
  });
  this.on("update",() => {
  });
  });

  var form = {
    FormMixin: FormMixin,
    Input: Input,
    Select: Select,
    DateTimeInput: DateTimeInput,
    config: config$3
  };

  var Config =
  /*#__PURE__*/
  function (_Storage) {
    _inherits(Config, _Storage);

    function Config(prefix, schema) {
      var _this;

      _classCallCheck(this, Config);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Config).call(this, prefix));

      Config._configs.push(_assertThisInitialized(_this));

      Config._configs[prefix] = _assertThisInitialized(_this);
      schema && _this.setSchema(schema);
      return _this;
    }

    _createClass(Config, [{
      key: "getDefault",
      value: function getDefault(key, _default, schema) {
        if (!schema || typeof schema === 'string') {
          schema = {
            type: schema,
            _default: _default
          };
        }

        if (schema && !this._schema[key]) {
          this._schema[key] = schema || {};
          this._schema[key].name = key;
        }

        this.defaults[key] = _default;
        !this.has(key) && this.set(key, _default);
      }
    }, {
      key: "get",
      value: function get(key) {
        var out = _get(_getPrototypeOf(Config.prototype), "get", this).call(this, key);

        if (out === undefined) {
          out = this.defaults[key];
        }

        var type = this._schema[key] && this._schema[key].type;

        if (type === 'boolean') {
          return out === 'true';
        }

        if (type === 'int' || type === 'integer') {
          return parseInt(out);
        }

        if (type === 'float') {
          return parseFloat(out);
        }

        return out;
      }
    }, {
      key: "getSchema",
      value: function getSchema(keys) {
        var _this2 = this;

        return this._getSchemaKeys(keys).map(function (key) {
          return _this2._schema[key] || key;
        });
      }
    }, {
      key: "setSchema",
      value: function setSchema(schema) {
        var _this3 = this;

        // #! TODO: detect type and set to int/bool/char. Maybe if value is object extend object
        if (!Array.isArray(schema)) {
          // assume it's name/value object
          var obj = schema;
          schema = [];

          for (var key in obj) {
            schema.push({
              name: key,
              value: obj[key]
            });
          }
        }

        _.each(schema, function (s) {
          if (s.type === 'color' && window.tinycolor) {
            s.initial = window.tinycolor(s.initial).toHexString();
          }

          _this3.getDefault(s.name, s._default || s.value, s);
        });
        return this.getSchema();
      }
    }, {
      key: "_getSchemaKeys",
      value: function _getSchemaKeys(keys) {
        var out = [];

        for (var key in this._schema) {
          if (keys && keys.indexOf(key) === -1) {
            continue;
          }

          this._schema.hasOwnProperty(key) && out.push(key);
        }

        return out;
      }
    }, {
      key: "getData",
      value: function getData(keys) {
        var _this4 = this;

        var out = {};
        _.each(this._getSchemaKeys(keys), function (key) {
          return out[key] = _this4.get(key);
        });
        return out;
      }
    }, {
      key: "openEditor",
      value: function openEditor() {
        var _this5 = this;

        var tag_opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var dirty;
        _.defaults(tag_opts, {
          schema: this.getSchema(),
          submit: function submit(riot_tag) {
            _this5.update(riot_tag.getData());

            dirty = true;
          },
          autosubmit: true,
          onUnmount: function onUnmount() {
            tag_opts && tag_opts.cancel && tag_opts.cancel();
            dirty && window.location.reload();
          }
        });
        _.each(tag_opts.schema, function (s) {
          s._default = s.value;
          s.value = _this5.get(s.name);
        });
        tag_opts.ur_modal = !tag_opts.mount_to; // uR.alertElement('ur-form', tag_opts) //#! TODO
      }
    }]);

    return Config;
  }(Storage);

  Config._configs = [];

  var storage = new Storage();
  storage.Storage = Storage;
  storage.Config = Config;

  var uR$1 = {
    ready: Ready(),
    Ready: Ready,
    Controller: Controller,
    element: element,
    schema: schema,
    form: form,
    css: config,
    router: router,
    ajax: ajax,
    auth: auth,
    storage: storage,
    db: db,
    admin: admin,
    Date: Date,
    TrueDate: Date
  };

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
    window.onload = uR$1.ready.start;

    if (window.__HMR_SKIP) {
      window.location.reload();
    }

    window.__HMR_SKIP = true;
    uR$1.ready.then(function () {
      if (typeof document !== 'undefined') {
        var scripts = _toConsumableArray(document.querySelectorAll('script')).map(function (s) {
          return s.src;
        });

        uR$1.SCRIPT_HASH = hash(scripts);
      }

      uR$1.db.ready.start();
      uR$1.db.ready.then(function () {
        uR$1.auth.reset();
        uR$1.auth.ready(uR$1.router.ready.start);
      });
    });
  }

  return uR$1;

}));
