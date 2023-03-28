import "./app-info.css";

const AppInfo = ({completed, products}) => {
    return (
        <div className="app-info">
            <h1>Shopping list</h1>
            <h2>Total number of goods: {products}</h2>
            <h2>Completed: {completed}</h2>
        </div>
    )
}

export default AppInfo;