import MyComponent from './MyComponent';
import './App.css';
import NonRelatedComponent from './NonRelatedComponent';
import { useThemeStore } from './store';

function App() {
  const { isDarkTheme } = useThemeStore();

  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: isDarkTheme ? '#ccc' : '#fff' }}
      >
        <p>Parent Component</p>
        <MyComponent />
      </div>
      <NonRelatedComponent />
    </>
  );
}

export default App;
