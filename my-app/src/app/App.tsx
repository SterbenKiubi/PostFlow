import { MainLayout } from '../shared/layouts/MainLayout';
import { useTheme } from '../shared/lib/theme/useTheme';
import '../App.css'

function App() {
  const { isDark } = useTheme();

  return (
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <MainLayout />
      </div>
  )
}

export default App;
