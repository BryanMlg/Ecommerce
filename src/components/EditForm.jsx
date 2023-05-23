import Style from '@style/EditForm.module.scss';
import React, { useState, useRef } from 'react';
import { addProduct, updateProduct } from '@services/api/products.services.api';
import { useRouter } from 'next/router';
export default function EditForm({ product }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const formRef = useRef(null);
  const router = useRouter();
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get('title'),
      price: parseInt(formData.get('price')),
      description: formData.get('description'),
      categoryId: parseInt(formData.get('category')),
      images: [formData.get('image').name],
    };

    if (product) {
      updateProduct(product?.id, data).then(() => {
        router.push('/dashboard/products/');
      });
    } else {
      addProduct(data)
        .then(() => {
          alert('product added');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  return (
    <form className={Style.FormContainer} ref={formRef} onSubmit={handleSubmit}>
      <div className={Style.Container}>
        {product?.id && <span>{`ID: ${product?.id}`}</span>}
        {product?.category && <span>{`Category: ${product?.category?.name}`}</span>}
        <div className={Style.ContainerTitlePrice}>
          <label htmlFor="title">Title</label>
          <input className={Style.Input} defaultValue={product?.title} id="title" name="title" type="text" />
          <label htmlFor="price">Price</label>
          <input className={Style.Input} defaultValue={product?.price} id="price" name="price" type="number" />
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
          <textarea defaultValue={product?.description} autoComplete="description" id="description" name="description" rows="3" />
        </div>
        <div className={Style.buttonContainer}>
          <button type="submit">Save</button>
          <label className={Style.UploadImage} htmlFor="Image">
            Upload Image
          </label>
          <input name="image" id="Image" type="file" accept="image/*" className={Style.Datos} required />
        </div>
      </div>
    </form>
  );
}
