
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../shared/form-elements/input/Input';
import Button from '../shared/form-elements/button/Button'
import { registerUser } from '../../redux/actions/appActions';
import { connect } from 'react-redux';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleOnSubmit = () => {
        const formData = {
            name: username,
            password: password,
            password2: password2,
            email: email,
        };
       props.registerUser(formData);
    }

    return (
        <React.Fragment><form onSubmit={handleOnSubmit}>
            <div className="neo-row justify-content-md-center">
                <Input type='text' title="username" value={username} changed={(e) => setUsername(e.target.value)} placeholder='Username*' />
            </div>
            <div className="neo-row justify-content-md-center">
                <Input type='text' title="email" value={email} changed={(e) => setEmail(e.target.value)} placeholder='Email*' />
            </div>
            <div className="neo-row justify-content-md-center">
                <Input type='password' title="password" value={password} changed={(e) => setPassword(e.target.value)} placeholder='Password*' />
            </div>
            <div className="neo-row justify-content-md-center">
                <Input type='password' title="password2" value={password2} changed={(e) => setPassword2(e.target.value)} placeholder='Confirm Password*' />
            </div>
            <div className="neo-row justify-content-center margin-top-20p">
                <Button type="submit" disabled={!username || !email || !password} customCssClass='btn-blue'>Signup</Button>
            </div>

        </form>
            <div className="neo-row justify-content-md-center margin-top-20p">
                Already a member? <span onClick={props.handleOnLoginClick} className="a-link margin-left-10p">Login</span></div>
        </React.Fragment>
    );
}

Signup.propTypes = {
    registerUser: PropTypes.func,
};

const mapStateToProps = state => ({
    allMealsList: state.app.allMealsList,
});
const mapDispatchToProps = {
    registerUser: (data) => registerUser(data),
}
export const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup)