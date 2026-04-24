import {ref} from 'vue';
import cell from './cell.js';
import row from './row.js'


export default {
    setup(){
        const names = ref(["Test testsson", "David Skansholm", "Josefina Runnquist", "Karl Karlqvist", "Egon Pettersson"]);
        return {names};
    },
    template: `<table v-for = "name of names" class="name">
    <tr>{{ name }}</tr>
    </table>`
}