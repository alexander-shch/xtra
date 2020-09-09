export const setAvailabilty = (state, payload) => {
  let classes;
  const { classes: newClasses } = state;
  classes = [...newClasses];
  classes.forEach((item) => {
    let dataFilter = payload.filter(
      (payloadItem) => payloadItem.classId === item._id
    );
    dataFilter.forEach((d) => item.availability.push(d));
  });
  return classes;
};

export const updateAvailabilty = (state, payload) => {
  let classes;
  const { classes: newClasses } = state;
  classes = [...newClasses];
  let classesObj = classes.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});
  let availabilityArr = classesObj[payload.classId].availability;
  let index = availabilityArr.findIndex((item) => item._id === payload._id);
  availabilityArr[index] = payload;
  return classes;
};

export const updateClass = (state, payload) => {
  let classes;
  const { classes: newClasses } = state;
  classes = [...newClasses];
  const index = newClasses.findIndex((clasS) => clasS._id === payload._id);
  classes[index] = payload;
  return classes;
};
