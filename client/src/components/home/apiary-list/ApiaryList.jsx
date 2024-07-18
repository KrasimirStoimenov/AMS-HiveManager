import Accordion from 'react-bootstrap/Accordion';

import ApiaryListItem from './apiary-list-item/ApiaryListItem';

const apiaryListItems = [{ "name": "First" }, { "name": "second" }];

export default function ApiaryList() {
    return (
        <Accordion defaultActiveKey="0">
            {apiaryListItems.map((apiaryListItem, index) => <ApiaryListItem apiary={apiaryListItem} eventKey={index.toString()} />)}
        </Accordion>
    );
}