import db from '../../db'

<ur-admin-home>
  <div class={ theme.outer }>
    <ur-breadcrumbs></ur-breadcrumbs>
    <div class={ theme.header }>
      <div class={ theme.header_title }>Admin Home</div>
    </div>
    <div class={ theme.content }>
      <div class="mb-2">
        <ur-table></ur-table>
      </div>
      <div if={links} class="mb-2">
        <h4>Debug Links</h4>
        <ur-table thead={links.head} tbody={links.body}></ur-table>
      </div>
    </div>
  </div>

<script>
this.mixin(uR.css.ThemeMixin)
this.on("mount",function() {
  this.thead = ["Model","Count"]
  this.tbody = []
  db.apps.map(app => {
    const url_root = `#!/admin/${app.name}/`
    app._models.filter(model => model.objects).map(
      model => this.tbody.push([
        `<a href="${url_root}${model.model_name}/">${model.slug}</a>`,
        model.objects.all().length
      ])
    )
  })
  //const { DEBUG_URLS } = uR.admin
console.warn("need to import DEBUG_URLS somehow")
let DEBUG_URLS
  if (DEBUG_URLS.length) {
    this.links = {
      head: [],
      body: DEBUG_URLS.map(href => `<a href="${href}">${href}</a>`)
    }
  }
  this.update()
});
</script>
</ur-admin-home>
