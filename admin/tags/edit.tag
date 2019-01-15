import uR from '../../index'

<ur-admin-edit>
  <div class={ theme.outer }>
    <div class={ theme.header }>
      <div class={ theme.header_title }>Editing: { obj.toString() }</div>
    </div>
    <div class={ theme.content }>
      <div id="form-extra"></div>
      <ur-form process_data={ processData } schema={ schema } method="POST" action={ action }
               post_render={ post_render }></ur-form>
    </div>
  </div>

<script>
this.mixin(uR.css.ThemeMixin)
this.on("before-mount",function() {
  var self = this;
  var app_label = this.opts.matches[1];
  var model_name = this.opts.matches[2];
  var obj_id = this.opts.matches[3];
  this.app = uR.db[app_label];
  this.model = uR.db.getModel(app_label,model_name);
  if (obj_id == "new") { this.obj = new this.model() }
  else { this.obj = this.model.objects.get(obj_id); }
  this.schema = this.obj.getAdminSchema();
  this.processData = (data) => this.obj.toJson(data);
  this.post_render = function() { self.obj.adminPostRender && self.obj.adminPostRender() };
  if (this.obj.form_action) {
    this.action = this.obj.form_action;
    this.ajax_success = (data) => new this.model(data).save();
  } else {
    this.submit = function(form) {
      uR.extend(self.obj,form.getData())
      self.obj.save();
      // #! TODO: need to remove the Saved! when the form is changed
      form.messages = [{ level: 'success', body: "Saved!" }]
    }
  }
})
this.on("mount",function() {
  var extra = this.obj.getAdminExtra();
  if (extra) { this.root.querySelector("#form-extra").innerHTML = extra; }
});
</script>
</ur-admin-edit>
