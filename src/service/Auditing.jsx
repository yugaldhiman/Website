import { useParams } from 'react-router-dom';

function Auditing() {
    const { id } = useParams();
    return <h1>Auditing  Service for ID: {id}</h1>;
}

export default Auditing;

