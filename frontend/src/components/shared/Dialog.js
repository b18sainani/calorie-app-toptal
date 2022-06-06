import { Modal, Button } from 'react-bootstrap';

const Dialog = (props) => {
    return (<Modal show={props.visible} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title >{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        {props.showFooter && (<Modal.Footer>
            <Button variant="success" onClick={props.btn1Click}>
                {props.btn1Value}
            </Button>
        </Modal.Footer>)}
    </Modal>
    )
}
export default Dialog;