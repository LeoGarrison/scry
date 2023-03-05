import { Route, Routes } from 'react-router-dom';

import CardsList from './pages/cards/CardsList';
import CardDetail from './pages/card/CardDetail';
import DeckBuilder from './pages/deckBuilder/DeckBuilder';

import './App.css'

function App() {

    return (
        <>
            <Routes>
                <Route path="/search">
                    <Route index element={<CardsList />} />
                    <Route path=":name" element={<CardDetail />}/>
                </Route>
                <Route path="/deck" element={<DeckBuilder />}/>
                <Route path="*" element={<></>}/>
            </Routes>
        </>
    )
}

export default App
