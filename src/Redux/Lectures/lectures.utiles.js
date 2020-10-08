export const addNoteToSingleLecture = (state, payload) => {
  let { singleLecture } = state;
  debugger;
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
