import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../componets/Dragons';
import store from '../redux/configureStore';

it('Dragons renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
