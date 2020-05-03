import React, { useState } from 'react';

import { Container, SubContainer, GroupAction, ActionName } from './styles';

import Icon from '@expo/vector-icons/FontAwesome5';

export default function TabBar() {
    const [iconConfigure] = useState({
        color: '#FFF',
        size: 22
    });

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <Icon name="home" {... iconConfigure} />
                    <ActionName>Início</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="search" {... iconConfigure} />
                    <ActionName>Buscar</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="book-reader" {... iconConfigure} />
                    <ActionName>Sua Biblioteca</ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
}