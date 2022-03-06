import {Badge, Table} from "react-bootstrap";

const LaunchesTable = ({launches}) => {
    return (
        <Table responsive="sm" className={'table-bordered table-hover'}>
            <thead className={'text-center bg-dark text-light'}>
            <tr>
                <th>Image</th>
                <th>Flight Number</th>
                <th>Mission name</th>
                <th>Mission year</th>
                <th>Mission success</th>
                <th>Rocket name</th>
            </tr>
            </thead>
            <tbody className={'text-center'}>
            {launches.map((value, index) => (
                <tr key={index}>
                    <td>
                        {value.links.mission_patch ? (
                            <img src={`${value.links.mission_patch}`} width={'30'}/>
                        ) : (
                            <Badge bg="dark">{value.rocket.rocket_type}</Badge>
                        )}
                    </td>
                    <td>{value.flight_number}</td>
                    <td>{value.mission_name}</td>
                    <td>{value.launch_year}</td>
                    {value.launch_success ? (<td><Badge bg="success">Success</Badge></td>) : (
                        <td><Badge bg="danger">Failure</Badge>{' '}</td>)}
                    <td>{value.rocket.rocket_name}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default LaunchesTable;