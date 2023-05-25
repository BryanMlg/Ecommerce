import Style from '@style/EditForm.module.scss';
import React, { useState, useRef, useContext } from 'react';
import { addProduct, updateProduct } from '@services/api/products.services.api';
import { useRouter } from 'next/router';
import { ContextApp } from '@context/ContextApp';
import uploadImage from '@services/uploadFile';
import Image from 'next/image';
export default function EditForm({ item }) {
  const { toggleAlertNotification } = useContext(ContextApp);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get('title'),
      price: parseInt(formData.get('price')),
      description: formData.get('description'),
      categoryId: parseInt(formData.get('category')),
      images: [formData.get('image').name],
    };

    uploadImage(formData.get('image'))
      .then((res) => {
        if (item) {
          updateProduct(item.id, { ...data, images: [res.location] })
            .then(() => {
              router.push('/dashboard/products/');
            })
            .then(() => {
              toggleAlertNotification('Product Edited');
            });
        } else {
          addProduct({ ...data, images: [res.location] })
            .then(() => {
              toggleAlertNotification('Product Added');
            })
            .catch((error) => {
              toggleAlertNotification(error.message, true);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={Style.FormContainer} ref={formRef} onSubmit={handleSubmit}>
      <div className={Style.Container}>
        {item?.id && <span>{`ID: ${item?.id}`}</span>}
        {item?.category && <span>{`Category: ${item?.category?.name}`}</span>}
        <div className={Style.ContainerTitlePrice}>
          <label htmlFor="title">Title</label>
          <input className={Style.Input} defaultValue={item?.title} id="title" name="title" type="text" />
          <label htmlFor="price">Price</label>
          <input className={Style.Input} defaultValue={item?.price} id="price" name="price" type="number" />
        </div>
        <div className={Style.Categorys}>
          <label className={Style.Label} htmlFor="category">
            Category
          </label>
          <select autoComplete="category-name" id="category" name="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="1">Clothes</option>
            <option value="2">Electronics</option>
            <option value="3">Furniture</option>
            <option value="4">Shoes</option>
            <option value="5">Others</option>
          </select>
        </div>
        <div className={Style.TextDescription}>
          <label className={Style.Label} htmlFor="description">
            Description
          </label>
          <textarea defaultValue={item?.description} autoComplete="description" id="description" name="description" rows="3" />
        </div>
        <div className={Style.buttonContainer}>
          <button type="submit">Save</button>
          <label className={Style.UploadImage} htmlFor="Image">
            {selectedImage ? <Image className={Style.Image} src={selectedImage} alt="Selected" width={50} height={50} /> : 'Upload Image'}
          </label>
          <input onChange={handleFileChange} name="image" id="Image" type="file" accept="image/*" className={Style.Datos} required />
        </div>
      </div>
    </form>
  );
}
