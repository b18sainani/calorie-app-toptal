import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../shared/form-elements/input/Input';
import Button from '../shared/form-elements/button/Button'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/appActions';
const roles = ['User', 'Manager'].map((item, index) => ({ "key": index, "value": item }));
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('User');

    const handleOnSubmit = () => {
        const loginFormData = {
            email: email,
            password: password,
        };
        props.loginUser(loginFormData);
        setEmail('');
        setPassword('');
    }
    return (
        <React.Fragment><form onSubmit={handleOnSubmit}>
            <div className="neo-row justify-content-md-center">
                <Input type='email' title="email" value={email} changed={(e) => setEmail(e.target.value)} placeholder='Email ID*' />
            </div>
            <div className="neo-row justify-content-md-center">
                <Input type='password' title="password" value={password} changed={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
            <div className="neo-row justify-content-md-center">
                <Input type='dropdown' title="roles" value={selectedRole} options={roles} changed={(e) => setSelectedRole(e.target.value)} placeholder='Select Role' />
            </div>
            <div className="neo-row justify-content-center margin-top-20p">
                <Button type="submit" disabled={!email || !password || !selectedRole} customCssClass='btn-blue'>Login</Button>
            </div>

        </form>
            <div className="neo-row justify-content-md-center margin-top-20p">
                Not a member yet? <span onClick={props.handleSignUpClick} className="a-link margin-left-10p">Sign up</span></div>
        </React.Fragment>
    );
}

Login.propTypes = {
    loginUser: PropTypes.func,
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    loginUser: (data) => loginUser(data),
}
export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login)