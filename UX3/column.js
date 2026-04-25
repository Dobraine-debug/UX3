import {ref, computed} from 'vue';
import cell from './cell.js';
import row from './row.js'


export default {
    props:{weeks: Array},
    components: {
        row
    },
    template: `<table v-for = "week in weeks" class = "columnTable"><tbody>
    <row :cells = week></row></tbody></table>`
}