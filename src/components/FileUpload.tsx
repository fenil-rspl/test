import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const file = ref(null);

    const handleFileChange = (event) => {
      file.value = event.target.files[0];
    };

    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', file.value);
      try {
        const response = await axios.post(`${process.env.VITE_API_URL}/upload/`, formData);
        alert(`File uploaded: ${response.data.info}`);
      } catch (error) {
        alert('Error uploading file');
      }
    };

    return { handleFileChange, handleUpload };
  }
});
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload/`, formData);
      alert(`File uploaded: ${response.data.info}`);
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;