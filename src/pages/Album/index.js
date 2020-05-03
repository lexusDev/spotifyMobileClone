import React, { useState } from 'react';

import {
    Container,
    ContainerHeader,
    ContainerNavBar,
    GroupItemNavBar,
    ButtonFollow,
    ContainerInfoBand,
    BandName,
    BandFooter,
    Photo,
    Content,
    ButtonRandomOrder,
    ButtonRandomOrderText,
    InfoCategory,
    ContainerMusic,
    Music,
    MusicGroupAllItens,
    MusicGroupItens,
    MusicNumber,
    MusicName,
    MusicListening
} from './styles';

import Icon from '@expo/vector-icons/FontAwesome5';

import musics from './musics.json';

const Musics = () => {

    return musics && musics.map((music, index) => (
        <Music key={index++}>
            <MusicGroupAllItens>
                <MusicNumber>{index++}</MusicNumber>
                <MusicGroupItens>
                    <MusicName>{music.name}</MusicName>
                    <MusicListening>{music.listening}</MusicListening>
                </MusicGroupItens>
            </MusicGroupAllItens>

            <Icon name="ellipsis-v" color="#AAA" size={16} style={{
                padding: 30
            }} />
        </Music>
    ))
}

export default function Album() {
    const [iconConfigure] = useState({
        size: 20,
        color: '#FFF',
    });

    return (
        <Container>
            <Photo source={{ uri: 'https://www.audiograma.com.br/wp-content/uploads/2016/05/nickelback_02-e1467473636737-770x490.jpg' }} />
            <ContainerHeader>
                <ContainerNavBar>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <GroupItemNavBar>
                        <ButtonFollow>
                            Seguindo
                    </ButtonFollow>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerInfoBand>
                    <BandName>Nickelback</BandName>
                    <BandFooter>8.500.752 ouvintes mensais</BandFooter>
                </ContainerInfoBand>
            </ContainerHeader>
            <Content>
                <ButtonRandomOrder>
                    <ButtonRandomOrderText>Ordem Aleatória</ButtonRandomOrderText>
                </ButtonRandomOrder>
                <InfoCategory>Popular</InfoCategory>
                <ContainerMusic>
                    <Musics />
                </ContainerMusic>
            </Content>
        </Container>
    );
}