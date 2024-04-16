import WeatherUI from './weather.presenter';
import useGetWeather from '../../../../../../../../hooks/useGetWeather';
import { LoadingOutlined } from '@ant-design/icons';

const Weather = () => {
  const weather = useGetWeather();
  if (JSON.stringify(weather) === '{}') return <LoadingOutlined />;
  return <WeatherUI weather={weather} />;
};
export default Weather;
