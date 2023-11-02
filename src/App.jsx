import "./App.css";
import Canvas from "./components/Canvas";
import UploadFiles from "./components/UploadFiles";
import { ClassParentPropComponent } from "./components/class-components";
import { FunParentPropComponent } from "./components/functional-components";

function App() {
  return (
    <>
      {/* <Canvas /> */}
      {/* <UploadFiles /> */}
      <div className="class-components">
        <h1>Class Components</h1>
        {/* Topic 1: Learning About Props and PropTypes in Class Component */}
        <ClassParentPropComponent />
      </div>

      <div className="functional-components">
        <h1>Functional Components</h1>
        {/* Topic 1: Learning About Props and PropTypes in Functional Component */}
        <FunParentPropComponent />
      </div>
    </>
  );
}

export default App;
