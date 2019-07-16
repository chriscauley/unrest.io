import FormMixin from '../FormMixin'
import ThemeMixin from '../../css/ThemeMixin'

<ur-form class="ur-form">
  <div class={ theme.outer }>
    <div class={ theme.header } if={ title }>
      <div class={ theme.header_title}>{ title }</div>
    </div>
    <div class={ theme.content }>
      <div class="rendered_content"></div>
      <form onsubmit={ submit } class={ className }>
        <yield from="pre-form"/>

        <div class="fields">
          <div each={ input,_i in inputs } class={ input.css.field }>
            <label if={ css.form.label } for={ input.id } class={ input.css.label }>
              { input.label }
            </label>
            <div data-is={ input.tagName } input={ input }></div>
            <div class={ input.css.error }>{ input.error }</div>
            <div class={ input.css.help_text }>{ input.help_text }</div>
          </div>
        </div>

        <div if={error} class={css.error} style="display: block;">{error}</div>
        <div if={success_message} class={css.success} style="display: block;">
          {success_message}</div>

        <div class="button_div">
          <yield from="button_div"/>
          <virtual if={!opts.autosubmit}>
            <button class={ css.btn.success } onclick={ submit } disabled={!valid}>
              { opts.success_text }</button>
            <button class={ css.btn.cancel } if={ opts.cancel } onclick={ cancel }>
              { opts.cancel_text }</button>
          </virtual>
        </div>

      </form>
    </div>
  </div>

<script>
this.mixin(FormMixin)
this.mixin(ThemeMixin)
this.on("mount",() => {
  this.update()
})

this.on("update", () => {
  this.checkValidity()
})

submit(e) {
  this.error = undefined
  e && e.preventDefault && e.preventDefault()
  if (!this.checkValidity()) { // one last check
    this.form.inputs.forEach( input => input.show_error = true );
    this.update();
    return;
  }
  this.update()
  this.opts.submit(this).catch(e=> {
    this.error = "An unknown error has occurred: "+e
    this.update()
    throw e
  })
}

cancel(e) {
  e && e.preventDefault && e.preventDefault()
  this.opts.cancel.bind(this)(e)
}
</script>
</ur-form>