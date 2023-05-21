import React from 'react';
import Style from '@style/CreateAccount.module.scss';
import { useState, useRef, useContext } from 'react';
import Image from 'next/image';
import { authContext } from '@context/ContextApp';
import Router from 'next/router';
import uploadImage from '@services/uploadFile';
import Alert from '@components/Alert';
import NoUser from '@assets/NoUser.svg';
export default function CreateAccount() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [Error, setError] = useState('');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const form = useRef(null);
  const auth = useContext(authContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
      image: [formData.get('image').name],
    };
    if (!data.username || !data.name || !data.password) {
      setError('Please enter all your information');
    } else {
      uploadImage(formData.get('image'))
        .then((res) => {
          auth.signUp(data.username, data.name, data.password, res.location);
          console.log(data);
          Router.push('/');
        })
        .catch((error) => {
          console.log(data);
          console.log(error);
        });
    }
  };

  return (
    <div className={Style['Main-Container']}>
      <div className={Style.Container}>
        <h1 className={Style.Titulo}>Create Account</h1>
        <form action="/" ref={form}>
          <label className={Style.FormLabel} htmlFor="Name">
            Name
          </label>
          <input name="name" id="Nombre" type="text" placeholder="Enter your name" className={Style.Datos} required />
          <label className={Style.FormLabel} htmlFor="Email">
            Email
          </label>
          <input name="email" id="Email" type="email" placeholder="Enter your email" className={Style.Datos} required />
          <label className={Style.FormLabel} htmlFor="Password">
            Password
          </label>
          <input name="password" id="Password" type="password" placeholder="******" className={Style.Datos} required />
          <label className={Style.UserAvatarUpload} htmlFor="Image">
            {selectedImage ? 'Avatar uploaded' : 'Upload avatar'}
          </label>
          <input name="image" id="Image" type="file" accept="image/*" className={Style.DatosInput} onChange={handleFileChange} required />
          {selectedImage ? (
            <Image className={Style.ImageAvatar} src={selectedImage} alt="Selected" width={50} height={50} />
          ) : (
            <Image className={Style.ImageAvatar} src={NoUser} alt="Selected" width={50} height={50} />
          )}
          <button className={Style['primary-button']} onClick={HandleSubmit}>
            Register
          </button>
        </form>
        {Error && <Alert Message={Error} isErrorLogin={true} />}
      </div>
    </div>
  );
}
