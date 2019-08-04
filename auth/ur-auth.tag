import ThemeMixin from '../css/ThemeMixin'
import auth from './index'
import ajax from '../ajax'

<ur-auth-start>
  <div class={theme.outer}>
    <div class={theme.header}>
      <div class={theme.header_title}>{auth.GREETING}</div>
    </div>
    <div class={theme.content}>
      <p>
        <a href={auth.urls.register} class={css.btn.primary}>Create New Account</a>
      </p>
      <p>
        <a href={auth.urls.login} class={css.btn.default}>Login</a>
      </p>
    </div>
  </div>
<script>
  this.auth = auth
  this.mixin(ThemeMixin)
</script>
</ur-auth-start>

<ur-auth-login>
  <div class={theme.outer}>
    <div class={theme.content}>
      <ur-form schema={schema} submit={submit} url={url} success={success}></ur-form>
    </div>
  </div>
<script>
  this.on("mount", () => {
    if (auth.user && auth.user.id) {
      uR.router.route(uR.router.default_url)
      this.unmount()
    }
  })
  this.mixin(ThemeMixin)
  this.schema = {
    username: {},
    password: { type: 'password' },
  }
  this.submit = form => {
    auth.AUTH_SUCCESS = () => window.location.reload()
    return ajax({
      url: auth.urls.login_ajax,
      data: form.getData(),
      method: "POST",
    }).then(r=> auth.reset())
  }
  if (false) { // no pass enabled?
    this.url = "/api/nopass/send/"
    this.submit = form => {
      ajax({
        url: "/api/nopass/send/",
        data: form.getData(),
        method: "POST",
      })
    }
  }
</script>
</ur-auth-login>