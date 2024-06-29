import EN from "../lang/EN.js";
import { writable } from "svelte/store";
const LANG = EN
const langStore = writable({LANG, CURRENT: "EN"}) 

export default langStore