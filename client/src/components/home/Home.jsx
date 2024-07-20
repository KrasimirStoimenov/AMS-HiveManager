import { useEffect, useState } from 'react'
import apiariesAPI from '../../api/apiaries-api';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import ApiaryListItem from './apiary-list-item/ApiaryListItem';
import Loading from '../loading/Loading';

export default function Home() {
    const [apiaries, setApiaries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await apiariesAPI.getAll();

            setApiaries(Object.values(result));
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <h1>AMS-HiveManager</h1>
            <div className='mb-4' style={{display:'flex', justifyContent:'space-between'}}>
                <h4 className='text-start'>Apiaries with hives:</h4>
                <Button variant="outline-secondary">+ Add Apiary</Button>
            </div>
            {isLoading
                ? <Loading />
                : <Accordion defaultActiveKey="0">
                    {apiaries.map((apiary, index) =>
                        <ApiaryListItem
                            key={index}
                            apiaryId={apiary._id}
                            apiaryName={apiary.name}
                            eventKey={index.toString()}
                        />
                    )}
                </Accordion>
            }
        </>
    );
}