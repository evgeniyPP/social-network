export const changeObjectPropInArrayById = (
  array,
  neededId,
  objId,
  changedPropsObj
) =>
  array.map(object => {
    return object[objId] === neededId
      ? { ...object, ...changedPropsObj }
      : object;
  });
