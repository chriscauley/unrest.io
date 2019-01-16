import _ from 'lodash'

const base = {
  // bootstrap is default
  default: {
    outer: 'card',
    content: 'card-body',
    footer: 'card-footer',
    header: 'card-header',
    header_title: 'h4',
  },
  modal: {
    mask: 'modal-backgrop fade show',
    root: 'modal',
    outer: 'modal-dialog modal-content',
    header: 'modal-header',
    content: 'modal-body',
    footer: 'modal-footer',
    header_title: 'modal-title',
  },
  none: {
    header_title: 'h4',
  },
  error: 'alert alert-danger',
  table: 'table table-striped table-hover',
  form: {
    field: 'input-field',
    select: 'browser-default',
  },
  btn: {
    default: 'btn',
    primary: 'btn btn-primary',
    success: 'btn btn-success',
    cancel: 'btn btn-error',
    warning: 'btn bg-warning',
    link: 'btn btn-link',
    group: 'btn-group',
    group_block: 'btn-group', // DNE for bootstrap
  },
  bg: {}, // #! TODO bootstrap
  mixin_attrs: ['btn','bg'],
}

const spectre = {
  modal: {
    mask: 'modal-overlay',
    root: 'modal active',
    outer: 'modal-container',
    header_title: 'modal-title h4',
  },
  form: {
    field: 'form-group',
    input: 'form-input',
    label: 'form-label',
  },
  btn: {
    group_block: 'btn-group btn-group-block',
  },
  error: 'label label-error',
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
    red: 'text-error',
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
    red: 'bg-error p-1',
  },
}

// #! TODO
// this needs to eventually look at link tags and decide on mixins
// maybe should be wrapped in uR.ready, but then importing in ThemeMixin is complicated
const css = {}
export default _.merge(css, base, spectre)
