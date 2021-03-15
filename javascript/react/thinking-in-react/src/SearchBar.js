function SearchBar(props) {
    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    function handleStockChange(e) {
        props.onInStockChange(e.target.checked);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={props.filterText}
                onChange={handleFilterTextChange}/>
            <label>
                <input
                    type="checkbox"
                    onChange={handleStockChange} />
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;