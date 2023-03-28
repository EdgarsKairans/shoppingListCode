import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "All products"},
        {name: "complited", label: "Complited"},
        {name: "moreThen2", label: "More than 2"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clasz = active ? "btn-light" : "btn-outline-light";
        return (
            <button type="button"
                    className={`btn ${clasz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;