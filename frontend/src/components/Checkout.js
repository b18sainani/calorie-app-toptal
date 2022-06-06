
import React, { useState, useEffect } from 'react';
import Input from './shared/form-elements/input/Input';
import Button from './shared/form-elements/button/Button'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const Checkout = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [mealDetails, setMealDetails] = useState({});
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [hours, setHours] = useState(new Date());
    const [minutes, setMinutes] = useState(new Date());
    useEffect(() => {
        const { state } = props.location;
        if (state) {
            console.log("state...", state);
            setStartDate(moment(props.location.state.startDate).format('LLLL'));
            setEndDate(moment(props.location.state.endDate).format('LLLL'));
            setMealDetails(state.mealDetails);
        }

    }, [])
    const handleOnPayClick = () => {
        console.log("Payment Clicked")
    }
    return (
        <div className="page-body">
            <div className="neo-row">
                <div className="neo-col-lg-6 flex-text-center">
                    <Card style={{ width: '80%' }}>
                        <Card.Body>
                            <Card.Title className="neo-text-lg">{Object.keys(mealDetails).length > 0 ? mealDetails.model_name : ''}</Card.Title>

                            <Card.Text className="">
                                <div className="neo-row"><div className="mealImage"></div></div>
                                <div className="neo-row justify-content-flex-start"><div className="neo-text-md">PICKUP & RETURN LOCATION</div></div>
                                <div className="neo-row justify-content-flex-start"><div className="neo-text-sm">243-c Raja park, Adarsh Nagar, Jaipur, Rajasthan</div></div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="neo-col-lg-5 flex-text-center flex-direction-column">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Text>
                                <div className="neo-row border-bottom">
                                    <div className="neo-col-lg-6 neo-text-xs flex-text-center">{startDate ? startDate : ''}</div>
                                    <div className="neo-col-lg-6 neo-text-xs flex-text-center">{endDate ? endDate : ''}</div>
                                </div>
                                <div className="neo-row ">
                                    <div className="neo-text-lg">Pricing</div>
                                </div>
                                <div className="neo-row margin-top-35per border-bottom">
                                    <div className="neo-col-lg-6 neo-text-md flex-text-center">Total Amount</div>
                                    <div className="neo-col-lg-6 neo-text-md flex-text-center">2000/- INR</div>
                                </div>
                                <div className="neo-row display-flex-center-vertical">
                                    <Input type="checkbox" value={agreeChecked} checked={agreeChecked} changed={e => setAgreeChecked(e.target.checked)} />
                                    <Card.Link className=" neo-text-sm margin-left-10p">I agree to the terms and conditions</Card.Link>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="neo-row ">
                        <Button customCssClass="btn-blue btn-lg" disabled={!agreeChecked} clicked={handleOnPayClick}>Pay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    // filteredInputText: state.app.filteredInputText,
});

export const CheckoutContainer = connect(mapStateToProps)(Checkout)
