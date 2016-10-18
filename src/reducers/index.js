// This will come from firebase later on
const initialState = {
  messages: [
    {id: 2, name: 'AI', text: 'Hello There'},
    {id: 4, name: 'AI', text: 'How\'s it going?'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: action.id,
            name: action.name,
            text: action.text
          }
        ]
      })
    default:
      return state
  }
}
