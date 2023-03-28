import ShoppingListItem from "../shopping-list-item/shopping-list-item";

import './shopping-list.css';

const ShoppingList = ({data, onDelete, onToggleProp, onIncreaseAmount, onDecreaseAmount}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ShoppingListItem 
                key={id} 
                {...itemProps}
                onIncreaseAmount={() => onIncreaseAmount(id)}
                onDecreaseAmount={() => onDecreaseAmount(id)}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default ShoppingList;