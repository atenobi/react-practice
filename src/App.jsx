import './App.css';

// components
import UsingJsx from './components/UsingJsx/UsingJsx';
import UseStateCounter from "./components/UseStateCounter/UseStateCounter";
import ClassComponent from './components/ClassComponent/ClassComponent';
import PropsComponent from './components/PropsComponent/PropsComponent';
import MyForm from './components/MyForm/MyForm';
import CreatingElementsWithCallback from './components/CreatingElementsWithCallback/CreatingElementsWithCallback';

// constants
import { maxObject, mashaObject } from './constants/personsObjects';

function App() {
  return (
    <div className="App">
      <UsingJsx />
      <UseStateCounter />
      <ClassComponent />

      <PropsComponent person={maxObject} />
      <PropsComponent person={mashaObject} />
      
      <MyForm />
      <CreatingElementsWithCallback />
    </div>
  );
}

export default App;
