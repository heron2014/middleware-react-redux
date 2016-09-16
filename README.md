### middleware

### Cycle in react-redux apps

![flow](img-readme/flow.png)

### What is Middleware

**Middleware** sits between actions creators and reducers! Anything you want to do, you can do it in middleware.

Middleware will help resolve any action before it hits to reducers.

```js
//middleware pattern
export default function({ dispatch }) {
  return next => action => {
    // here we have all the actions which flows to our app
    console.log(action);

    //send it to another middleware if exist otherwise send it to reducers
    next(action);
  }
}

```
The object being 'destructured' ```({ dispatch })``` is actually the redux store object which also has the ```getState``` method on it. This is what makes middlewares so useful / powerful.

And, an easy way to see/understand the chain of functions is that, in the end, we just have a function with access to store (or dispatch on this case), the next middleware and the current action on its scope.


##### Middleware stack (example with some 3 middlewares)

![middleware](img-readme/middleware-stack.png)

### Handling actions via middleware

![middleware](img-readme/middleware-flow.png)

### Steps to remember:
1. Pass your middleware to the ```applyMiddleware``` []() at your top level file
2. If we have more than one middleware just pass them like this: ```applyMiddleware(Middleware1,Middleware2, Middleware3)(createStore)```
3. Depending on the action which flows to middleware either send to to next middleware or dispatch an action with the resolved promise (data) (DIAGRAM ABOVE)

### Reference
- ReduxReactSimpleStarter https://github.com/StephenGrider/ReduxSimpleStarter
- fake json api https://jsonplaceholder.typicode.com/
- axios
