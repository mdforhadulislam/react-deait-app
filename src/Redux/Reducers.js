const initialState = [
  {
    id: Math.floor(Math.random() * new Date()),
    meals: "",
    days: {
      saturday: "20:00",
      sunday: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
    },
  },
  {
    id: Math.floor(Math.random() * new Date()),
    meals: "",
    days: {
      saturday: null,
      sunday: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
    },
  },
];

const Reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ROW": {
      const newObj = {
        id: Math.floor(Math.random() * new Date()),
        meals: "",
        days: {
          saturday: "",
          sunday: "",
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
        },
      };

      return [...state, newObj];
    }
    case "SET_TIME": {
      console.log(payload);
      const findItem = state.find((item) => item.id === payload.id);
      findItem.days = payload.days;
      return [...state];
    }

    default:
      return state;
  }
};

export default Reducers;
