import React, { useEffect, useState } from 'react';
import { AddMealContainer } from './AddMeal';

const ModalContainer = (props) => {
    const [showAddMeal, setShowAddMeal] = useState(false);
    useEffect(
        () => {
            setShowAddMeal(props.showAddMeal);
        }, [props.showAddMeal]
    )
    return (
        <div>
            {showAddMeal && <AddMealContainer isEdit={props.isEdit} mealDataToUpdate={props.mealDataToUpdate} />}
        </div >
    );
}
export default ModalContainer;