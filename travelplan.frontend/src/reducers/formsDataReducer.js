const initialState = {
  formsData: {
    firstName: 'Balakrishna',
    lastName: ''
  }
};
export default function reducer(stateParam = initialState, action) {
  let state = stateParam;
  switch (action.type) {
    case 'ADD_FORM': {
      state = {
        formsData: [
          ...state.formsData,
          {
            firstName: '',
            lastName: ''
          }
        ]
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
}
