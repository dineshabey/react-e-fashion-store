import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CarouselLayouts() {
    const imageList = [
        'https://radikadilanka.com/rdfashion/static/media/Yellow%20and%20White%20Fashion%20Facebook%20Cover2.7d37715a.jpg',
        'https://radikadilanka.com/rdfashion/static/media/Yellow%20and%20White%20Fashion%20Facebook%20Cover.1e91a4ae.jpg',
        'https://radikadilanka.com/rdfashion/static/media/Yellow_and_White_Fashion_Facebook_Cover3.3d57c154.jpg',
    ]

    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>

                    {imageList.map((val, key) => {
                        return <Slide key={key} index={key}>
                            <img src={val}></img>
                        </Slide>

                    })}
                </Slider>
            </CarouselProvider>
        </div>
    )
}
