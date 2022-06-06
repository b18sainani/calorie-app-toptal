/* global React */

const Button = (props) => {
    let btnCssClass = ['']
    if(props.customCssClass) {
        btnCssClass.push(props.customCssClass);
    }
    let button = <button disabled={props.disabled} type={props.type} style={props.customBtnStyle} className={btnCssClass.join(' ')}
                 onClick={props.clicked}>{props.value} {props.children}</button>
    return button;
}
export default Button;