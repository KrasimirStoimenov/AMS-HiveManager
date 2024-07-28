import { useGetAllApiaries } from '../../../hooks/useApiaries';
import styles from './ApiaryList.module.css';

import { Link } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import ApiaryListItem from './apiary-list-item/ApiaryListItem';
import Loading from '../../loading/Loading';


export default function ApiaryList() {
    const { apiaries, isFetching } = useGetAllApiaries();

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
                    {apiaries.reverse().map((apiary, index) =>
                        <ApiaryListItem
                            key={apiary._id}
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