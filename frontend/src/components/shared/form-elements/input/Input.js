/* global React */

const Input = (props) => {
    let formField = null;
    let customCssClass = [''];
    if (props.customCssClass) {
        customCssClass.push(props.customCssClass);
    } else {
        customCssClass.push('neo-input');
    }
    switch (props.type) {
        case 'textarea':
            formField = <textarea rows="2" className={customCssClass.join(' ')} onKeyPress={props.keyPressed} value={props.value} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled}></textarea>
            break;
        case 'number':
            formField = <input type="number" className={customCssClass.join(' ')} value={props.value} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled} />
            break;
            case 'email':
                formField = <input type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required className={customCssClass.join(' ')} value={props.value} onChange={props.changed} name={props.name}
                    placeholder={props.placeholder} disabled={props.disabled} />
                break;
        case 'radio':
            formField = <input type="radio" value={props.value} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled} checked={props.checked} />
            break;
        case 'checkbox':
            formField = <input type="checkbox" value={props.value} checked={props.checked} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled} />
            break;
        case 'password':
            formField = <input type="password" value={props.value} className={customCssClass.join(' ')} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled} />
            break;
            case 'file':
                formField = <input type="file" value={props.value} className={customCssClass.join(' ')} onChange={props.changed} name={props.name}
                    placeholder={props.placeholder} disabled={props.disabled} />
                break;
        case 'dropdown':
            formField = <select className={customCssClass.join(' ')} value={props.value} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled}>
                {
                    props.defaultSelected && <option>{props.defaultSelected}</option>
                }
                {
                    props.options && props.options.length > 0 && props.options.map(option => (
                        <option value={option.value} key={option.id}>{option.value}</option>
                    ))
                }
            </select>
            break;
        default:
            formField = <input type="text" className={customCssClass.join(' ')} value={props.value} onChange={props.changed} name={props.name}
                placeholder={props.placeholder} disabled={props.disabled} onBlur={props.onBlur} style={props.customStyle} />
            break;
    }
    return formField;
}
export default Input;