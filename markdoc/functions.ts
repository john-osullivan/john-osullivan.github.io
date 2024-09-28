/* Use this file to export your Markdoc functions */

export const includes = {
  transform<T>(parameters:T[]) {
    const [array, value] = Object.values(parameters);

    return Array.isArray(array) ? array.includes(value) : false;
  },
};

export const upper = {
  transform<T>(parameters:T[]) {
    const string = parameters[0];
    return typeof string === 'string' ? string.toUpperCase() : string;
  },
};
