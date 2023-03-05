import { useState } from "react"

const Carousel = ({images, size}) => {
    const [selectedImage, setSelectedImage] = useState();

    return (
        <>
            <section>
                {
                    images.map((image) => {
                        return (
                            <div key={result.id} id={result.id} onClick={(e) => {selectCard(e)}}>
                                <Card image={result.image_uris.art_crop} thumbnail={true} /> 
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Carousel;
