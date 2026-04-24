import {ref} from 'vue';
import cell from './cell.js';


export default {
    props: {
        cells: Array,
        name: String

    },
    components: {
        cell
    },
    template: `<span class="name">{{name}}</span><tr><cell v-for = "cell of cells" v-bind:type = cell></cell></tr>`
}