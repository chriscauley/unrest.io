import uR from '../../index'

<ur-admin-home>
  <div class={ theme.outer }>
    <div class={ theme.header }>
      <div class={ theme.header_title }>Admin Home</div>
    </div>
    <div class={ theme.content }>
      <ur-table></ur-table>
    </div>
  </div>

<script>
this.mixin(uR.css.ThemeMixin)
this.on("mount",function() {
  this.thead = ["App Label"]
  this.tbody = []
  uR.db.apps.map(app => {
    const url_root = `#!/admin/${app.name}/`
    this.tbody.push([`<a href="${url_root}">${app.verbose_name}</a>`])
    app._models.map(model => {
      this.tbody.push([
        `<a href="${url_root}${model.model_name}/">${model.verbose_name}</a>`,
        model.objects.all().length
      ])
    })
  });
  this.tbody.push([""]);
});
</script>
</ur-admin-home>
