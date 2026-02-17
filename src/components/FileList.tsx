import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return () => (
      <ul>
        {props.files.map((file) => (
          <li key={file.id}>{file.filename}</li>
        ))}
      </ul>
    );
  }
});

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