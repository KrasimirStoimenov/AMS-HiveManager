import Container from 'react-bootstrap/Container';

import ApiaryList from './apiary-list/ApiaryList';

export default function Home() {
    return (
        <Container>
            <ApiaryList />
        </Container>
    );
}