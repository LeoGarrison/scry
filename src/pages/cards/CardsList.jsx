import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../../features/search/Search';
import Card from '../../features/card/Card';

const CardsList = () => {
    const {results} = useSelector((state) => state.search);

    return (
        <>
            <Search /> 
            {
                results.map((result) => {
                    return (
                        <Link key={result[0].id} to={`/cards/${result[0].name}`}>
                            <Card name={result[0].name} image={result[0].image_uris.art_crop} thumbnail={true} /> 
                        </Link>
                    )
                })
            }
        </>
    )
}

export default CardsList;
