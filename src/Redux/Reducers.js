const initialState = [
  {
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
  },
  {
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
  },
  {
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

    case "CHANGE_TIME": {
      const findItem = state.find((item) => item.id === payload.id);
      findItem.days = { ...findItem.days, ...payload.days };
      return [...state];
    }

    default:
      return state;
  }
};

export default Reducers;
