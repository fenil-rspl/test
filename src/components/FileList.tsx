import React from 'react';

const FileList = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file.id}>{file.filename}</li>
      ))}
    </ul>
  );
};

export default FileList;