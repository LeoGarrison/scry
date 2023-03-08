import { useEffect, useState } from "react";

const Card = ({id, oracle_id, name, layout, image_uri, mana_cost, cmc, type_line, oracle_text, loyalty, power, toughness, colors, color_identity, keywords, card_faces, flavor_text, artist}) => {
    const [selectedFace, setSelectedFace] = useState(0);

    const formatName = () => {
        if(card_faces && card_faces[selectedFace].name) {
            return <p>{card_faces[selectedFace].name}</p>
        }
        return <p>{name}</p>
    }

    const formatManaCost = () => {
        if(card_faces && card_faces[selectedFace].name) {
            return <p>{card_faces[selectedFace].mana_cost}</p>
        }
        return <p>{mana_cost}</p>
    }

    const formatTypeLine = () => {
        if(card_faces && card_faces[selectedFace].name) {
            return <p>{card_faces[selectedFace].type_line}</p>
        }
        return <p>{type_line}</p>
    }

    const formatImage = () => {
        if(card_faces) {
            if(card_faces[selectedFace].image_uri) {
                return <img src={card_faces[selectedFace].image_uri} alt={`image of ${name}`} onClick={(e) => {getNextFace()}}/>
            }
            return <img src={image_uri} alt={`image of ${name}`} style={{"rotate": `${(layout === "flip") ? selectedFace * 180 : 0}deg` }} onClick={(e) => {getNextFace()}} />
        }
        return <img src={image_uri} alt={`image of ${name}`} />
    }

    const formatOracleText = () => {
        if(card_faces && card_faces[selectedFace].oracle_text) {
            return <pre className="font-sans text-white whitespace-pre-wrap">{card_faces[selectedFace].oracle_text}</pre>
        }
        return <pre className="font-sans text-white whitespace-pre-wrap">{oracle_text}</pre>
    }

    const formaPowerToughness = () => {
        if(card_faces) {
            if((card_faces[selectedFace].power && card_faces[selectedFace].toughness)) {
                return <p>{card_faces[selectedFace].power} / {card_faces[selectedFace].toughness}</p>
            }
            return;
        }
        if(power && toughness) {
            return <p>{power} / {toughness}</p>
        }
        return;
    }

    const formatLoyalty = () => {
        if(card_faces) {
            if((card_faces[selectedFace].loyalty)) {
                return <p>{card_faces[selectedFace].loyalty}</p>
            }
            return;
        }
        if(loyalty) {
            return <p>{loyalty}</p>
        }
        return;
    }

    const formatCard = () => {
        return (
            <>
                <section>{formatName()}</section>
                <section>{formatManaCost()}</section>
                <section>{formatImage()}</section> 
                <section>{formatTypeLine()}</section> 
                <section>{formatOracleText()}</section> 
                <section>{formaPowerToughness()}</section> 
                <section>{formatLoyalty()}</section> 
            </>
        )
    }
    
    const getNextFace = () => {
        setSelectedFace((previousFace) => { return previousFace < card_faces.length - 1 ? previousFace + 1 : 0});
    }

    return (
        <>
            <section className="text-white">
                {formatCard()}
            </section>
        </>
    )
}

export default Card;
