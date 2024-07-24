import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import ApiaryListItem from './apiary-list-item/ApiaryListItem';
import Loading from '../loading/Loading';
import { useFetch } from '../../hooks/useFetch';

export default function Home() {
    const { data: apiaries, isFetching } = useFetch('http://localhost:3030/jsonstore/apiaries', []);

    return (
        <>
            <h1 className='mb-5 mt-5'>AMS-HiveManager</h1>
            <div className={`${styles.subheader}`}>
                <h4 className='text-primary'>Apiaries with hives:</h4>
                <Button as={Link} to='/apiaries/add' variant="outline-primary"><i className="bi bi-plus-lg"></i> Add Apiary</Button>
            </div>
            {isFetching
                ? <Loading />
                : <Accordion defaultActiveKey="0">
                    {Object.values(apiaries).map((apiary, index) =>
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