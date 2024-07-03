import React,{useState} from "react";

const AddItemForm = (props) =>{
    const [value, setValue] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.addItem(value);
        setValue("");
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            {console.log(value)}
            <input
                type="text"
                value={value}
                placeholder="Enter item"
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type = "submit"
                value = "Add Item"
            />
        </form>
    );

}

export default AddItemForm;