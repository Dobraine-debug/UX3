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
        const firstWeek = ref(1);
        const secondWeek = ref(2);
        const thirdWeek = ref(3);
        const fourthWeek = ref(4);

        const weekOne = ref([["booked_full", "prel_booked_full", "prel_booked_half", "booked_full", "booked_half"],
                ["absent", "booked_full", "booked_half","booked_full", "booked_half"], 
                ["absent", "booked_full", "booked_half","booked_full", "booked_half"],
                ["booked_half", "booked_full", "booked_half","booked_full", "booked_half"]]);

        const names = ref(["Test testsson", "David Skansholm", "Josefina Runnquist", "Karl Karlqvist", "Egon Pettersson"]);

        const v1 = ref(["1/1", "2/1", "3/1", "4/1", "5/1"]);
        const v2 = ref(["8/1", "9/1", "10/1", "11/1", "12/1"]);
        const v3 = ref(["15/1", "16/1", "17/1", "18/1", "19/1"]);
        const v4 = ref(["22/1", "23/1", "24/1", "25/1", "26/1"]);

        const v5 = ref(["29/1", "30/1", "31/1", "1/2", "2/2"]);
        const v6 = ref(["5/2", "6/2", "7/2", "8/2", "9/2"]);
        const v7 = ref(["12/2", "13/2", "14/2", "15/2", "16/2"]);
        const v8 = ref(["19/2", "20/2", "21/2", "22/2", "23/2"]);

        const v9 = ref(["26/2", "27/2", "28/2", "1/3", "2/3"]);
        const v10 = ref(["5/3", "6/3", "7/3", "8/3", "9/3"]);
        const v11 = ref(["12/3", "13/3", "14/3", "15/3", "16/3"]);
        const v12 = ref(["19/3", "20/3", "21/3", "22/3", "23/3"]);

        const v13 = ref(["26/3", "27/3", "28/3", "29/3", "30/3"]);
        const v14 = ref(["2/4", "3/4", "4/4", "5/4", "6/4"]);
        const v15 = ref(["9/4", "10/4", "11/4", "12/4", "13/4"]);
        const v16 = ref(["16/4", "17/4", "18/4", "19/4", "20/4"]);

        function showContent(){
                show.value = true;

        }

        function nextPage(){
                if(page.value == 4){
                        page.value = 4;
                }
                else{
                        page.value = page.value + 1;
                        firstWeek.value = firstWeek.value +4;
                        secondWeek.value = secondWeek.value +4;
                        thirdWeek.value = thirdWeek.value +4;
                        fourthWeek.value = fourthWeek.value +4;
                }
                
        }
        function lastPage(){
                if(page.value == 1){
                        page.value = 1;
                }
                else{
                        page.value = page.value - 1;
                        firstWeek.value = firstWeek.value -4;
                        secondWeek.value = secondWeek.value -4;
                        thirdWeek.value = thirdWeek.value -4;
                        fourthWeek.value = fourthWeek.value -4;
                }              
        }
        return {show, showContent, page, nextPage, lastPage, weekOne, names, v1, v2, v3, v4,v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, 
                firstWeek, secondWeek, thirdWeek, fourthWeek}
}
}
const vueApp = createApp(app)

        vueApp.component("column", column);
        vueApp.component("names", names);
        vueApp.component("week", week);

        // put component here when instructed

        
        vueApp.mount("#app")