import React, { useState } from 'react'
import './SignupForm.css'
import { useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FormSubmit from './FormSubmit';
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'
import { useHistory } from 'react-router-dom';


function SignupForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = ({ fName, lName, email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
            history.replace("/menu");
          });
      })
      .catch((error) => alert(error.message));
  };

    return (

        <div className="signupForm"> 
            <div className="signupForm__container">
                <form  className="signupForm__form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="signupForm__section">Personal Information</h4>
                    <div className="signupForm__inputContainer">
                    <TextField 
                    label="First name" 
                    name="fName" 
                    type="text" 
                    InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                    InputProps={{ style: { fontWeight : "800"} }}
                    className="signupForm__input"
                    {...register("fName", {
                    required: "Required",
                    })}
                    />
                    {errors.fName && (
                    <div className="signupForm__error">
                      <CloseIcon fontSize="small" />
                      <span>Enter your first name</span>
                       <ReportProblemRoundedIcon
                          fontSize="small"
                          className="signupForm__reportIcon"
                          />
                    </div>
                     )}
                    </div>


                    <div className="signupForm__inputContainer">
                    <TextField 
                    label="Last name" 
                    name="lName" 
                    type="text" 
                    InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                    InputProps={{ style: { fontWeight : "800"} }}
                    className="signupForm__input"
                    {...register("lName", {
                    required: "Required",
                    })}
                    />
                    {errors.lName && (
                    <div className="signupForm__error">
                      <CloseIcon fontSize="small" />
                      <span>Enter your last name</span>
                       <ReportProblemRoundedIcon
                          fontSize="small"
                          className="signupForm__reportIcon"
                          />
                    </div>
                     )}
                    </div>
                    <h4 className="signupForm__section">Account Security</h4>
                    <div className="signupForm__inputContainer">
                    <TextField 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                    InputProps={{ style: { fontWeight : "800"} }}
                    className="signupForm__input"
                    {...register("email", {
                    required: "Required",
                    })}
                    />
                    {errors.email && (
                    <div className="signupForm__error">
                      <CloseIcon fontSize="small" />
                      <span>Please enter a valid email address</span>
                       <ReportProblemRoundedIcon
                          fontSize="small"
                          className="signupForm__reportIcon"
                          />
                    </div>
                     )}
                    </div>

                    <div className="signupForm__inputContainer">
                <TextField label="Password" 
                name="password" 
                type={passwordShown ? "text" : "password"} 
                InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                InputProps={{ style: { fontWeight : "800"} }}
                className="signupForm__input"
                {...register("password", {
                    required: "Required",
                  })}
                />

                {passwordShown ? (
                    <VisibilityOutlinedIcon
                    onClick={() => setPasswordShown(!passwordShown)}
                    className="signupForm__visibilityIcon"
                  />
                ):(
                    <VisibilityOffOutlinedIcon
                    onClick={() => setPasswordShown(!passwordShown)}
                    className="signupForm__visibilityIcon"
              />
                )}

                {errors.password && (
                    <div className="signupForm__error">
                      <CloseIcon fontSize="small" />
                      <span>Enter a password</span>
                       <ReportProblemRoundedIcon
                          fontSize="small"
                          className="signupForm__reportIcon"
                          />
                    </div>
                )}
                 </div> 

                 <h4 className="signupForm__rewards">COLLECT MORE STARS & EARN REWARDS</h4>
                 <span className="signupForm__span">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>
          <FormSubmit className="signupForm__button" name="Create account" type="submit" />

                </form>
            </div>
        </div>
    )
}

export default SignupForm
