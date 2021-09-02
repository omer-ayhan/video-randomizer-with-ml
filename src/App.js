import './css/App.css';
import Video from './Components/Video'
import SearchForm from './Components/SearchForm';
import QueryProvider from './context/QueryContext'

function App() {
  return (
    <QueryProvider>
      <div className="App">
        <Video />
        <SearchForm />
    </div>
    </QueryProvider>
  );
}

export default App;
