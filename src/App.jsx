
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

// import Header from "./Header";
// import Item from './Item';
import AddPlayerForm from './AddItemForm';
// import Header from './Header';
// import Item from './Item';
// import { preprocessCSS } from 'vite';


function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='total-items'>{props.itemTotal}</span>
        </header>
    )
};


const Item = (props) => {  
    return (
        <div className="item">
            <button className="remove-item" onClick={() => props.removeItem(props.id)}/>
            <span className="item-name">{props.name}</span>
            <Counter />
        </div>
    )
}


const Counter = () => {
    const [quantity, setQuantity] = useState(0)

    const incrementQty = () => {
        setQuantity(prevQuantity => prevQuantity +1)
    }
    const decrementQty = () => {
        if(quantity > 0){
          setQuantity(prevQuantity => prevQuantity - 1)  
        } 
          
    }

    return (
        <div className="quantity">
            <span className="qty-label">QTY</span>
            <button className="increment" onClick={incrementQty}>+</button>
            <button className="decrement" onClick={decrementQty}>-</button>
            <span className="quantity-amount">{quantity}</span>
        </div>
    )
}


const App = () => {
    const [items, setItems] = useState([
        // {
        //     name: "Apples",
           
        //     id: 1
        //   },
        //   {
        //     name: "Bananas",
            
        //     id: 2
        //   },
        //   {
        //     name: "Box of Pasta",
            
        //     id: 3
        //   },
        //   {
        //     name: "Cookies",
            
        //     id: 4
        //   },
        //   {
        //     name: "Bacon",
            
        //     id: 5
        //   },
        //   {
        //     name: "lemons",
            
        //     id: 6
        //   }
    ])

const[nextItemId, setNextItemId] = useState(7);



    const handleRemoveItem = (id) =>{
        setItems(prevItems => prevItems.filter(i => i.id !== id))
    }

///



    const handleAddItem =(name) =>{
      setItems(prevItems =>[
        ...prevItems,
        {
          name,
          
          id: nextItemId
        }
      ]);
      setNextItemId(prevId => prevId + 1);
    }




    return (
        <div className="grocery-list">
            <Header
                title='Grocery List'
                itemTotal={items.length} />

            {/* {Grocery List} */}
            { items.map(item => 
                 <Item 
                 name={item.name} 
                 id={item.id}
                 key={item.id} 
                 removeItem={handleRemoveItem}
                 
                 />  
            )}

            <AddPlayerForm
              addItem={handleAddItem}
            />       

        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);