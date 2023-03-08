import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setFoundCards } from "./cardFinderSlice";

import data from "../../assets/uniqueArtwork.json";

const CardFinder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("");

    const updateName = (e) => {
        setName(e.currentTarget.value);
    }

    const dispatchFoundCards = (e) => {
        e.preventDefault();
        const results = findCards();
        dispatch(setFoundCards({foundCards: results}));
        if(location.pathname !== "/search") {
            navigate("/search");
        }
    }

    const findCards = () => {
        const results = data.filter((card) => {
            if(card.name.toLowerCase().includes(name)) {
                return card;
            }
        })
        return results;
    }

    return (
        <>
            <form spellCheck="false" className="text-white">
                <fieldset className="border-solid border border-white">
                    <legend className="text-center">Name</legend>
                    <input type="text" onChange={(e) => {updateName(e)}} className="bg-black outline-none px-0.5 pb-0.5 w-full" />
                </fieldset>
                <button onClick={(e) => {dispatchFoundCards(e)}}>Search</button>
            </form>
        </>
    )
}

export default CardFinder;
