import React from 'react';
import PropTypes from 'prop-types';
import './Renderers.scss';
import Button from '../form-elements/button/Button'
import ReactStars from "react-rating-stars-component";
const ClickableButtonsRenderer = (props) => {
  const openDialog = (actionName) => {
    switch (actionName) {
      case 'book':
        props.context.checkout(props.data);
        break;
      case 'edit':
        props.context.editMeal(props.data);
        break;
      case 'delete':
        props.context.deleteMeal(props.data._id);
        break;
      default:
        break;
    }
  }

  const renderInfoIcon = (props) => {
    if (props.colDef.field === 'actions') {
      return (
        <div className="gridClickableDiv neo-col-lg-12 padding-0p">
          <div className="neo-col-lg-4 padding-0p"><Button customCssClass="btn-blue margin-rl-0p" clicked={() => openDialog('book')}>Book</Button></div>
          <div className="neo-col-lg-4 padding-0p"><Button customCssClass="btn-blue margin-rl-0p" clicked={() => openDialog('edit')}>Edit</Button></div>
          <div className="neo-col-lg-4 padding-0p"><Button customCssClass="btn-blue margin-rl-0p" clicked={() => openDialog('delete')}>Delete</Button></div>
        </div>)
    }
    else if (props.colDef.field === 'rating') {
      return (
        <div className="gridClickableDiv">

          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={props.data.rating}
            activeColor="#ffd700"
          />

        </div >)
    }
    else if (props.colDef.field === 'isAvailable') {
      return (
        <div className="gridClickableDiv">
          <div className="neo-col-lg-1"><i className={props.data.isAvailable ? "fa fa-check-circle" : "fa fa-check-circle not-available"}></i>  </div>
        </div>)
    }
  };

  let renderItem;
  if (props.data) {
    renderItem = renderInfoIcon(props);
    return <React.Fragment>{renderItem}</React.Fragment>;
  }
}
ClickableButtonsRenderer.propTypes = () => ({
  data: PropTypes.instanceOf(Object),
  value: PropTypes.string,
})
export default ClickableButtonsRenderer;