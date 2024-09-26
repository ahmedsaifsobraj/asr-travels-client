import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handlePasswordVerification = e => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasLowerCase = /[a-z]/.test(newPassword);
        const isValidLength = newPassword.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !isValidLength) {
            setPasswordError('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.');
        } else {
            setPasswordError('');
        }
    };

    const handleGoogleSignIN = e => {
        e.preventDefault();
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const user = result.user; // Extract user information
                const email = user.email;
                const userData = { email };

                fetch('https://asr-travels-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
            })
            .catch(error => {
                console.error('Error during Google sign-in:', error.message);
            });
    };

    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !isValidLength) {
            setPasswordError('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.');
            return;
        }

        try {
            const userCredential = await createUser(email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            const userData = { email };
            const response = await fetch('https://asr-travels-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to create user on server');
            }

            console.log('User registered and data sent to server successfully.');
            Swal.fire({
                title: "Success",
                text: "Congratulations, your account has been successfuly created.",
                icon: "success"
              });
            navigate('/login');

        } catch (error) {
            console.error('Error during registration:', error.message);

            if (error.code === 'auth/email-already-in-use') {
                setPasswordError('This email address is already in use.');
            } else if (error.code === 'auth/invalid-email') {
                setPasswordError('The email address is not valid.');
            } else if (error.code === 'auth/weak-password') {
                setPasswordError('The password is too weak. Please choose a stronger password.');
            } else {
                setPasswordError('An error occurred during registration. Please try again.');
            }
        }
    };

    return (
        <div className="hero bg-base-100 min-h-screen flex flex-col justify-center items-center">
            <div className="text-center mt-5 mb-8">
                <h1 className="text-5xl font-bold text-teal-500">Create Account</h1>
            </div>
            <div className="card bg-base-200 w-full max-w-sm shadow-2xl mb-8 px-4 py-8">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handlePasswordVerification}
                            className="input input-bordered"
                            required
                        />
                        {passwordError && (
                            <p className="text-red-500 mt-2">{passwordError}</p>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-teal-500 text-white text-lg flex items-center justify-center"
                        >
                            Sign Up
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2"
                            />
                        </button>
                    </div>
                </form>

                <div className="divider">OR</div>
                <button
                    onClick={handleGoogleSignIN}
                    className="btn bg-teal-500 text-white text-lg m-4 flex items-center justify-center"
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        className="mr-2"
                    />
                    Sign In with Google
                </button>
                <p className="text-center my-4">
                    <small>
                        Already have an account?{' '}
                        <Link to="/login" className="text-teal-500 font-bold">
                            Sign In
                        </Link>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Register;
