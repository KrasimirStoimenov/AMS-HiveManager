import { useEffect, useState } from 'react'
import apiariesAPI from '../../api/apiaries-api';

import Accordion from 'react-bootstrap/Accordion';

import ApiaryListItem from './apiary-list-item/ApiaryListItem';

export default function Home() {
    const [apiaries, setApiaries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await apiariesAPI.getAll();
            setApiaries(Object.values(result));
        })();
    }, []);

    return (
        <>
            <h1>AMS-HiveManager</h1>
            <h4 className='text-start'>Apiaries with hives:</h4>
            <Accordion defaultActiveKey="0">
                {apiaries.map((apiary, index) =>
                    <ApiaryListItem
                        key={index}
                        apiaryId={apiary._id}
                        apiaryName={apiary.name}
                        eventKey={index.toString()}
                    />
                )}
            </Accordion>
        </>
    );
}