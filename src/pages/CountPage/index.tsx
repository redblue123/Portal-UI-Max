import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const CountPage = () => {
  const { counter, increment, decrement } = useModel('countModel');

  return (
    <PageContainer ghost>
      <button
        type="button"
        onClick={decrement}
        style={{ width: '24px', height: '24px' }}
      >
        -
      </button>
      {counter}
      <button
        type="button"
        onClick={increment}
        style={{ width: '24px', height: '24px' }}
      >
        +
      </button>
    </PageContainer>
  );
};

export default CountPage;
