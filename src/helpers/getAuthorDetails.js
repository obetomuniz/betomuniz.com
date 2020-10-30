const getAuthorDetails = (data) => {
  const dataModified = data.split(" - ");
  let name = "";
  let url = "";

  if (dataModified.length === 2) {
    name = dataModified[0];
    url = dataModified[1];
  }

  return {
    name,
    url,
  };
};

export default getAuthorDetails;
