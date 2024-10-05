// pinataService.js
import axios from 'axios';

const PINATA_API_KEY = 'your_pinata_api_key';
const PINATA_SECRET_KEY = 'your_pinata_secret_key';

export const uploadToPinata = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let formData = new FormData();
  formData.append('file', file);

  try {
    const res = await axios.post(url, formData, {
      headers: {
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_SECRET_KEY,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error uploading file to Pinata', error);
    return null;
  }
};
