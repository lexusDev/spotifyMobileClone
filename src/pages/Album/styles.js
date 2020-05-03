import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background-color: #111;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#111', 'transparent', 'transparent', '#111'],
})`
    height: 50%;
    justify-content: space-between;
`;

export const Photo = styled.Image`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 50%;
`;

export const ContainerNavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const GroupItemNavBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonFollow = styled.Text`
    margin-right: 20px;
    color: #FFF;
    border-color: #FFF;
    border-width: 1px;
    padding: 6px 10px;
    border-radius: 6px;
`;

export const ContainerInfoBand = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const BandName = styled.Text`
    font-size: 55px;
    color: #FFF;
    font-weight: bold;
    padding: 15px;
`;

export const BandFooter = styled.Text`
    font-size: 12px;
    text-transform: uppercase;
    color: #e6e6e6;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonRandomOrder = styled.TouchableOpacity`
    background-color: #1DD15D;
    padding: 18px 60px;
    border-radius: 30px;
`;

export const ButtonRandomOrderText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const InfoCategory = styled.Text`
    color: #FFF;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
`;

export const ContainerMusic = styled.View`
    flex: 1;
    width: 100%;
`;

export const Music = styled.View`
    flex-direction: row;
    height: 60px;
    align-items: center;
    justify-content: space-between;
`;

export const MusicGroupAllItens = styled.View`
    flex-direction: row;
`;

export const MusicGroupItens = styled.View`

`;

export const MusicNumber = styled.Text`
    color: #e6e6e6;
    padding: 20px;
`;

export const MusicName = styled.Text`
    color: #FFF;
    padding: 5px 0px;
    font-size: 17px;
`;

export const MusicListening = styled.Text`
    color: #ccc;
    font-size: 12px ;
`;
