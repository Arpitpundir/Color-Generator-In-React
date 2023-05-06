import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const addColor = (newColor) => {
    try{
      const newColorShades = new Values(newColor).all(10);
      setColors(newColorShades);
    }catch(error){
      toast.error(error.message);
    }
  }
  return (
    <main>
      <Form addColor = {addColor}></Form>
      <ColorList colors = {colors}></ColorList>
      <ToastContainer position='top-center'></ToastContainer>
    </main>
  );
};
export default App;
