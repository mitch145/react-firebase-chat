// This will come from firebase later on
const initialState = {
  messages: [
    {id: 0, name: 'Mitch', text: 'Hello World'},
    {id: 1, name: 'Mitch', text: 'What a nice day'},
    {id: 2, name: 'AI', text: 'Hello Mitch'},
    {id: 3, name: 'Mitch', text: 'How\'s it going?'},
    {id: 4, name: 'AI', text: 'Not too bad thanks, how about yourself?'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: action.id,
        name: action.name,
        text: action.text
      }
    default:
      return state
  }
}
