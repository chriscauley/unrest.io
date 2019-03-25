import uR from '../../index'

<ur-admin-app>
  <div class={ theme.outer }>
    <ur-breadcrumbs></ur-breadcrumbs>
    <div class={ theme.header }>
      <div class={ theme.header_title }>{ app.verbose_name } Admin</div>
    </div>
    <div class={ theme.content }>
      <ur-table></ur-table>
    </div>
  </div>
  
<script>
this.mixin(uR.css.ThemeMixin)
this.on("before-mount",function() {
  const app_label = this.opts.matches[1]
  this.app = uR.db[app_label]
  this.thead = ["Model","Count"]
  this.tbody = this.app._models.map(function(model) {
    return [
      `<a href="#!/admin/${app_label}/${model.model_name}/">${model.verbose_name}</a>`,
      model.objects.all().length
    ]
  })
  this.update()
})
</script>
</ur-admin-app>
