# React in 5-ish Minutes #

## Slide Notes ##

A Basic Component:

- A react component - just 3 lines
- Known as a "function component" or "stateless component" in React
- But this is NOT "HTML in JS" - Is all JS (with syntatic sugar)

Without JSX:

- Strip away the sugar, and what's left is the tag name, key/value attribute pairs, and an array of children

A Basic Component:

- As we want to set the DOM, JSX is arguably more familiar/shorter/declaritive
- But I find it useful to remember that "it's just JS"

Multiple Element Children:

- As we saw, children is an array, so we can have multile child elements

Mixed Types of Children:

- But children don't have to be the same "types" - here we've mixed elements with a plain string
- As long as react can render it, it's valid as a child

Refactor out a new Component:

- Having everything as JS allows us to use familiar approaches when managing code
- If we want reuse, refactor into a new function with a meaningful name
- That's it - new component!
- The simplest components are just a function that returns JSX

Using JS Expressions:

- JSX is not limited to just strings and elements - we can swap out different parts for JS expressions
- Use a single set of curley braces, and then write a normal JS expression
- This is the JS version of the same string as before

Component Props:

- A hardcoded component that's always the same has limited use
- We can adapt the component by providing props
- As this is just JS, props are passed as a function argument

Props via Object Destucturing:

- Very common to use ES6 Object Destucturing to simplify

Handlers:

- What about getting data out?
- Functions are used for callbacks

Handlers as Props:

- And can be passed in like other props

Extending JS Expressions:

- Expressions can do a lot - here we can robustly set a default prop value

Extending JS Expressions Further:

- Or we can have an expression return more JSX
- But maybe you think this is getting a bit messy ...

Imperative Function Bodies:

- Because it's JS, you can just make a local variable
- Bodies of functions can use imperative style if desired

Class Components:

- Many components can be just functions, but if you want more advanced features of react, need a "class component" instead
- Can be essentially the same - the function contents just becomes a "render" method
- Props become a field (instead of a parameter)

Stateful Components:

- Common use of class components to for "Stateful Components"
- Step through new parts:
  - Constructor defaults a "state" field
  - A handler can update the state value using "setState" method
  - State values can be read just like props
