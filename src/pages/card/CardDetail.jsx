import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import Search from '../../features/search/Search';
import Card from '../../features/card/Card';
import { useState } from 'react';

const CardDetail = () => {
    const {results} = useSelector((state) => state.search);
    const {name} = useParams();

    const [viewableResults, setViewableResults] = useState(() => {
        let i = 0;
        while(i < results.length && results[i][0].name !== name) {
            i++;
        }
        return results[i];
    });

    const [selectedCard, setSelectedCard] = useState(() => {
        return viewableResults[0]
    });

    const selectCard = (e) => {
        const id = e.currentTarget.id;
        setSelectedCard(findCard(id));
    }

    const findCard = (id) => {
        return viewableResults.find((result) => {
            if(result.id === id) {
                return result;
            }
        })
    }

    return (
        <>
            <section className="flex">
                <Search /> 
                <section>
                    {
                        viewableResults.map((result) => {
                            return (
                                <div key={result.id} id={result.id} onClick={(e) => {selectCard(e)}}>
                                    <Card image={result.image_uris.art_crop} thumbnail={true} /> 
                                </div>
                            )
                        })
                    }
                </section>
                <section>
                    {
                        <Card name={selectedCard.name} cost={selectedCard.mana_cost} image={selectedCard.image_uris.art_crop} thumbnail={false} description={selectedCard.oracle_text} artist={selectedCard.artist} />
                    }
                </section>
            </section>
        </>
    )
}

export default CardDetail;
