import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Search from './pages/search/Search';
import NotFound from './pages/notFound/NotFound';

import './App.css'

function App() {

    return (
        <>
            <Routes>
                <Route path="/home">
                    <Route index element={<Home />} />
                </Route>
                <Route path="/search">
                    <Route index element={<Search />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
