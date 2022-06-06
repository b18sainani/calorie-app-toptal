import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.scss'
import Button from '../form-elements/button/Button';
import Dialog from '../Dialog';
import ModalContainer from '../../ModalContainer';

const Navigation = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [showAddMeal, setShowAddMeal] = useState(false);

    const [dialogTitle, setDialogTitle] = useState('');

    const handleOnAddMealClick=()=>{
        setShowAddMeal(true);
        setDialogTitle('Add your Food');
        setShowDialog(true);
    }
    return (
        <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' className="display-flex-space-between">
            <Navbar.Brand href="#home" className="margin-left-10p">My Fitness</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end margin-right-10p">
                <Nav className="mr-auto neo-col-lg-4">
                    <Nav.Link className="justify-content-center link-dark" href='/'>Home</Nav.Link>
                    <Button customCssClass="btn-dark" clicked={handleOnAddMealClick}>Add Food</Button>

                </Nav>
            </Navbar.Collapse>
            <Dialog visible={showDialog} title={dialogTitle} showFooter={false} btn1Value="Login" handleClose={() => setShowDialog(false)}>
                <ModalContainer showAddMeal={showAddMeal}/></Dialog>
        </Navbar>
    )

}

export default Navigation;