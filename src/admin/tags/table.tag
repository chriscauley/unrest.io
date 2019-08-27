import element from '../../element'

<ur-table>
  <table class={ css.table }>
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
  </table>

  this.Mixin("CSSMixin")
  this.on("mount",function() {
    var self = this;
    ["thead","tbody","tfoot"].map(function(section) {
      var t_element = self.root.querySelector(section);
      var rows = self.opts[section] || self.parent[section];
      if (!rows) { return }
      if (!Array.isArray(rows[0])) { rows = [rows]; } // rows should be an array of arrays
      rows && rows.map(function(row) {
        var tr = document.createElement("tr");
        row.map(function(column) {
          if (typeof column == "string" || typeof column == 'number') { column = { innerHTML: column +"" } }
          column.parent = tr;
          element.create("td",column);
        })
        t_element.appendChild(tr);
      });
    });
  });
</ur-table>
