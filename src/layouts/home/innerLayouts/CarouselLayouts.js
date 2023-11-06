import React from 'react';
import { CarouselProvider, Slider, Slide, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SliderComponents from '../../../components/home/SliderComponents';

export default function CarouselLayouts() {
    const imageList = [
        'https://media.istockphoto.com/id/1272950747/photo/elegant-suit-with-make-up-hair-arranged-in-a-ponytail-seated-in-profile-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=fcDVs06bGTiTUbxTkuCvsmCRJobuaVVswiAYIj3xwTg=',
        'https://media.istockphoto.com/id/1038396094/photo/young-beautiful-hispanic-woman-at-home.jpg?s=1024x1024&w=is&k=20&c=qTatlgZLJwav7Agb7ETQhIp6OmzIe_AudmBHZmOhjoc=',
        'https://media.istockphoto.com/id/932153474/photo/studio-portrait-of-brunette-girl-in-white-blouse-on-white-background.jpg?s=1024x1024&w=is&k=20&c=vzH8kUHc20ojbMjSuFcAZEVNezjO3aLi9Bopgkh6vc4=',

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
