import { useTheme } from '../shared/lib/theme/useTheme';
import '../App.css';
import { Router } from './providers/router/Router';

function App() {
  const { isDark } = useTheme();

  return (
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <Router />
      </div>
  )
}

export default App;
