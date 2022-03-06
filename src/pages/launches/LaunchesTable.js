import {Badge, Table} from "react-bootstrap";

import './style.css';

const LaunchesTable = ({launch}) => {
    return (
        <Table responsive="sm" className={'table-bordered table-hover'}>
            <thead className={'bg-dark text-light'}>
            <tr>
                <td>Mission success</td>
                <td>Flight Number</td>
                <td>Rocket name</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                {launch.launch_success ? (<td><Badge bg="success">Success</Badge></td>) : (
                    <td><Badge bg="danger">Failure</Badge>{' '}</td>)}
                <td>{launch.flight_number}</td>
                <td>{launch.rocket.rocket_name}</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default LaunchesTable;