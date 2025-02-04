import React, { useState } from 'react';
import '../calculator.css';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const clear = () => setInputValue('');
  return (
    <form className='calculator' name='calc'>
        <input type="text" className='value' value={inputValue} />
        <span className="num clear" onClick={() => clear()}>c</span>
    </form>
  )
}

export default Calculator