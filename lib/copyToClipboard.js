const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
      window.alert('Copied to clipboard');
  }).catch(err => {
      console.error('Failed to copy: ', err);
  });
};

export default copyToClipboard;