import { useState } from "react";
import EmiDetails from "./Components/EmiDetails";
import InputControls from "./Components/InputControls";

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <InputControls setData={setData}></InputControls>
      <EmiDetails data={data} />
    </div>
  );
}

export default App;
