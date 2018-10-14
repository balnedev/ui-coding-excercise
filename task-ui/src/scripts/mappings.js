const formatLabel = (field,value) => {
  let formattedText = null;
    switch (field) {
      case 'date': formattedText = new Date(value).toLocaleDateString(); break;
      default: formattedText = value;
    }
  return formattedText;
};

export default {formatLabel};