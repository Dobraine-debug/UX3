import {ref} from 'vue';
import cell from './cell.js';
import row from './row.js'


export default {
    props:{names:Array},
    template: `<table v-for = "name of names" class="name">
    <tr>{{ name }}</tr>
    </table>`
}