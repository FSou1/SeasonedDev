import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

function ProductTable(props) {
    const rows = [];
    let lastCategory = null;

    props.data.forEach((row) => {
        if (props.filterText && !row.name.includes(props.filterText)) {
            return;
        }
        if(props.inStockOnly && !row.stocked) {
            return;
        }
        if (row.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    name={row.category}
                    key={row.category} />
            );
        }
        rows.push(
            <ProductRow
                name={row.name}
                stocked={row.stocked}
                price={row.price}
                key={row.name} />
        );

        lastCategory = row.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;