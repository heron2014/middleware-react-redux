export default function({ dispatch }) {
  return next => action => {
    console.log(action);
    // if action doesn not have payload
    // or the payload doesn not a property a .then property
    // we dont care about it, send it to the next middleware
    if(!action.payload || !action.payload.then) {
      return next(action)
    }
    //make sure the action's promise resolves
    console.log('We have a promise', action);
    action.payload
      .then(function(response) {
        //take every data that already exist and expand what ever response object contain
        // create new action with old type
        // replace the promise with the response data
        const newAction = {...action, payload: response };
        dispatch(newAction);
      });
  }
}

// above code is the same as es5
// return function(next) {
//   return function(action) {
//     console.log(action);
//     next(action)
//   }
// }
