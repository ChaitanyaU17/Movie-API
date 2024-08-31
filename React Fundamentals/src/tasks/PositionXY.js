
import { useSubscription } from '../custom hooks/useSubscription';
import classes  from './PositionXY.module.css';


const PositionXY = () => {
    const position = useSubscription();
    return(
        <div className={classes.mainContainer}>
            <h2 className={classes.title}>Subscription Hook</h2>
            <div className={classes.card}>
                <h4>X: {position.x} - Y: {position.y}</h4>
            </div>
        </div>
    );
};

export default PositionXY;