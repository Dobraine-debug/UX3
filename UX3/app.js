import { createApp, ref } from "vue"
import cell from "./cell.js";
import row from "./row.js";
import column from "./column.js";
import names from "./names.js";
import week from "./week.js";

const app = {
setup() {
        const show = ref(false);
        const page = ref(1);

        function showContent(){
                show.value = true;

        }

        function nextPage(){
                if(page.value == 4){
                        page.value = 4;
                }
                else{
                        page.value = page.value + 1;
                }
                
        }
        function lastPage(){
                if(page.value == 1){
                        page.value = 1;
                }
                else{
                        page.value = page.value - 1;
                }              
        }
        return {show, showContent, page, nextPage, lastPage}
}
}
const vueApp = createApp(app)

        vueApp.component("column", column);
        vueApp.component("names", names);
        vueApp.component("week", week);

        // put component here when instructed

        
        vueApp.mount("#app")