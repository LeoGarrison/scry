import { configureStore } from '@reduxjs/toolkit'

import cardFinderReducer from '../features/cardFinder/cardFinderSlice'

export const store = configureStore({
    reducer: {
        finder: cardFinderReducer,
    },
})
