import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  const onInpuValueChange = ({target}) => {
      setInputValue(target.value);
  };
  const onSubmit = (event) =>{
    event.preventDefault();
    if (inputValue.length <= 1) return ;
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder="Buscar gif" 
      onChange={onInpuValueChange}
      value={inputValue}
      />
    </form>
  )
}
