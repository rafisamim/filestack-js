const DEFAULT_CNAME = 'filestackapi.com';

const envGetter = (cname) => {
  return {
    picker: `https://static.${cname || DEFAULT_CNAME}/picker/v3/picker-0.10.8.js`,
  };
};

export default envGetter;
