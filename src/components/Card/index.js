import React from 'react';

import { Container, Photo, ContainerSubtitle, Subtitle, SubtitleDescription } from './styles';

export default function Card({ item }) {
    return (
        <Container>
            <Photo source={{ uri: item.photo }}/>
            <ContainerSubtitle>
                <Subtitle>{item.subtitle.title}</Subtitle>
                <SubtitleDescription>{item.subtitle.description}</SubtitleDescription>
            </ContainerSubtitle>
        </Container>
    );
}