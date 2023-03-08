import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CardFinder from '../../features/cardFinder/CardFinder';
import Card from '../../features/card/Card';

const Search = () => {
    const {foundCards} = useSelector((state) => state.finder);

    const [cardGroups, setCardGroups] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    const groupByName = () => {
        let results = [];
        for(let card of foundCards) {
            let i = 0;
            while(i < results.length && results[i][0].name !== card.name) {
                i++;
            }
            if(i < results.length) {
                results[i].push(card);
            }
            else {
                results.push([card])
            }
        }
        return results;
    }

    useEffect(() => {
        const results = groupByName();
        setCardGroups([...results]);
        for(let i = 0; i < results.length; i++) {
            selectedCards[i] = 0;
        }
    }, [foundCards])

    const selectNextCard = (index) => {
        let newSelectedCards = [...selectedCards];
        if(selectedCards[index] < cardGroups[index].length - 1) {
            newSelectedCards[index]++;
        }
        else {
            newSelectedCards[index] = 0;
        }
        setSelectedCards(newSelectedCards);
    }

    const selectPreviousCard = (index) => {
        let newSelectedCards = [...selectedCards];
        if(selectedCards[index] > 0) {
            newSelectedCards[index]--;
        }
        else {
            newSelectedCards[index] = cardGroups[index].length - 1;
        }
        setSelectedCards(newSelectedCards);
    }

    return (
        <>
            <section className="flex">
                <section>
                    <CardFinder /> 
                </section>
                <section>
                    {
                        cardGroups.map((group, index) => {
                            return (
                                <section key={group[0].id} className="text-white">
                                    {
                                        group.length > 1 ?
                                        <button onClick={(e) => {selectNextCard(index)}}>+</button> :
                                        <></>
                                    }
                                    <Card {...group[selectedCards[index]]} />
                                    {
                                        group.length > 1 ?
                                        <button onClick={(e) => {selectPreviousCard(index)}}>-</button> :
                                        <></>
                                    }
                                </section>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}

export default Search;
