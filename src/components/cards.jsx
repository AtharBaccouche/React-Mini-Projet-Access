import Data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Cards() {
    let totalAgents = Data.results.length;
    let activeAgents = Data.results.filter(agent => agent.status === "active").length;
    let DisconnectedAgent = Data.results.filter(agent => agent.status === "disconnected").length;
    let NeverConnectedAgent = Data.results.filter(agent => agent.status === "never_connected").length;
    let PendingAgent = Data.results.filter(agent => agent.status === "pending").length;
    return (
        <div>
            <div>
                <h4>Hello admin.</h4>
                <h4>View the status of your agents and the evolution of their latest alerts</h4>
                <div className="info">
                    <h2>Installed agents by their status</h2>
                </div>
            </div>
        <div className="styleCard">
            <div className="card">
                    <Card.Body>
                        <Card.Title className="Title">Total agents</Card.Title>
                        <Card.Text className="totalAgent">{totalAgents}</Card.Text>
                    </Card.Body>
            </div>
            <div className="card">
                    <Card.Body>
                        <Card.Title className="Title">Active agents</Card.Title>
                        <Card.Text className="activeAgent">{activeAgents}</Card.Text>
                    </Card.Body>
            </div>
            <div className="card">
                <Card.Body>
                    <Card.Title className="Title">Disconnected agents</Card.Title>
                    <Card.Text className="disconnectedAgent">{DisconnectedAgent}</Card.Text>
                </Card.Body>
            </div>
            <div className="card">
                <Card.Body>
                    <Card.Title className="Title" >Pending agents</Card.Title>
                    <Card.Text className="pendingAgent">{PendingAgent}</Card.Text>
                </Card.Body>
            </div>
            <div className="card">
                <Card.Body>
                    <Card.Title className="Title">Never connected agents</Card.Title>
                    <Card.Text className="neverConnected">{NeverConnectedAgent}</Card.Text>
                </Card.Body>
            </div>
        </div>
    </div>
);
}
export default Cards;