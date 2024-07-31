import { Button } from "react-bootstrap";
import { formatIsoStringToDate } from "../../../../utils/dateUtils";

export default function HiveHarvestListItem({
    hiveHarvest,
    deleteClickHandler
}) {
    return (
        <tr>
            <td>{formatIsoStringToDate(hiveHarvest.date)}</td>
            <td>{Number(hiveHarvest.amount).toFixed(2)}</td>
            <td>{hiveHarvest.product}</td>
            <td className='list-items-helper-buttons'>
                <Button variant='warning'><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant='danger' onClick={() => deleteClickHandler(hiveHarvest._id)}><i className="bi bi-trash-fill"></i> Delete</Button>
            </td>
        </tr>
    );
}