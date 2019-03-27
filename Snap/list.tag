import Snap from './index'
import uR from '../index'
import { diffLines } from 'diff'

<snap-diff>
  <pre><div each={r in rows} class={r.className}>{r.text}</div></pre>
<script>
  this.on("mount",() => this.update())
  this.on("update", () => {
    this.rows = []
    this.opts.diff.forEach(item => {
      const [className,pre] = getClassPre(item)
      item.value.split('\n').forEach( text => {
        this.rows.push({
          text: pre+text,
          className,
        })
      })
    })
  })
  const getClassPre = item => {
    if (item.added) {
      return ["text-success","+ "]
    } else if (item.removed) {
      return ["text-error","- "]
    }
    return ["text","  "]
  }
</script>
</snap-diff>

<snap-detail>
  <h2>{result.id} {result.key}</h2>
  <snap-diff diff={diff}></snap-diff>
<script>
  this.result = {}
  this.on("mount",() => this.update())
  this.on("update", () => {
    this.result = this.opts.result
    const { success, old_value, new_value } = this.result

    const prep = obj => JSON.stringify(obj,null,2) || "UNDEFINED"
    this.diff = diffLines(prep(old_value),prep(new_value))
  })
</script>
</snap-detail>

<snap-list class="container">
  <div class="columns">
    <div class="column col-auto">
      <div class="accordion" open each={snapshot in snapshots}>
        <div class="accordion-header">
          {snapshot.name}
        </div>
        <div class="accordion-body">
          <ul class="menu">
            <li each={result in snapshot.results} onclick={select}
                class="menu-item c-hand">
              <a class={getClass(result)}>
                <i class={getIcon(result)} />
                {result.id} {result.key}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="column">
      <snap-detail if={selected} result={selected}/>
      <div if={!selected}>
        Select a snapshot to start
      </div>
    </div>
  </div>
<script>
this.on("mount",() => {
  Snap.on('update',() => this.update())
  this.update()
})
this.on("update", () => {
  this.snapshots = Snap.snapshots
})
accept(e) {
  const { result } = e.item
  result.accepted = true
  result.accept()
}
select(e) {
  const { result } = e.item
  this.selected = (this.selected === result) ? undefined: result
}
this.getIcon = result => {
  const { icon } = uR.css
  if (result.success) {
    return icon('check-square-o')
  } else if (result.accepted) {
    return icon('thumbs-up')
  } else if (result.fail) {
    return icon('exclamation-circle')
  } else {
    return icon('warning')
  }
}
this.getClass = result => {
  if (result.success || result.accepted) {
    return "text-success"
  } else if (result.fail) {
    return "text-error"
  } else {
    return "text-warning"
  }
}
</script>
</snap-list>