
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './shared/form-elements/input/Input';
import Button from './shared/form-elements/button/Button'
import { addMeal } from '../redux/actions/appActions';
import { editMeal } from '../redux/actions/appActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';

const AddMeal = (props) => {
    const [foodName, setFoodName] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [calorie, setCalorie] = useState(0);
    const [hours, setHours] = useState(new Date());
    const [minutes, setMinutes] = useState(new Date());
   
    useEffect(() => {
        if (props.isEdit && props.mealDataToUpdate) {
            const { mealDataToUpdate } = props;
            setFoodName(mealDataToUpdate.model_name);
            setDateTime(mealDataToUpdate.meal_color);
            setCalorie(mealDataToUpdate.location);
        }
    }, [])

    const handleOnAddMealSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            food_name: foodName,
            date_time: dateTime,
            calorie: calorie,
        };
        props.addMeal(formData);
    }
    const handleOnEditMealSubmit = (e) => {
        e.preventDefault();
        const formData = {
            food_name: foodName,
            date_time: dateTime,
            calorie: calorie,
        };
        props.editMeal(props.mealDataToUpdate._id, formData);
    }


    return (
        <form onSubmit={handleOnAddMealSubmit}>
            <div className="neo-row justify-content-md-center">
                <div className="neo-col-lg-3"><label className="">Product Name: </label></div>
                <div className="neo-col-lg-9"><Input type='text' title="productName" value={foodName
                } changed={e => setFoodName(e.target.value)} placeholder='Enter food name*' /></div>
            </div>
            <div className="neo-row justify-content-md-center">
                <div className="neo-col-lg-3"><label className="">Date/ Time: </label></div>
                <div className="neo-col-lg-9 justify-content-start">
                            <DatePicker
                                selected={dateTime}
                                onChange={(date) => setDateTime(date)}
                                showTimeSelect
                                minTime={() => setHours(setMinutes(new Date(), 0), 17)}
                                maxTime={() => setHours(setMinutes(new Date(), 30), 20)}
                                placeholderText="Date..."
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                        </div>
            </div>
            <div className="neo-row justify-content-md-center">
                <div className="neo-col-lg-3"><label className="">Calorie: </label></div>
                <div className="neo-col-lg-9"><Input type='number' title="calorie" value={calorie} changed={e => setCalorie(e.target.value)} placeholder='Enter Calories*' /></div>
            </div>
            <div className="neo-row justify-content-center margin-top-20p">
                {!props.isEdit && (<Button type="submit" clicked={handleOnAddMealSubmit} disabled={ !foodName || !dateTime || !calorie } customCssClass='btn-blue btn-md'>Add </Button>)}
                {props.isEdit && (<Button type="submit" clicked={handleOnEditMealSubmit} customCssClass='btn-blue btn-md'>Update </Button>)}
            </div>
        </form>
    );
}

AddMeal.propTypes = {
    addMeal: PropTypes.func,
    editMeal: PropTypes.func,
    filteredInputText: PropTypes.string,
    successMessage: PropTypes.string
};

const mapStateToProps = state => ({
    filteredInputText: state.app.filteredInputText,
    successMessage: state.app.successMessage,
});
const mapDispatchToProps = {
    addMeal: (data) => addMeal(data),
    editMeal: (id, data) => editMeal(id, data),
}
export const AddMealContainer = connect(mapStateToProps, mapDispatchToProps)(AddMeal)
