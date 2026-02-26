import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {playlistApi} from "@/features/playlists/api/playlistApi.ts";

export const store = configureStore({
    reducer: {
        [playlistApi.reducerPath]: playlistApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
})


setupListeners(store.dispatch)