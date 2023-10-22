import React from 'react';
import { CarouselProvider, Slider, Slide, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SliderComponents from '../../components/home/SliderComponents';

export default function CarouselLayouts() {
    const imageList = [
        'https://radikadilanka.com/rdfashion/static/media/Yellow%20and%20White%20Fashion%20Facebook%20Cover2.7d37715a.jpg',
        'https://radikadilanka.com/rdfashion/static/media/Yellow%20and%20White%20Fashion%20Facebook%20Cover.1e91a4ae.jpg',
        'https://radikadilanka.com/rdfashion/static/media/Yellow_and_White_Fashion_Facebook_Cover3.3d57c154.jpg',
        'https://radikadilanka.com/rdfashion/static/media/carasoule5.81c46b93.jpg',
        'https://radikadilanka.com/rdfashion/static/media/carasoule6.f497aa12.jpg',
        'https://radikadilanka.com/rdfashion/static/media/carasoule7.4adf9f2b.jpg',
    ]

    return (

        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={26}
            totalSlides={6}
        >
            <Slider>

                {imageList.map((val, key) => {
                    return <Slide key={key} index={key}>
                        <SliderComponents image={val} isButtonVisibale={key % 2 === 0} />
                    </Slide>

                })}
            </Slider>
        </CarouselProvider>

    )
}
