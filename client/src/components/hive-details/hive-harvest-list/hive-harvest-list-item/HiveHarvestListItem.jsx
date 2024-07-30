import { Button } from "react-bootstrap";
import { formatDate } from "../../../../utils/dateUtils";

export default function HiveInspectionListItem({
    hiveHarvest
}) {
    return (
        <tr>
            <td>{formatDate(hiveHarvest.date)}</td>
            <td>{hiveHarvest.amount}</td>
            <td>{hiveHarvest.product}</td>
            <td className='list-items-helper-buttons'>
                <Button variant='warning'><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant='danger'><i className="bi bi-trash-fill"></i> Delete</Button>
            </td>
        </tr>
    );
}