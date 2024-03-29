export const updateClass = (state, payload) => {
  let { classes } = state;
  const index = classes.findIndex((clasS) => clasS._id === payload._id);
  classes[index] = payload;
  return classes;
};

export const setAvailability = (state, payload) => {
  let { classes } = state;
  classes.forEach((item) => {
    let dataFilter = payload.filter(
      (payloadItem) => payloadItem.classId === item._id
    );
    dataFilter.forEach((d) => item.availability.push(d));
  });
  return classes;
};

export const updateAvailability = (state, payload) => {
  let { classes } = state;
  let classesObj = classes.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});
  let availabilityArr = classesObj[payload.classId].availability;
  let index = availabilityArr.findIndex((item) => item._id === payload._id);
  availabilityArr[index] = payload;
  return classes;
};

export const deleteAvailability = (state, payload) => {
  let { classes } = state;
  let classesObj = classes.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});

  let filterArr = classesObj[payload.classId].availability.filter(
    (item) => item._id !== payload.availabilityId
  );
  classesObj[payload.classId].availability = filterArr;
  return classes;
};

export const holyDaysTodisplay = (payload) => {
  let { items } = payload;
  let holyDays = [];
  items.forEach((item) => {
    let obj = {};
    obj.title = item.title;
    obj.date = item.date;
    obj.color = '#FDAD9B';
    obj.textColor = 'black';
    holyDays.push(obj);
  });
  return holyDays;
};

export const pushToSingle = (state, payload) => {
  let { singleClass } = state;
  Array.prototype.push.apply(singleClass.availability, payload);
  return singleClass;
};

export const updateSingle = (state, payload) => {
  let { singleClass } = state;
  let index = singleClass.availability.findIndex(
    (item) => item._id === payload._id
  );
  singleClass.availability[index] = payload;
  return singleClass;
};

export const deleteSingle = (state, payload) => {
  let { singleClass } = state;

  let filterArr = singleClass.availability.filter(
    (item) => item._id !== payload.availabilityId
  );
  singleClass.availability = filterArr;
  return singleClass;
};
