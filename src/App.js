
import Lists from './components/Lists';
import ListLinks from './components/ListLinks'
import Search from './components/Search';
import ToggleBar from './components/ToggleBar';
import './App.css'


function App() {
  return (
    <>
      <ToggleBar />
      <Search />
      <div className = "appBody">
      <Lists />
      {/* <ListLinks /> */}
    </div>
    </>
  );
}

export default App;
