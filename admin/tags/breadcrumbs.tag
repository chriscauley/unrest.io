import css from '../../css'


class BreadCrumbs {
  constructor(app,model,obj) {
    this.items = []
    this.path = "#!/"
    this.addPath("Home",'admin')
    app && this.addPath(app.name)
    model && this.addPath(model.name)
    obj && this.addPath(obj,obj.id)
  }
  addPath(text,path) {
    this.path += (path || text) + "/"
    this.items.push({
      text,
      href: this.path,
    })
  }
}

<ur-breadcrumbs class={css.bread}>
  <div style="display:flex">
    <div class={css.word}>{hostname}</div>
    <div each={item,index in items} class={css.crumb}>
      <a href={item.href} class={css.word}>
        {item.text}
      </a>
    </div>
  </div>
<script>
  this.css = {
    bread: "breadcrumb",
    crumb: "breadcrumb-item",
    word: `${uR.css.bg.gray}`,
  }
  this.hostname = window.location.hostname.split(".")[0]

  const { app, obj, model } = this.parent
  const _bc = new BreadCrumbs(app,model,obj)
  this.items = _bc.items
  this.items[this.items.length-1].last = true
  this.on("mount", () => this.update())
</script>
</ur-breadcrumbs>