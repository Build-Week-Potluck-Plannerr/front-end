export const initialState = {
  user: {
    username: "",
    name: "",
    password: "",
    isOrganizer: false,
  },
  eventDetails: {
    date: "",
    time: "",
    location: "",
  },
  items: {
    food: [],
    drink: [],
  },
  isLoading: false,
  error: "",
  success: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
