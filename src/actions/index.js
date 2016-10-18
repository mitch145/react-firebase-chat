let nextMessageId = 0;
export const addMessage = (name, text) => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId++,
  name,
  text
})
