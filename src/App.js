import "./css/App.css";
import Video from "./Components/Video";
import SearchForm from "./Components/SearchForm";
import QueryProvider from "./context/QueryContext";

function App() {
  return (
    <div className="md:container mx-auto py-4">
      <QueryProvider>
        <Video />
        <SearchForm />
      </QueryProvider>
    </div>
  );
}

export default App;
