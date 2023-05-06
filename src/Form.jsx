import { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState('');
  const handleColorCodeChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  }
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form action='' onSubmit={handleSubmit} className='color-form'>
      <input
          type='color'
          value={color}
          onChange={(e) => handleColorCodeChange(e)}
          placeholder='#f15025'
          className="color-input"
        />
        <input
          type='text'
          value={color}
          onChange={(e) => handleColorCodeChange(e)}
          placeholder='#f15025'
        />
        <button className="btn color-btn" type = 'submit' style = {{background: color}}>Submit</button>
      </form>
    </section>
  );
};

export default Form;