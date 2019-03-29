import axios from 'axios';

//crud
export const createEvent = (obj) => {
  axios
    .post('localhost:8000/api/events/create', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const getAllEvents = () => {
  axios
    .get('localhost:8000/api/events')
    .then(result => {events : result.data})
    .catch(err => console.log(err))
}

export const getOneEvent = (eventId) => {
  axios
    .get('localhost:8000/api/events/'+eventId)
    .then(result => {event : result.data})
    .catch(err => console.log(err))
}

export const editEvent = (obj) => {
  axios
    .put('localhost:8000/api/events/', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => {
  axios
  .delete('localhost:8000/api/events/'+eventId)
  // .then(this.props.history.push('/'))
  .catch(err => console.log(err))
}
