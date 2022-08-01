import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../componets/Profile';
import store from '../redux/configureStore';

it('Profile renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
