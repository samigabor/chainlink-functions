const apiResponse = await Functions.makeHttpRequest({
  url: `https://swapi.info/api/people/1/`
});
if (apiResponse.error) {
  console.error(apiResponse.error);
  throw Error("Request failed");
}
console.log('API response data:', JSON.stringify(apiResponse.data, null, 2));
return Functions.encodeString(apiResponse.data.name);