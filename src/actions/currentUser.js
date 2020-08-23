export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "tonystark", password: "secretword" }),
    });
  };
};
