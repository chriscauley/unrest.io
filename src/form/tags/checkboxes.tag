<ur-checkboxes>
  <div each={choice in choices}>
    <input type="checkbox" name={input.name} id={choice.id}
           value={choice.value}>
    <label for={choice.id}>
      { choice.label}
    </label>
  </div>
<script>
this.choices = []
this.on("before-mount",() => {
  this.opts.input.bindTag(this)
  this.choices = this.input.choices
})
this.on("update",() => {
})
</script>
<style>
:scope {
  column-count: auto;
  column-width: 8rem;
}
</style>
</ur-checkboxes>