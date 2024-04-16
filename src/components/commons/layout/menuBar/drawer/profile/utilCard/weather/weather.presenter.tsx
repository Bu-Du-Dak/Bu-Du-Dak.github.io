import { UilTemperatureHalf, UilTear } from '@iconscout/react-unicons';
import { SmallText } from '../../../../../../../../commons/globalStyles';
import * as S from './weather.styles';

const WeatherUI = ({ weather }) => {
  return (
    <S.WeatherWrapper>
      <S.WeatherInnerWrapper style={{ alignItems: 'center' }}>
        <SmallText>{weather.icon}</SmallText>
        <SmallText>{weather.condition}</SmallText>
      </S.WeatherInnerWrapper>
      <S.WeatherInnerWrapper>
        <S.Items>
          <UilTemperatureHalf /> {weather.temp}
        </S.Items>
        <S.Items>
          <UilTear /> {weather.humidity}
        </S.Items>
      </S.WeatherInnerWrapper>
    </S.WeatherWrapper>
  );
};
export default WeatherUI;
