import { useTheme } from '../shared/lib/theme/useTheme';
import '../App.css';
import { Router } from './providers/router/Router';
import { store } from './providers/store/store';
import { Provider } from 'react-redux';

function App() {
  const { isDark } = useTheme();

  return (
    <Provider store={store}>
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <Router />
      </div>
    </Provider>
  )
}

export default App;
