import React, { useState } from "react"
import "./VariableOne.css";

function VariableOne(){
const [inputList, setInputList] = useState([{ variable: "", value: "" }]);

const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...inputList];
  list[index][name] = value;
  setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};

// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { variable: "", value: "" }]);
};

return(
  <div className="box">
{inputList.map((x, i) =>{
  return (
    <div className="variableOne">
        <input className="variable" name="variable"
        placeholder="variable" value={x.variable} onChange={e => handleInputChange(e, i)}/>

        <input className="value" name="value"
        placeholder="value" value={x.value} onChange={e => handleInputChange(e, i)}/>
        {inputList.length !== 1 &&<button className="remove" onClick={() => handleRemoveClick(i) }>Remove</button>}
        {inputList.length - 1 === i &&<button className="add" onClick={handleAddClick}>Add</button>}

    </div>
  )
  })}
  <div >
    <button className="evaluate">Evaluate</button>
  </div>
  </div>
  );
};

export default VariableOne;