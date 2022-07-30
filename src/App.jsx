import "./App.css";


// components
// import UsingJsx from "./components/UsingJsx/UsingJsx";
// import UseStateCounter from "./components/UseStateCounter/UseStateCounter";
// import ClassComponent from "./components/ClassComponent/ClassComponent";
// import PropsComponent from "./components/PropsComponent/PropsComponent";
// import MyForm from "./components/MyForm/MyForm";
// import CreatingElementsWithCallback from "./components/CreatingElementsWithCallback/CreatingElementsWithCallback";
// import PaginationComponent from "./components/PaginationComponent/PaginationComponent";

// react 18 what new

// import AsynchBaching from "./components/AsynchBaching/AsynchBaching";
// import UseTransition from "./components/Concurrent/UseTransition";
import UseDeferredValue  from "./components/Concurrent/UseDeferredValue";

// constants
// import { maxObject, mashaObject } from "./constants/personsObjects";

function App() {
  return (
    <div className="App">
      {/* <UsingJsx />
      <UseStateCounter />
      <ClassComponent />

      <PropsComponent person={maxObject} />
      <PropsComponent person={mashaObject} />

      <MyForm />
      <CreatingElementsWithCallback /> */}

      {/* <PaginationComponent /> */}
      {/* react 18 */}
      {/* <AsynchBaching /> */}
      {/* <UseTransition /> */}
      <UseDeferredValue />
    </div>
  );
}

export default App;
