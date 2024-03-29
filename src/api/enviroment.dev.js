const mountOptions = (url, method, params) => {
  const options = {
    method: method,
    url: url,
    params: { language: "en-US", page: "1", ...params },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };

  return options;
};

export default mountOptions;
