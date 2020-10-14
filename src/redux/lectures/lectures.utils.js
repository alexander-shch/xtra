export const addNoteToSingleLecture = (state, payload) => {
  let { singleLecture } = state;
  singleLecture.internalNotes.push(payload.data);
  return singleLecture;
};

export const deleteSingleNote = (state, payload) => {
  let { singleLecture } = state;
  let filterNotes = singleLecture.internalNotes.filter(
    (note) => note._id !== payload.noteID
  );
  singleLecture.internalNotes = filterNotes;
  return singleLecture;
};

export const deleteFile = (state, payload) => {
  console.log(payload);
  let { singleLecture } = state;
  let filterFile = singleLecture.files.filter(
    (file) => file._id !== payload.fileID
  );
  singleLecture.files = filterFile;
  return singleLecture;
};
