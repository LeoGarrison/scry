import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setResults } from "./searchSlice";

import data from "../../assets/trimmed.json";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("");

    const updateName = (e) => {
        setName(e.currentTarget.value);
    }

    const dispatchResults = (e) => {
        e.preventDefault();
        const results = findResults();
        const mergedResults = mergeResults(results);
        dispatch(setResults({results: mergedResults}));
        if(location.pathname !== "/cards") {
            navigate("/cards");
        }
    }

    const findResults = () => {
        const results = data.filter((card) => {
            if(!card?.image_uris?.art_crop) {
                return;
            }
            if(card.name.toLowerCase().includes(name)) {
                return card;
            }
        })
        return results;
    }

    const mergeResults = (results) => {
        let mergedResults = [];
        for(let result of results) {
            let i = 0;
            while(i < mergedResults.length && mergedResults[i][0].name !== result.name) {
                i++;
            }
            if(i < mergedResults.length) {
                mergedResults[i].push(result);
            }
            else {
                mergedResults.push([result])
            }
        }
        return mergedResults;
    }

    return (
        <>
            <form spellCheck="false" className="text-white">
                <fieldset className="border-solid border border-white">
                    <legend className="text-center">Name</legend>
                    <input type="text" onChange={(e) => {updateName(e)}} className="bg-black outline-none px-0.5 pb-0.5" />
                </fieldset>
                <button onClick={(e) => {dispatchResults(e)}}>Search</button>
            </form>
        </>
    )
}

export default Search;
