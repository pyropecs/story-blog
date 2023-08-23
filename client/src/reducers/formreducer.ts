interface FormState {
  username: string;
  email: string;
  password: string;
}
interface action {
  type: string;
  field: string;
  payload: string;
}

export default function reducer(state: FormState, action: action) {
  switch (action.type) {
    case "text change":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}
