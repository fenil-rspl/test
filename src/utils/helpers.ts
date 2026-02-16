export const formatFileSize = (size) => {
  return size < 1024 ? `${size} bytes` : size < 1048576 ? `${(size / 1024).toFixed(2)} KB` : `${(size / 1048576).toFixed(2)} MB`;
};