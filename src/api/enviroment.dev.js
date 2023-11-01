const enviroment = {
  ApiToken: `Your Token`,
};

const mountOptions = (url, method, params) => {
  const options = {
    method: method,
    url: url,
    params: { language: "en-US", page: "1", ...params },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${enviroment.ApiToken}`,
    },
  };

  return options;
};

export default mountOptions;
