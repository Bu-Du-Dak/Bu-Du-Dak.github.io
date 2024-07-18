import CounterUI from './counter.presenter';
import { LoadingOutlined } from '@ant-design/icons';
import useVisitorCounter from '../../../../../../../../hooks/useVisitorCounter';

const Counter = () => {
  const counter = useVisitorCounter();
  return JSON.stringify(counter) === '{}' ? (
    <LoadingOutlined />
  ) : (
    <CounterUI countUser={counter} />
  );
};
export default Counter;
