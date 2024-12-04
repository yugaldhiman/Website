import { useParams } from 'react-router-dom';

function Accounting() {
    const { id } = useParams();
    return <>
        <h1>Accounting Service for ID: {id}</h1>
    </>;
}

export default Accounting;


