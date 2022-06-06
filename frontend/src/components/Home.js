
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from './shared/form-elements/button/Button'
import {connect} from 'react-redux';
import {setFilterInputText} from '../redux/actions/appActions';
import { useHistory } from 'react-router';

const Home = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [hours, setHours] = useState(new Date());
    const [minutes, setMinutes] = useState(new Date());
    const history =useHistory();
    
    const handleRightNowBtn=()=>{
        history.push('/mealsList', { startDate: startDate, endDate: endDate });
    }
    return (
        <div className="page-body">
            <div className="search-container">
                <div className="neo-row flex-text-center">
                    <div className="title">
                        Rent Today, Own Tomorrow
                </div>
                </div>
                <div className="neo-row">
                <div className="neo-col-lg-3 text-center">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        minTime={() => setHours(setMinutes(new Date(), 0), 17)}
                        maxTime={() => setHours(setMinutes(new Date(), 30), 20)}
                        placeholderText="Start Date..."
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                    </div>
                    <div className="neo-col-lg-3 text-center">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        showTimeSelect
                        minTime={() => setHours(setMinutes(new Date(), 0), 17)}
                        maxTime={() => setHours(setMinutes(new Date(), 30), 20)}
                        placeholderText="End Date..."
                        dateFormat="MMMM d, yyyy h:mm aa"
                    /></div>
                      <div className="neo-col-lg-2 text-center"><Button  disabled={!startDate || !endDate}clicked={handleRightNowBtn} customCssClass="btn-blue btn-md">Ride Now</Button></div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps=state=>({
    filteredInputText: state.app.filteredInputText,
});
const mapDispatchToProps={
    setFilterInputText: (data)=> setFilterInputText(data),
}
export const HomeContainer= connect(mapStateToProps, mapDispatchToProps) (Home)
