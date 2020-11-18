const getExtension = (filename) => {
  let parts = filename.split('.');
  return parts[parts.length - 1].toLowerCase();
};

export const isImage = (filename) => {
  let ext = getExtension(filename);
  if (ext === 'jpg' || ext === 'gif' || ext === 'png') {
    return true;
  } else {
    return false;
  }
};
