import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px 20px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 23px;
    font-weight: bold;
`;

export const SlideScroll = styled.ScrollView.attrs({
    showHorizontalIndicator: false,
    horizontal: true
})`

`;