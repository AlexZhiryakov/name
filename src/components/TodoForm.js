import React, { useState } from 'react';
import TodoMessages from './TodoMessages';

function TodoForm() {
    const [value, setValue] = useState('') // значение текста
    const [textList, setTextList] = useState([]); // массив сообщений

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    const handleButtonClick = () => {
        setTextList([...textList, value]);
        setValue('');
    };

    return(
        <div>
            <form>
                <label className='inputForm'>
                    <input name='input' type="text" value={value} className='inputTodo' onChange={handleInputChange} />
                </label>

                <label>
                <button className='buttonTodo' onClick={handleButtonClick}>Send</button>
                </label>
            </form>

            <TodoMessages textList={textList} />
        </div>
    )
}
export default TodoForm