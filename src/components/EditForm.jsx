import Style from '@style/EditForm.module.scss';
import React, { useState } from 'react';

export default function EditForm({ product }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <form className={Style.FormContainer}>
      <div className={Style.Container}>
        <span>{`ID: ${product?.id}`}</span> <span>{`Category: ${product?.category?.name}`}</span>
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
          <div className={Style.buttonContainer}>
            <button type="submit">Save</button>
          </div>
        </div>
        {/*<div className={Style.ImageContainer}>
          <label htmlFor="images" className={Style.Label}>
            <span>Upload a file</span>
            <input className={Style.Input} defaultValue={product?.images} id="images" name="images" type="file" />
          </label>
         </div>*/}
      </div>
    </form>
  );
}
