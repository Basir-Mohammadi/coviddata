import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../componets/Mission';
import store from '../redux/configureStore';

it('Missiojns renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
