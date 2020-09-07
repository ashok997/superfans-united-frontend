export function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
}

export function login(credentials) {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
        }
      });
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/get_current_user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
        }
      });
  };
}
