function ProductRow(props) {
    return (
        <tr>
            <td className={props.stocked ? '' : 'out-of-stock'}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow;