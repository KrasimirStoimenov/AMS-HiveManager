import { Link } from 'react-router-dom';

import { useGetHiveNumberById } from '../../../hooks/useHives';

export default function BeeQueenListItem({
    beeQueen
}) {
    const { hiveNumber } = useGetHiveNumberById(beeQueen.hiveId);

    return (
        <tr>
            <td>{beeQueen.year}</td>
            <td>{beeQueen.colorMark}</td>
            <td>{beeQueen.isAlive ? 'Yes' : 'No'}</td>
            <td><Link to={`/hives/${beeQueen.hiveId}/details`}>№{hiveNumber}</Link></td>
        </tr>
    );
};