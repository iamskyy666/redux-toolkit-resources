# What is Redux Toolkit? ⚛️💜

**Redux Toolkit (RTK)** is the **official, recommended way** to write Redux logic.

It is built on top of **Redux Toolkit**, which itself is built on top of **Redux**.

Redux Toolkit simplifies Redux.

That’s it.

Redux Toolkit = Modern, cleaner, safer Redux.

---

# First: What Problem Was Redux Solving?

In React, state is usually local to a component:

```js
const [count, setCount] = useState(0)
```

That’s fine for small apps.

But in large apps (like our MERN e-commerce or prescripto project), problems appear:

* Many components need the same data
* Passing props deeply becomes messy (prop drilling)
* API data needs to be shared globally
* Complex state logic becomes hard to manage

Redux was created to solve:

✔ Global state management
✔ Predictable state updates
✔ Debuggable state changes
✔ Centralized data control

---

# But Here’s The Truth…

Classic Redux was painful.

To create ONE feature we needed:

* Action types
* Action creators
* Reducers
* Switch statements
* Store setup
* Middleware setup
* Immutable updates manually

Too much boilerplate.

For beginners (and even pros), it felt heavy.

That’s why Redux Toolkit was created.

---

# Why Do We Need Redux Toolkit in React?

Redux Toolkit solves 5 major problems:

---

## 1️⃣ It Removes Boilerplate

Old Redux:

```js
const INCREMENT = "INCREMENT"

function increment() {
  return { type: INCREMENT }
}
```

Redux Toolkit:

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1
  }
})
```

Cleaner. Shorter. Smarter.

---

## 2️⃣ It Automatically Handles Immutability

In normal Redux:

```js
return {
  ...state,
  count: state.count + 1
}
```

In Redux Toolkit:

```js
state.count += 1
```

Wait… that looks like mutation 🤯

Yes. But internally it uses **Immer**.

Immer converts our "mutating" code into safe immutable updates.

So we write simpler code — but state stays immutable.

---

## 3️⃣ It Makes Async Logic Easier

In old Redux, handling APIs required middleware like **Redux Thunk** manually.

Redux Toolkit gives us:

```js
createAsyncThunk()
```

This automatically generates:

* pending
* fulfilled
* rejected

action types.
---

## 4️⃣ It Sets Up the Store Correctly by Default

With:

```js
configureStore()
```

It automatically:

* Adds Redux DevTools
* Adds thunk middleware
* Sets good defaults

Less configuration mistakes.

---

## 5️⃣ It Encourages Better Folder Structure

Redux Toolkit promotes:

> Feature-based structure (slice per feature)

Instead of separating:

* actions
* reducers
* constants

We group logic by feature.

That scales better.

And we care about scalable apps.

---

# So When Do We Actually Need Redux Toolkit?

Let's be honest with ourselves.

We DON’T need it for:

* Small apps
* Forms
* Simple state
* 2–3 components sharing data

We DO need it for:

* Large apps
* Authentication systems
* Cart systems (e-commerce)
* Booking systems
* Role-based dashboards
* Complex async flows
* When many components depend on the same state

Redux Toolkit makes sense.

---

# How Redux Toolkit Fits into React

Flow:

1. Component dispatches action
2. Redux Toolkit reducer updates state
3. Store updates
4. Components re-render

React handles UI.
Redux Toolkit handles global state logic.

Clean separation of concerns.

---

# Important: Redux Toolkit vs Context API

We might ask:

> Why not just use React Context?

Context is fine for:

* Theme
* Auth user
* Language

But for large complex state with async flows?

Redux Toolkit wins because:

* DevTools debugging
* Middleware support
* Structured architecture
* Predictable state updates

---

# Now Let's Learn a Bit

Since we're trying to become strong in:

* MERN
* TypeScript
* Advanced React
* Possibly moving to Germany or Sweden

We cannot avoid Redux Toolkit.

Most serious React job listings expect:

* Redux Toolkit
* Async handling
* Middleware understanding
* State normalization

If we want to compete internationally, we don’t skip this.

---

# Simple Summary

Redux Toolkit is:

> A powerful, modern way to manage global state in React applications with less code and better structure.

We need it when:

> Our application grows beyond simple local state management.

---

If we truly want to master Redux Toolkit — we must deeply understand two things:

1. `createSlice`
2. The `store`

These two are the backbone of everything.

---

# 1️⃣ What is `createSlice`?

`createSlice` is a function from Redux Toolkit that lets us define:

* The initial state
* The reducers (state-changing logic)
* The generated action creators

All in one place.

Before Redux Toolkit, we had to write:

* Action types
* Action creators
* Reducers
* Switch statements

Now everything is grouped into one “slice”.

Think of a slice as:

> One logical piece of our global state + all the logic that controls it.

Example mental model:

* auth slice → handles login/logout/user
* cart slice → handles cart items
* doctor slice → handles doctor data
* appointment slice → handles bookings

Each slice controls only its own domain.

---

## Basic Structure of `createSlice`

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Now let’s break this down properly.

---

## 🔹 1. `name`

```js
name: "counter"
```

This is:

* The slice name
* Used as a prefix for generated action types

Example:
If reducer name is `increment`, action type becomes:

```
counter/increment
```

This keeps action types unique automatically.

---

## 🔹 2. `initialState`

```js
initialState: { value: 0 }
```

This is the starting state for that slice.

Important concept:

Redux state must always have a defined initial value.

For example:

```js
initialState: {
  user: null,
  isLoading: false,
  error: null
}
```

This is how we structure production-ready state.

---

## 🔹 3. `reducers`

This is the heart.

```js
reducers: {
  increment: (state) => {
    state.value += 1;
  }
}
```

Each function inside:

* Is a reducer
* Receives `state`
* Receives `action`
* Updates state

Now here’s the magic.

We are mutating:

```js
state.value += 1
```

But Redux requires immutability.

How is this allowed?

Because Redux Toolkit uses Immer internally.

Immer tracks changes and produces a new immutable state behind the scenes.

So we write simple code.
Redux keeps immutability safe.

That’s huge.

---

## 🔹 What Does `createSlice` Actually Return?

It returns an object with:

1. `actions`
2. `reducer`

We export:

```js
counterSlice.actions
counterSlice.reducer
```

* `actions` → used in components with `dispatch`
* `reducer` → given to the store

---

# 2️⃣ What is the Store?

The store is:

> The central container that holds our entire global state.

There is only ONE store in a Redux application.

Think of it as the brain of our app.

---

## Creating the Store

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

Now let’s break this down.

---

## 🔹 `configureStore`

This replaces old `createStore`.

It automatically:

* Adds Redux DevTools
* Adds thunk middleware
* Enables good defaults
* Handles combining reducers

Cleaner. Safer. Modern.

---

## 🔹 reducer object

```js
reducer: {
  counter: counterReducer
}
```

Here we combine slices.

If we had:

* authSlice
* cartSlice
* doctorSlice

It would look like:

```js
reducer: {
  auth: authReducer,
  cart: cartReducer,
  doctor: doctorReducer
}
```

Now our global state shape becomes:

```js
{
  auth: { ... },
  cart: { ... },
  doctor: { ... }
}
```

That structure is defined here.

---

# 🔥 How Everything Connects

Flow:

1. Component calls `dispatch(increment())`
2. Action goes to store
3. Store forwards it to the correct slice reducer
4. Reducer updates state
5. Store saves new state
6. Components using `useSelector` re-render

Predictable. Centralized. Debuggable.

---

# How React Connects to the Store

In `main.jsx`:

```js
import { Provider } from "react-redux";
import store from "./store";

<Provider store={store}>
  <App />
</Provider>
```

`Provider` makes the store available to all components.

Then inside components:

```js
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
```

That’s how UI talks to the global brain.

---

# Important Concept: Single Source of Truth

The store is the single source of truth.

No component directly changes global state.

Everything must go through:

dispatch → reducer → store

This makes state predictable.

---

If `createSlice` builds logic
and the `store` holds global state

then **`useSelector` and `useDispatch` are how our components talk to that system.**

Without them, React cannot interact with Redux.

---

# Big Picture First

In a Redux Toolkit + React app:

* `useDispatch()` → sends actions to the store
* `useSelector()` → reads data from the store

That’s it conceptually.

But internally, there’s much more happening.

---

# 1️⃣ What is `useDispatch`?

`useDispatch` is a hook from **React Redux**.

It gives us access to the `dispatch` function from the Redux store.

### What is dispatch?

`dispatch` is the only way we can trigger state changes in Redux.

Nothing changes in Redux unless we dispatch an action.

---

## Basic Example

```js
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>
  );
};
```

What’s happening here?

1. We call `increment()` → this creates an action object
2. We pass that action to `dispatch`
3. The store sends it to the reducer
4. Reducer updates state
5. Store notifies subscribers
6. UI re-renders

---

## What Does `increment()` Actually Return?

Behind the scenes:

```js
{
  type: "counter/increment"
}
```

If we pass data:

```js
dispatch(incrementByAmount(5))
```

The action becomes:

```js
{
  type: "counter/incrementByAmount",
  payload: 5
}
```

`dispatch` simply forwards this to the store.

---

## Important: Dispatch Can Handle Async Too

With Redux Toolkit’s `createAsyncThunk`, we can do:

```js
dispatch(fetchDoctors())
```

Even though it’s async.

That works because Redux Toolkit includes thunk middleware automatically via `configureStore`.

So `dispatch` is not just for plain objects anymore — it can handle async functions.

That’s powerful.

---

# 2️⃣ What is `useSelector`?

If `dispatch` sends data,

`useSelector` reads data.

It lets our component subscribe to the Redux store.

---

## Basic Example

```js
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return <h1>{count}</h1>;
};
```

Now let’s break that down carefully.

---

## What is `state` here?

`state` is the entire Redux store state.

If our store was:

```js
configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})
```

Then global state looks like:

```js
{
  counter: { value: 10 },
  auth: { user: null }
}
```

So inside `useSelector`, we receive that entire object.

We must return the specific part we need:

```js
state.counter.value
```

---

## Very Important Concept: Subscription

When we use:

```js
useSelector(...)
```

React Redux subscribes that component to the store.

Whenever the selected value changes:

→ The component re-renders.

If the selected value does NOT change:

→ No re-render.

That’s efficient.

---

## How Does It Know If It Changed?

`useSelector` uses strict equality (`===`) comparison.

If previous selected value !== new selected value
→ Re-render

If equal
→ No re-render

That’s why we must be careful not to create new objects unnecessarily.

Example of bad practice:

```js
useSelector(state => {
  return { count: state.counter.value }
})
```

This creates a new object every render → always re-renders.

Better:

```js
useSelector(state => state.counter.value)
```

Return primitive or memoized values.

---

# How `useSelector` and `useDispatch` Work Together

Typical flow:

```js
const dispatch = useDispatch()
const user = useSelector(state => state.auth.user)
```

When we click login:

```js
dispatch(loginUser(data))
```

Reducer updates `auth.user`.

Since `user` changed → component re-renders.

Clean loop.

---

# Deep Mental Model

Think of the store as:

🧠 Central brain

Reducers as:

⚙️ Rules for changing memory

Dispatch as:

📢 Sending commands to the brain

useSelector as:

👀 Watching specific memory cells

---

# Performance Considerations (Advanced)

As our app grows (like our e-commerce or booking system):

* Many components use `useSelector`
* Many dispatch actions

To keep performance strong:

1. Select only what we need
2. Avoid selecting entire objects
3. Split large slices into smaller ones if needed
4. Use memoized selectors for derived data (we can explore reselect later)

---

# Common Beginner Mistakes

Since we’re serious about mastering this:

❌ Trying to mutate state directly in components
❌ Selecting entire slice when only one field is needed
❌ Dispatching inside render (never do this)
❌ Forgetting Provider around App

---

# How This Applies to Our Real Projects

In our prescripto project:

* `useSelector` → read doctors, appointments, user data
* `useDispatch` → book appointment, login, update availability

In our e-commerce:

* `useSelector` → cart items, total price
* `useDispatch` → add to cart, remove from cart, checkout

These hooks are the bridge between UI and global state.

Mastering them is non-negotiable if we want to operate at production level.

---

If we don’t understand `dispatch`, we don’t understand Redux. Everything revolves around it.

Let’s break this down properly.

---

# What is `dispatch` in Redux Toolkit?

`dispatch` is a function provided by the Redux store.

Its job is simple:

> Send an action to the store so the state can be updated.

No dispatch → no state change.
Redux state **cannot change directly**. Ever.

---

# The Core Rule of Redux

State updates must follow this pipeline:

```
Component → dispatch(action) → reducer → new state → re-render
```

`dispatch` is the entry gate.

---

# What Exactly Is an Action?

An action is just a plain JavaScript object:

```js
{
  type: "counter/increment"
}
```

Or with data:

```js
{
  type: "counter/incrementByAmount",
  payload: 5
}
```

Redux Toolkit’s `createSlice` automatically creates these action objects for us.

So when we write:

```js
dispatch(increment())
```

We are actually sending:

```js
{
  type: "counter/increment"
}
```

to the store.

---

# What Happens Internally When We Dispatch?

Let’s go step by step.

### 1️⃣ We call dispatch

```js
dispatch(increment())
```

---

### 2️⃣ Store receives the action

The store looks at:

```
action.type
```

Example:

```
counter/increment
```

---

### 3️⃣ Store finds the correct reducer

In `configureStore` we registered:

```js
reducer: {
  counter: counterReducer
}
```

So the store sends the action to `counterReducer`.

---

### 4️⃣ Reducer runs

Inside the slice:

```js
increment: (state) => {
  state.value += 1
}
```

Redux Toolkit uses Immer to safely produce a new immutable state.

---

### 5️⃣ Store updates its state

The store replaces old state with the new state.

---

### 6️⃣ Store notifies subscribers

All components using `useSelector` are notified.

If their selected value changed → they re-render.

That’s the full lifecycle.

---

# Dispatch in Redux Toolkit vs Old Redux

In classic **Redux**, `dispatch` could only handle plain objects.

But in Redux Toolkit (via `configureStore`), thunk middleware is automatically added.

This means `dispatch` can also handle:

* Functions (thunks)
* Async actions

So dispatch is more powerful by default.

---

# Dispatching With Payload

Example:

```js
dispatch(addToCart(product))
```

If reducer is:

```js
addToCart: (state, action) => {
  state.items.push(action.payload)
}
```

Then:

* `action.payload` = product
* Reducer updates cart

Dispatch always carries the action object.

---

# Dispatching Async Logic (Very Important)

With `createAsyncThunk`:

```js
dispatch(fetchDoctors())
```

What happens?

Redux Toolkit automatically dispatches 3 actions:

1. `fetchDoctors/pending`
2. `fetchDoctors/fulfilled`
3. `fetchDoctors/rejected`

Dispatch handles all of that behind the scenes.

So `dispatch` isn’t just sending one action — it can trigger a chain of actions.

That’s powerful for:

* API calls
* Authentication
* Booking systems
* Payment flows

---

# Dispatch Is Synchronous by Default

Normal reducers run synchronously.

Meaning:

```js
dispatch(increment())
```

State updates immediately.

But async thunks introduce asynchronous behavior through middleware.

---

# Where Does Dispatch Come From?

We get it from:

```js
import { useDispatch } from "react-redux"
```

React Redux connects our React app to the store.

We can also access it directly:

```js
store.dispatch(increment())
```

But in React components, we use `useDispatch()`.

---

# Important Mental Model

Dispatch does NOT change state.

Dispatch only sends a message.

Reducers are the only place where state changes happen.

This separation makes Redux predictable and debuggable.

---

# Common Mistakes We Must Avoid

❌ Calling dispatch inside render
❌ Trying to modify state directly without dispatch
❌ Dispatching unnecessary actions
❌ Overusing Redux for local state

We use dispatch only when global state must change.

---

# Real-World Example From Our Projects

In our e-commerce app:

* `dispatch(addToCart(item))`
* `dispatch(removeFromCart(id))`
* `dispatch(checkout())`

In prescripto:

* `dispatch(loginUser(data))`
* `dispatch(bookAppointment(slot))`

Dispatch is how UI tells global state what to do.

---

# Final Clear Definition

Dispatch is:

> The function that sends actions to the Redux store so reducers can calculate and return a new state.

It is the single gateway for all state changes in Redux Toolkit.

---

Now we’re stepping into **middleware**, which is where Redux becomes powerful instead of just structured.

Let’s break down **loggerMiddleware** properly.

---

# First — What Is Middleware in Redux?

Middleware sits **between dispatch and reducer**.

Normal flow:

```text
Component → dispatch(action) → reducer → new state
```

With middleware:

```text
Component → dispatch(action)
        → middleware
        → reducer
        → new state
```

Middleware can:

* Log actions
* Modify actions
* Stop actions
* Handle async logic
* Trigger side effects

Middleware intercepts actions before they reach reducers.

---

# What Is loggerMiddleware?

Logger middleware is a function that logs:

* The action being dispatched
* The previous state
* The next state

It is mainly used for debugging.

There’s a popular package called **redux-logger** that does this automatically.

But we can also write our own logger middleware manually.

---

# Middleware Function Structure (Important)

Middleware has a specific shape.

It looks complicated at first:

```js id="a9v41q"
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Previous State:", store.getState());
  console.log("Action:", action);

  const result = next(action);

  console.log("Next State:", store.getState());

  return result;
};
```

Now let’s break that down slowly.

---

# Why So Many Arrow Functions?

Middleware is a chain of functions:

```js id="r3ke2z"
(store) => (next) => (action)
```

Each part has a role.

---

## 1️⃣ `store`

```js id="x92j8k"
(store)
```

This gives access to:

* `store.getState()`
* `store.dispatch()`

We use this to read current state.

---

## 2️⃣ `next`

```js id="c0d7pt"
(next)
```

`next` is the function that passes the action to the next middleware.

If there is no next middleware, it goes to the reducer.

If we don’t call `next(action)` → the action never reaches reducer.

Very important.

---

## 3️⃣ `action`

```js id="9x1lmc"
(action)
```

This is the dispatched action object.

Example:

```js id="m3l7q2"
{
  type: "cart/addToCart",
  payload: { id: 1 }
}
```

---

# What Happens Inside Logger Middleware?

Step by step:

1. We log previous state
2. We log the action
3. We call `next(action)` → send action forward
4. Reducer runs
5. State updates
6. We log new state

This helps us track:

* What triggered state change
* How state changed
* Debug unexpected behavior

---

# How We Add Logger Middleware in Redux Toolkit

Redux Toolkit uses `configureStore`.

Example:

```js id="z3ytw7"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Prev State:", store.getState());
  console.log("Action:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});

export default store;
```

Important:

`getDefaultMiddleware()` keeps Redux Toolkit’s built-in middleware (like thunk).

Then we add ours using `.concat()`.

If we replace middleware completely, we might break async functionality.

---

# Why Logger Middleware Is Useful

In real projects like:

* E-commerce cart bugs
* Authentication issues
* Appointment booking problems

Sometimes state changes unexpectedly.

Logger middleware shows:

* Which action caused it
* What state was before
* What state became after

It gives clarity.

---

# Difference Between Logger and DevTools

Redux DevTools already shows:

* Actions
* State history
* Time travel debugging

So why logger?

Logger is:

* Lightweight
* Console-based
* Useful in environments where DevTools isn’t available

But in most cases, DevTools is more powerful.

---

# How Middleware Chain Works (Advanced Concept)

If we have:

```js id="yq2k5n"
middleware: [logger, authMiddleware, thunk]
```

The flow becomes:

```text
dispatch(action)
→ logger
→ authMiddleware
→ thunk
→ reducer
```

Each middleware must call:

```js id="ue3hqp"
next(action)
```

Otherwise the chain breaks.

---

# Important Realization

Middleware does NOT change state directly.

Only reducers change state.

Middleware can:

* Observe
* Block
* Transform
* Trigger new actions

But state change always happens in reducers.

---

# When Should We Use Logger Middleware?

Use it:

* During development
* When debugging complex flows
* While learning Redux deeply

Remove it in production for performance.

---

# Final Clear Definition

Logger middleware is:

> A Redux middleware that logs dispatched actions and state changes, helping us debug and understand how our application state evolves.

---

If we understand `createAsyncThunk` properly, we can handle:

* API calls
* Authentication
* Booking systems
* Payments
* Data fetching
* Error handling

Without writing messy async logic.

Let’s go deep.

---

# What Is `createAsyncThunk`?

`createAsyncThunk` is a function from **Redux Toolkit** that helps us handle asynchronous logic in Redux.

It automatically:

* Dispatches lifecycle actions
* Manages pending / success / error states
* Works with Redux DevTools
* Integrates cleanly with reducers

Instead of manually writing async logic and multiple action types, it generates everything for us.

---

# The Core Problem It Solves

Normally, an API call needs:

1. Start loading
2. Call API
3. If success → store data
4. If error → store error
5. Stop loading

Without `createAsyncThunk`, we would manually create:

* FETCH_START
* FETCH_SUCCESS
* FETCH_FAILURE

Too much boilerplate.

Redux Toolkit automates this pattern.

---

# Basic Syntax

```js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk(
  "doctor/fetchDoctors",
  async (arg, thunkAPI) => {
    const response = await fetch("/api/doctors");
    const data = await response.json();
    return data;
  }
);
```

Now let’s break this down carefully.

---

# Part 1️⃣: The Action Type Prefix

```js
"doctor/fetchDoctors"
```

This is just a string.

Redux Toolkit automatically creates three action types from this:

```text
doctor/fetchDoctors/pending
doctor/fetchDoctors/fulfilled
doctor/fetchDoctors/rejected
```

We do NOT write these manually.

---

# Part 2️⃣: The Payload Creator Function

```js
async (arg, thunkAPI) => { ... }
```

This is the async function that runs when we dispatch the thunk.

It receives:

### `arg`

Whatever we pass into dispatch.

Example:

```js
dispatch(fetchDoctors(5))
```

Now:

```js
arg === 5
```

---

### `thunkAPI`

This gives powerful tools:

* `dispatch`
* `getState`
* `rejectWithValue`
* `signal`
* `extra`

We rarely use all of them at beginner level, but they’re important for advanced patterns.

---

# What Happens When We Dispatch It?

```js
dispatch(fetchDoctors())
```

Step-by-step internally:

### 1️⃣ It dispatches:

```text
doctor/fetchDoctors/pending
```

We can use this to set `loading = true`.

---

### 2️⃣ It runs the async function

If successful:

* It dispatches:

```text
doctor/fetchDoctors/fulfilled
```

* Payload = returned data

If error:

* It dispatches:

```text
doctor/fetchDoctors/rejected
```

---

# Handling It in Slice

We do NOT put async logic inside `reducers`.

Instead we use `extraReducers`.

Example:

```js
import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctors } from "./doctorThunk";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default doctorSlice.reducer;
```

---

# Why `extraReducers`?

Because the thunk’s actions are generated outside the slice.

So we “listen” to them using `extraReducers`.

---

# Very Important: Error Handling

By default:

```js
throw new Error("Failed")
```

Redux Toolkit puts error inside:

```js
action.error.message
```

But for better control, we use:

```js
rejectWithValue()
```

Example:

```js
async (_, thunkAPI) => {
  try {
    const res = await fetch("/api");
    return await res.json();
  } catch (err) {
    return thunkAPI.rejectWithValue("Custom error message");
  }
}
```

Now inside reducer:

```js
state.error = action.payload;
```

This gives more control over error messages.

---

# How It Works Internally

`createAsyncThunk` is built on top of Redux thunk middleware.

Redux Toolkit automatically adds thunk middleware via `configureStore`.

So when we dispatch:

```js
dispatch(fetchDoctors())
```

We are dispatching a function.

Thunk middleware detects that and executes it.

Then it dispatches lifecycle actions.

We don’t manually handle this chain — Toolkit handles it.

---

# Real-World Flow (Example: Login)

In our app:

```js
dispatch(loginUser(credentials))
```

Lifecycle:

1. pending → show spinner
2. fulfilled → store user, redirect
3. rejected → show error message

This pattern is perfect for:

* Auth
* Cart checkout
* Booking
* Payments
* Dashboard data

---

# Advanced Capabilities

`createAsyncThunk` also supports:

* Cancellation via `signal`
* Accessing current state via `getState`
* Dispatching additional actions inside thunk
* Condition callback to prevent duplicate calls

Example:

```js
createAsyncThunk(
  "doctor/fetchDoctors",
  async (_, { getState }) => {
    const state = getState();
    console.log(state.auth.user);
  }
);
```

Very powerful for complex apps.

---

# Mental Model

Think of `createAsyncThunk` as:

> A factory that automatically creates an async action with built-in loading and error lifecycle.

Instead of writing 30 lines of async Redux logic, we write 5 clean lines.

---

# Common Mistakes We Must Avoid

❌ Writing async code inside normal reducers
❌ Forgetting to handle pending state
❌ Not resetting error
❌ Replacing default middleware accidentally
❌ Using Redux for small local API calls unnecessarily

---

# When Should We Use It?

Use `createAsyncThunk` when:

* Data must be global
* Multiple components depend on it
* We need predictable async flow
* We want DevTools tracking

Do NOT use it for:

* Small component-only API calls
* Form-level isolated fetches

---

# Final Clear Definition

`createAsyncThunk` is:

> A Redux Toolkit utility that simplifies writing async logic by automatically generating pending, fulfilled, and rejected actions and integrating them into Redux’s lifecycle.

---



