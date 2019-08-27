import db from '../../db'

<ur-admin-list>
  <div class={ theme.outer }>
    <ur-breadcrumbs></ur-breadcrumbs>
    <div class={ theme.header }>
      <div class={ theme.header_title }>
        { model.verbose_name } Admin
        <a class="{ css.btn.primary } { css.right }"
           href="#!/admin/{app.name}/{model.model_name}/new/">New { model.verbose_name }</a>
      </div>
    </div>
    <div class={ theme.content }>
      <ur-table></ur-table>
    </div>
  </div>

<script>
this.mixin('ThemeMixin')
this.on("before-mount", function() {
  const [ _pathname, app_label, model_name ] = this.opts.matches
  this.app = db[app_label];
  this.model = db[app_label][model_name];
  this.thead = ["Object name"];
  this.tbody = this.model.objects.all().map(function(obj) {
    return [`<a href="#!/admin/${app_label}/${model_name}/${obj.id}/">${obj}</a>`]
    });
  this.update();
})
</script>
</ur-admin-list>
