import React, { FC, useState } from 'react';
import FhLogo from 'components/img/login-fh-logo.svg';

const LoginPage: FC = () => {
  const [isRegister, setIsRegister] = useState(true);
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className='flex flex-col items-center'>
      <div className='h-screen w-screen fixed bg-black bg-login-bg'>
        <div className='h-screen w-screen fixed backdrop-blur-3xl flex flex-col items-center'></div>
      </div>
      <form className='z-10 flex flex-col items-center mt-40 px-40 rounded-primary bg-dark-gray'>
        <img className='mb-16' src={FhLogo} alt='' />
        <div className='relative flex w-112 text-white mb-16 font-Open-Sans font-normal text-3xl leading-10'>
          <div className='absolute -bottom-2 w-full h-1px bg-login-switcher-gradient rounded-primary'></div>
          <div
            className={`absolute transition-transform -bottom-3.5 w-1/2 h-3.5 bg-login-switcher-gradient rounded-primary ${
              isRegister ? 'translate-x-full' : ''
            }`}></div>
          <div
            onClick={() => setIsRegister(false)}
            className='w-1/2 text-center pb-16px cursor-pointer'>
            Вход
          </div>
          <div
            onClick={() => setIsRegister(true)}
            className='w-1/2 text-center pb-16px cursor-pointer'>
            Регистрация
          </div>
        </div>
        <div className='flex flex-col items-center mb-20'>
          <input
            // value={login}
            // onChange={(e) => {
            //   setLogin(e.target.value);
            // }}
            type='text'
            placeholder='Введите логин'
            className='bg-transparent w-128 border-login-blue-1 border-2 rounded-primary font-Open-Sans text-tiny font-normal py-6 px-8 outline-none text-white mb-8'
            id='password'
          />
          {isRegister && (
            <input
              type='email'
              placeholder='Email'
              className='bg-transparent w-128 border-login-blue-1 border-2 rounded-primary font-Open-Sans text-tiny font-normal py-6 px-8 outline-none text-white mb-8'
              id='email'
            />
          )}
          <input
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            type='password'
            placeholder='Введите пароль'
            className='bg-transparent w-128 border-login-blue-1 border-2 rounded-primary font-Open-Sans text-tiny font-normal py-6 px-8 outline-none text-white mb-8'
            id='username'
          />
        </div>
        <button className='py-4 px-28 -mb-8 cursor-pointer text-white bg-gradient-to-r from-login-blue-1 to-login-blue-2 rounded-primary font-Mulish font-semibold text-2xl'>
          Вход
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
