// thead, tbody, and tfoot are copy-pasta, but novelties of tables necessitates this
import _ from 'lodash'

<ur-row>
  <div each={cell,ic in row} class={cell.className}>
    {cell.text}
  </div>
<script>
console.log(this)
</script>
</ur-row>

<ur-table>
  <ur-row each={row,ir in rows} key={ir}></ur-row>

<script>
this.on("before-mount", () => {
  this.rows = opts.rows.map((row,ir) => {
    return row.map((cell,ic) => {
      /* #!TODO
         if (typeof row === 'function') {
         row = row()
         }*/
      if (typeof cell !== 'object') {
        cell = { text: cell }
      }
      console.log(cell)
      return cell
    })
  })
  console.log(this.rows)
  this.update()
})
</script>
</ur-table>