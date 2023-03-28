import { reactive } from "vue";

export const store = reactive({ //direttiva reactive
    characters:[],
    charactersFound: 0,
    searchKey:'',
    searchStatus:''
})