export function dateTimeCountrySpecify(countryGMT) {
  const date = new Date();
  const dataConvertCountry = `${date.toGMTString()}${countryGMT}`;
  const newDateCountry = new Date(dataConvertCountry);
  return newDateCountry;
}
export default {
  dateTimeCountrySpecify,
};
