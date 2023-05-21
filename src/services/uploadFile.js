import endPoints from '@services/api';

const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
  
    const config = {
      method: 'POST',
      body: formData,
      headers: {
        accept: '*/*',
      },
    };
  
    try {
      const response = await fetch(endPoints.files.addImage, config);
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export default uploadImage;
