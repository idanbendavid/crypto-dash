const SortSelector = ({ sortBy, onSortChange }) => {
    return ( 
        <div className="controls">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="market_cap_desc">Market cap (High To Low)</option>
                <option value="market_cap_asc">Market cap (Low To High)</option>
                <option value="price_desc">Price (High To Low)</option>
                <option value="price_asc">Price (Low To High)</option>
                <option value="change_desc">24H change(High To Low)</option>
                <option value="change_asc">24H change(Low To high)</option>
            </select>
        </div>
     );
}

export default SortSelector;