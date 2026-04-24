import { createApp, ref } from "vue"
import cell from "./cell.js";
import row from "./row.js";
import column from "./column.js";
import names from "./names.js";
import week from "./week.js";

const app = {
setup() {
        const show = ref(false);

        function showContent(){
                show.value = true;

        }
        return {show, showContent}
}
}
const vueApp = createApp(app)

        vueApp.component("column", column);
        vueApp.component("names", names);
        vueApp.component("week", week);

        // put component here when instructed

        
        vueApp.mount("#app")