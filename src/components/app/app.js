import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ShoppingList from '../shopping-list/shopping-list';
import ShoppingAddForm from '../shopping-add-form/shopping-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'apples', amount: 10, completed: false, important: true, id: 1},
                {name: 'juices', amount: 2, completed: true, important: false, id: 2},
                {name: 'milk', amount: 1, completed: true, important: false, id: 3}
            ],
            term: "",
            filter: ""
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onIncreaseAmount = (id) => {
        console.log(id);
        this.setState(({ data }) => {
            const newData = data.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: +item.amount + 1,
                    };
                }
                return item;
            });
            return { data: newData };
        });
    };

    onDecreaseAmount = (id) => {
        this.setState(({ data }) => {
            const newData = data.map(item => {
                if (item.id === id && item.amount > 1) {
                    return {
                        ...item,
                        amount: +item.amount - 1,
                    };
                }
                return item;
            });
            return { data: newData };
        });
    };

    addItem = (name, amount) => {
        const newItem = {
            name, 
            amount,
            completed: false,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchProduct = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case "complited":
                return items.filter(item => item.completed);
            case 'moreThen2':
                return items.filter(item => item.amount > 1);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const products = this.state.data.length;
        const completed = this.state.data.filter(item => item.completed).length;
        const visibleData = this.filterPost(this.searchProduct(data, term), filter);

        return (
            <div className="app">
                <AppInfo products={products} completed={completed}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <ShoppingList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onIncreaseAmount={this.onIncreaseAmount}
                    onDecreaseAmount={this.onDecreaseAmount}/>
                <ShoppingAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
