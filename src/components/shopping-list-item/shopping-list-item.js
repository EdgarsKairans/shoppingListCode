

import './shopping-list-item.css';

const ShoppingListItem = (props) => {

    const {name, amount, onDelete, onToggleProp, onIncreaseAmount, onDecreaseAmount, completed, important} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (completed) {
        classNames += ' increase';
    }
    if (important) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="important">{name}</span>
            <div className="d-flex align-items-center">
                <button className="btn btn-left btn-outline-secondary btn-sm mr-2" 
                onClick={onDecreaseAmount}>-</button>
                <input type="text" className="list-group-item-input" value={amount} readOnly />
                <button className="btn btn-right btn-outline-secondary btn-sm ml-2"
                onClick={onIncreaseAmount}>+</button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="completed">
                    <i className="fas fa-check"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default ShoppingListItem;
