# React Native: undefined is not an object (evaluating 'this.state.variable')

This repository demonstrates a common React Native error: attempting to access a state variable or prop before it has been initialized. This often occurs during component mounting or when handling asynchronous data fetching.

## Bug

The `bug.js` file illustrates the issue.  It attempts to render a state variable ('data') before it's populated by an asynchronous call.

## Solution

The `bugSolution.js` file provides a corrected version using optional chaining and nullish coalescing (`??`) to handle the scenario where `data` might still be undefined.  It also demonstrates a more robust method to manage asynchronous data.   The solution uses the `useEffect` hook and conditional rendering to avoid rendering before data is ready.