import Button from 'react-bootstrap/esm/Button';
import styles from './BeeQueenListItem.module.css';

export default function BeeQueenListItem({
    beeQueen
}) {
    return (
        <tr>
            <td>{beeQueen.year}</td>
            <td>{beeQueen.colorMark}</td>
            <td>{beeQueen.isAlive ? 'Yes' : 'No'}</td>
            <td>{beeQueen.hiveId}</td>
            <td className={`${styles['helper-buttons']}`}>
                <Button variant='warning'><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant='danger'><i className="bi bi-trash-fill"></i> Delete</Button>
            </td>
        </tr>
    );
};