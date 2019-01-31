import uR from '../../index'

<ur-admin-edit>
  <div class={ theme.outer }>
    <ur-breadcrumbs></ur-breadcrumbs>
    <div class={ theme.content }>
      <ur-form model={ model } object={ object } theme="none" title={title}></ur-form>
    </div>
  </div>

<script>
this.mixin(uR.css.ThemeMixin)
this.on("before-mount",function() {
  const [_path,app_label,model_name,object_id] = this.opts.matches
  this.app = uR.db[app_label];
  this.model = this.app[model_name];
  this.obj = this.object = this.model.objects.get(object_id)
  this.title = `Editing: ${this.object}`
  if (!this.object) {
    this.title = "Add new " + this.model.model_name;
    this.obj = "new"
  }
})
</script>
</ur-admin-edit>
