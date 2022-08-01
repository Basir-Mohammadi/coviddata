import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../componets/Rocket';
import store from '../redux/configureStore';

it('Rocket renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
