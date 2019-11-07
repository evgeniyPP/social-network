export const required = value => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength = num => value => {
  if (value && value.length > num) return "Max length is " + num;
  return undefined;
};
