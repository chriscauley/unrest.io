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
      <ur-form schema={schema} submit={submit} url="/api/nopass/send/"></ur-form>
    </div>
  </div>
<script>
  this.mixin(ThemeMixin)
  this.schema = {
    email: {type: 'email'}
  }
  this.submit = form => {
    ajax({
      url: "/api/nopass/send/",
      data: form.getData(),
      method: "POST",
    }).then(r=> console.log(r))
  }
</script>
</ur-auth-login>