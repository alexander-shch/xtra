export const updateClass = (state, payload) => {
  let classes;
  const { classes: newClasses } = state;
  classes = [...newClasses];
  const index = newClasses.findIndex((clasS) => clasS._id === payload._id);
  classes[index] = payload;
  return classes;
};

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

export const deleteAvailability = (state, payload) => {
  let classes;
  const { classes: newClasses } = state;
  classes = [...newClasses];
  let classesObj = classes.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});

  let filterArr = classesObj[payload.classId].availability.filter(
    (item) => item._id !== payload.availabilityId
  );
  console.log(filterArr);
  classesObj[payload.classId].availability = filterArr;
  return classes;
};
// return [...currentCart, { ...itemToAdd, quantity: 1 }];

// {classId: "5f4bf072a71f815d80a675f7", availabilityId: "5f58d3b175428a3c9c2014ac"}

// let payload={classId:1,aId:2}

// let classes=[{id:1,a:[{aId:2,name:'yodan'}]}]

//   let classesObj = classes.reduce((acc, item) => {
//     acc[item.id] = item;
//     return acc;
//   }, {});

//   let theOne= classesObj[payload.classId].a
//   let filter=theOne.filter(item=>item.id===payload.aId)

// classesObj[payload.classId].a=filter

// console.log(classes)
