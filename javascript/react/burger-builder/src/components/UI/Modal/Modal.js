import classes from './Modal.css';
import Aux from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';
import { useEffect } from 'react';

const Modal = (props) => {
    useEffect(() => {
        console.log('Modal update!');
    }, [props.show]);

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
}

export default Modal;