import { useEffect, useState } from "react";

const Card = ({name, cost, type, artist, image, thumbnail, description}) => {
    return (
        <>
            <section className="text-white">
                <h1>
                    <span>{name}</span>
                    <span>{cost}</span>
                </h1>
                <p>{type}</p>
                <img src={image} alt={`thumbnail of ${name}`} className={thumbnail ? "w-32" : "w-96" } />
                <pre className="font-sans">{description}</pre>
                <p>{artist}</p>
            </section>
        </>
    )
}

export default Card;
