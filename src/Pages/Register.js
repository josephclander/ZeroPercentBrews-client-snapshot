import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Components/Core/Hero';
import ButtonPrimary from '../Components/Core/ButtonPrimary';
import styles from './Access.module.css';
import { useAuth } from '../Auth/AuthContext';

const Register = () => {
  const { setTokens, setIsLoggedIn } = useAuth();
  const [error, setError] = useState('');

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(
      'https://zero-percent-brews-api.onrender.com/api/user/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          username: userData.username,
          password: userData.password,
        }),
      }
    );

    if (response.status === 200) {
      let data = await response.json();

      setTokens(data);
      setIsLoggedIn(true);

      navigate('/');
    } else {
      let data = await response.json();
      console.log(data.error);
      setError(data.error);
      navigate('/register');
    }
  };

  return (
    <>
      <Hero message_1={'Join the lager'} message_2={'than life community'} />
      <form className={styles.log_reg_form}>
        <label>
          Username
          <input
            type='text'
            name='username'
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <ButtonPrimary text={'Sign Up'} onClick={handleSubmit} />
        {error && <p className={styles.error_message}>{error}</p>}
      </form>

    </>
  );
};

export default Register;
