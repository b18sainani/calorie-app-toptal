
import  { useState, useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import AgDataGrid from './shared/data-grid/AgDataGrid';
import Input from './shared/form-elements/input/Input';
import Button from './shared/form-elements/button/Button'
import { connect } from 'react-redux';
import { setFilterInputText, fetchAllMealsList, deleteMeal } from '../redux/actions/appActions';
import * as colDefs from '../mockData/colDefs'
import Dialog from './shared/Dialog';
import ModalContainer from './ModalContainer';
import { useHistory } from 'react-router';
import Loader from './shared/loader/Loader';


const MealsList = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [allMealData, setAllMealData] = useState([]);
    const [hours, setHours] = useState(new Date());
    const [minutes, setMinutes] = useState(new Date());
    const history = useHistory();
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [showAddMeal, setShowAddMeal] = useState(false);
    const [mealDataToUpdate, setMealDataToUpdate] = useState({});

    const { allMealsList } = props;
    const childRef = useRef();
    useEffect(() => {
        if (props.location && props.location.state) {
            setStartDate(props.location.state.startDate);
            setEndDate(props.location.state.endDate);
        }
        props.fetchAllMealsList();
    }, [])

    useEffect(() => {
        if (allMealsList) {
            setAllMealData(allMealsList);
        }
    }, [allMealsList])

    const handleOnFilterTextChange = e => {
        props.setFilterInputText(e.target.value);
        console.log(childRef.current)
        childRef.current.filterActionGrid(e.target.value);
    };
    const handleRightNowBtn = () => {
        // history.push('/mealsList', { startDate: startDate, endDate: endDate });
    }

    const deleteMeal = (mealId) => {

        props.deleteMeal(mealId);
    }
    const editMeal = (mealData) => {
        setShowDialog(true);
        setMealDataToUpdate(mealData);
        setDialogTitle("Edit Meal");
        setShowAddMeal(true);
    }
    const checkout = (mealData) => {
        history.push('/checkout', { startDate: startDate, endDate: endDate, mealDetails: mealData });
    }
    const context = { deleteMeal, editMeal, checkout };
    return (
        <div className="page-body">

            <div className="">
                <div className="neo-row flex-text-center ">
                    <div className="neo-col-lg-8 title-parent justify-content-center">
                    <div className="title">
                        Food List
                    </div>
                    </div>
                </div>
                <div className="neo-row">
                    <div className="neo-col-lg-10 neo-container" >
                        <div className="neo-col-lg-5 justify-content-start">
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
                        <div className="neo-col-lg-2 text-center"><Button clicked={handleRightNowBtn} customCssClass="btn-blue btn-md">Ride Now</Button></div>
                        <div className="neo-col-lg-5 justify-content-end">
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                showTimeSelect
                                minTime={() => setHours(setMinutes(new Date(), 0), 17)}
                                maxTime={() => setHours(setMinutes(new Date(), 30), 20)}
                                placeholderText="End Date..."
                                dateFormat="MMMM d, yyyy h:mm aa"
                            /></div>
    
                    </div>
                </div>
                <div className="neo-row">
                    <div className="neo-col-lg-10 neo-container justify-content-start" >
                        <div className="neo-col-lg-2 justify-content-end"><Input type="text" value={props.filteredInputText} changed={handleOnFilterTextChange} customCssClass="input-wrapper input-filer-lg" placeholder="Search Meal..." /></div>
                    </div>
                </div>
                {props.isGridDataLoading && <div className="neo-row"><Loader /></div>}
                {!props.isGridDataLoading && (<div className="neo-row"><div className="neo-col-lg-10 neo-container ag-theme-material display-flex-center" style={{ height: 400 }}>
                    <AgDataGrid
                        ref={childRef}
                        rowData={allMealData}
                        columnData={colDefs.MealsListColumns}
                        context={context}
                    />
                </div>
                </div>
                )}
                <Dialog visible={showDialog} title={dialogTitle} showFooter={false} btn1Value="Login" handleClose={() => setShowDialog(false)}>
                    <ModalContainer showAddMeal={showAddMeal} isEdit={true} mealDataToUpdate={mealDataToUpdate} /></Dialog>
            </div>
        </div>
    );
}

MealsList.propTypes = {
    filteredInputText: PropTypes.string,
    allMealsList: PropTypes.instanceOf(Array),
    isGridDataLoading: PropTypes.bool,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
    filteredInputText: state.app.filteredInputText,
    allMealsList: state.app.allMealsList,
    isGridDataLoading: state.app.isGridDataLoading,
    successMessage: state.app.successMessage,
    errorMessage: state.app.errorMessage,
});
const mapDispatchToProps = {
    setFilterInputText: (data) => setFilterInputText(data),
    fetchAllMealsList: () => fetchAllMealsList(),
    deleteMeal: (id) => deleteMeal(id),

}
export const MealsListContainer = connect(mapStateToProps, mapDispatchToProps)(MealsList)