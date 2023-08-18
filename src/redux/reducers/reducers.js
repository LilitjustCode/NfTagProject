const initialState = {
  open_touch_id_popup: false,
  close_touch_id_popup: false,
  stateName: '',
  open_delete_popup: false,
  open_close_popup: false,
  open_add_popup: false,
  allData: [],
  imageRes: [],
  storyImage: '',
};

function justDriveReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_TOUCH_ID':
      return {...state, open_touch_id_popup: true};
    case 'CLOSE_TOUCH_ID':
      return {...state, open_touch_id_popup: false};
    case 'STATE_FOR_PIN':
      return {...state, stateName: action.payload};
    case 'OPEN_DELETE_POPUP':
      return {...state, open_delete_popup: true};
    case 'CLOSE_DELETE_POPUP':
      return {...state, open_delete_popup: false};
    case 'OPEN_CLOSE_POPUP':
      return {...state, open_close_popup: true};
    case 'CLOSE_CLOSE_POPUP':
      return {...state, open_close_popup: false};
    case 'OPEN_ADD_POPUP':
      return {...state, open_add_popup: true};
    case 'CLOSE_ADD_POPUP':
      return {...state, open_add_popup: false};
    case 'GET_IMAGE_DATA':
      return {...state, imageRes: action.payload};
    case 'GET_STORY_IMAGE_DATA':
      return {...state, storyImage: action.payload};
    default:
      return state;
  }
}

export default justDriveReducer;
