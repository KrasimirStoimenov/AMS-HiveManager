import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
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
            <h1 className='mb-5 mt-5'>AMS-HiveManager</h1>
            <div className={`${styles.subheader}`}>
                <h4 className='text-primary'>Apiaries with hives:</h4>
                <Button as={Link} to='/apiaries/add' variant="outline-primary"><i className="bi bi-plus-lg"></i> Add Apiary</Button>
            </div>
            {isLoading
                ? <Loading />
                : <Accordion defaultActiveKey="0">
                    {apiaries.map((apiary, index) =>
                        <ApiaryListItem
                            key={index}
                            apiaryId={apiary._id}
                            apiaryName={apiary.name}
                            apiaryLocation={apiary.location}
                            eventKey={index.toString()}
                        />
                    )}
                </Accordion>
            }
        </>
    );
}