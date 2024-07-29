import { Button } from "react-bootstrap";
import { formatDate } from "../../../../utils/dateUtils";

export default function HiveInspectionListItem({ hiveInspection }) {
    return (
        <tr>
            <td>{formatDate(hiveInspection.inspectionDate)}</td>
            <td>{hiveInspection.weatherConditions}</td>
            <td>{hiveInspection.observations}</td>
            <td>{hiveInspection.actionsTaken}</td>
            <td className='list-items-helper-buttons'>
                <Button variant='warning'><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant='danger'><i className="bi bi-trash-fill"></i> Delete</Button>
            </td>
        </tr>
    );
}