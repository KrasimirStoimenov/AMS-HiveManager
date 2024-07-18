import { useEffect, useState } from 'react'
import apiariesAPI from '../../../api/apiaries-api';

import Accordion from 'react-bootstrap/Accordion';

import ApiaryListItem from './apiary-list-item/ApiaryListItem';

const apiaryListItems = [{ "name": "First" }, { "name": "second" }];

export default function ApiaryList() {
    const [apiaries, setApiaries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await apiariesAPI.getAll();
            setApiaries(Object.values(result));
        })();
    }, []);

    return (
        <Accordion defaultActiveKey="0">
            {apiaries.map((apiary, index) =>
                <ApiaryListItem
                    key={index}
                    apiaryName={apiary.name}
                    eventKey={index.toString()}
                />
            )}
        </Accordion>
    );
}