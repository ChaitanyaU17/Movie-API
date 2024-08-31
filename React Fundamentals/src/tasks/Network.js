import classes from './Network.module.css';
import { useNetwork } from '../custom hooks/useNetwork';

const Network = () => {
    const online = useNetwork();
    return (
        <div className={classes.mainContainer}>
            <h2 className={classes.title}>Check Internet</h2>
            <div className={classes.card}>
                <h4>You are {online ? 'online' : 'offline'}</h4>
            </div>
        </div>
    );
}
export default Network;