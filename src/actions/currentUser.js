export function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
}
export function clearCurrentUser() {
  return {
    type: "CLEAR_CURRENT_USER",
  };
}
export function login(credentials) {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/login", {
      credetntials: "include",
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
      })
      .catch(console.log);
  };
}

export function logout() {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/logout", {
      credetntials: "include",
      method: "DELETE",
    }).then(dispatch(clearCurrentUser()));
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/get_current_user", {
      credetntials: "include",
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
      })
      .catch(console.log);
  };
}
