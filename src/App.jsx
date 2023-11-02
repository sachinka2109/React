import "./App.css";
import Canvas from "./components/Canvas";
import UploadFiles from "./components/UploadFiles";
import {
  ClassParentPropComponent,
  ClassParentStateComponent,
} from "./components/class-components";
import {
  FunParentPropComponent,
  FunParentStateComponent,
} from "./components/functional-components";

function App() {
  return (
    <>
      {/* <Canvas /> */}
      {/* <UploadFiles /> */}
      <div className="class-components">
        <h1>Class Components</h1>
        {/* Topic 1: Learning About Props and PropTypes in Class Component */}
        {/* <ClassParentPropComponent /> */}
        {/* Topic 2: Learning About State and setState in Class Component */}
        <ClassParentStateComponent />
      </div>

      <div className="functional-components">
        <h1>Functional Components</h1>
        {/* Topic 1: Learning About Props and PropTypes in Functional Component */}
        {/* <FunParentPropComponent /> */}
        {/* Topic 2: Learning About state and useState in Functional Component */}
        <FunParentStateComponent />
      </div>
    </>
  );
}

export default App;
