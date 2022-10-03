import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./all/allSlice";
import heroesSlice from "./heroes/HeroesSlice";

export default configureStore({
    reducer:{
        heroes: heroesSlice,
        all: allSlice
    }
})