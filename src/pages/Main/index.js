import React, { useState, useEffect } from 'react';

import { Container, ContainerScrollView } from './styles';

import SlideCard from '../../components/SlideCard';

import Mock from '../../services/mock';

export default function Main() {
    const [slides, setSlides] = useState([]);

    async function onFetchSlides(){
        let response  = await Mock.fetchSlide();
        console.log('response', response);
        setSlides(response);
    }

    useEffect(() => {
        onFetchSlides();
    }, []);

    return (
        <Container>
            <ContainerScrollView>
                { slides && slides.map((slide, index) => (
                    <SlideCard key={index} slide={slide}/>
                )) }
            </ContainerScrollView>
        </Container>
    );
}