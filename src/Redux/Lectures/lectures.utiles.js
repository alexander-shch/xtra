export const deleteNote = (state, payload) => {
  let { lectures } = state;
  let lecturesObj = lectures.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});

  let filterNoteArr = lecturesObj[payload.lectureID].internalNotes.filter(
    (item) => item._id !== payload.noteID
  );
  lecturesObj[payload.lectureID].internalNotes = filterNoteArr;
  return lectures;
};

export const addNote = (state, payload) => {
  let { lectures } = state;
  let lecture = lectures.filter((item) => item._id === payload.lectureID);

  lecture[0].internalNotes.push(payload.data);
  return lectures;
};
