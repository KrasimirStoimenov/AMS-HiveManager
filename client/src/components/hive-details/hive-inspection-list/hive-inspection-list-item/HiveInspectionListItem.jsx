import { Button } from "react-bootstrap";
import { formatDate } from "../../../../utils/dateUtils";

export default function HiveInspectionListItem({
    hiveInspection,
    deleteClickHandler
}) {
    return (
        <tr>
            <td>{formatDate(hiveInspection.inspectionDate)}</td>
            <td>{hiveInspection.weatherConditions}</td>
            <td>{hiveInspection.observations}</td>
            <td>{hiveInspection.actionsTaken}</td>
            <td className='list-items-helper-buttons'>
                <Button variant='warning'><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant='danger' onClick={() => deleteClickHandler(hiveInspection._id)}><i className="bi bi-trash-fill"></i> Delete</Button>
            </td>
        </tr>
    );
}