---
id: general
title: General
sidebar_label: General
hide_title: true
---

# Redux FAQ: General

## Table of Contents

- [When should I learn Redux?](#when-should-i-learn-redux)
- [When should I use Redux?](#when-should-i-use-redux)
- [Can Redux only be used with React?](#can-redux-only-be-used-with-react)
- [Do I need to have a particular build tool to use Redux?](#do-i-need-to-have-a-particular-build-tool-to-use-redux)

## General

### When should I learn Redux?

What to learn can be an overwhelming question for a JavaScript developer. It helps to narrow the range of options by learning one thing at a time and focusing on problems you find in your work. Redux is a pattern for managing application state. If you do not have problems with state management, you might find the benefits of Redux harder to understand. Some UI libraries (like React) have their own state management system. If you are using one of these libraries, especially if you are just learning to use them, we encourage you to learn the capabilities of that built-in system first. It might be all you need to build your application. If your application becomes so complex that you are confused about where state is stored or how state changes, then it is a good time to learn Redux. Experiencing the complexity that Redux seeks to abstract is the best preparation for effectively applying that abstraction to your work.

#### Further information

**Articles**

- [Deciding What Not To Learn](http://gedd.ski/post/what-not-to-learn/)
- [How to learn web frameworks](https://ux.shopify.com/how-to-learn-web-frameworks-9d447cb71e68)
- [Redux vs MobX vs Flux vs... Do you even need that?](https://goshakkk.name/redux-vs-mobx-vs-flux-etoomanychoices/)

**Discussions**

- [Ask HN: Overwhelmed with learning front-end, how do I proceed?](https://news.ycombinator.com/item?id=12882816)
- [Twitter: If you want to teach someone to use an abstraction...](https://twitter.com/acemarke/status/901329101088215044)
- [Twitter: it was never intended to be learned before...](https://twitter.com/dan_abramov/status/739961787295117312)
- [Twitter: Learning Redux before React?](https://twitter.com/dan_abramov/status/739962098030137344)
- [Twitter: The first time I used React, people told me I needed Redux...](https://twitter.com/raquelxmoss/status/901576285020856320)
- [Twitter: This was my experience with Redux...](https://twitter.com/garetmckinley/status/901500556568645634)
- [Dev.to: When is it time to use Redux?](https://dev.to/dan_abramov/comment/1n2k)

### When should I use Redux?

The need to use Redux should not be taken for granted.

As Pete Hunt, one of the early contributors to React, says:

> You'll know when you need Flux. If you aren't sure if you need it, you don't need it.

Similarly, Dan Abramov, one of the creators of Redux, says:

> I would like to amend this: don't use Redux until you have problems with vanilla React.

In general, use Redux when you have reasonable amounts of data changing over time, you need a single source of truth, and you find that approaches like keeping everything in a top-level React component's state are no longer sufficient.

However, it's also important to understand that using Redux comes with tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. It does so by asking you to follow specific constraints in your application: store your application's state as plain data, describe changes as plain objects, and handle those changes with pure functions that apply updates immutably. This is often the source of complaints about "boilerplate". These constraints require effort on the part of a developer, but also open up a number of additional possibilities (such as store persistence and synchronization).

In the end, Redux is just a tool. It's a great tool, and there are some great reasons to use it, but there are also reasons you might not want to use it. Make informed decisions about your tools, and understand the tradeoffs involved in each decision.

#### Further information

**Documentation**

- [Introduction: Motivation](../introduction/Motivation.md)

**Articles**

- [React How-To](https://github.com/petehunt/react-howto)
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [The Case for Flux](https://medium.com/swlh/the-case-for-flux-379b7d1982c6)
- [Some Reasons Why Redux is Useful in a React App](https://www.fullstackreact.com/articles/redux-with-mark-erikson/)

**Discussions**

- [Twitter: Don't use Redux until...](https://twitter.com/dan_abramov/status/699241546248536064)
- [Twitter: Redux is designed to be predictable, not concise](https://twitter.com/dan_abramov/status/733742952657342464)
- [Twitter: Redux is useful to eliminate deep prop passing](https://twitter.com/dan_abramov/status/732912085840089088)
- [Twitter: Don't use Redux unless you're unhappy with local component state](https://twitter.com/dan_abramov/status/725089243836588032)
- [Twitter: You don't need Redux if your data never changes](https://twitter.com/dan_abramov/status/737036433215610880)
- [Twitter: If your reducer looks boring, don't use redux](https://twitter.com/dan_abramov/status/802564042648944642)
- [Reddit: You don't need Redux if your app just fetches something on a single page](https://www.reddit.com/r/reactjs/comments/5exfea/feedback_on_my_first_redux_app/dagglqp/)
- [Stack Overflow: Why use Redux over Facebook Flux?](http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux)
- [Stack Overflow: Why should I use Redux in this example?](http://stackoverflow.com/questions/35675339/why-should-i-use-redux-in-this-example)
- [Stack Overflow: What could be the downsides of using Redux instead of Flux?](http://stackoverflow.com/questions/32021763/what-could-be-the-downsides-of-using-redux-instead-of-flux)
- [Stack Overflow: When should I add Redux to a React app?](http://stackoverflow.com/questions/36631761/when-should-i-add-redux-to-a-react-app)
- [Stack Overflow: Redux vs plain React?](http://stackoverflow.com/questions/39260769/redux-vs-plain-react/39261546#39261546)
- [Twitter: Redux is a platform for developers to build customized state management with reusable things](https://twitter.com/acemarke/status/793862722253447168)

### Can Redux only be used with React?

Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code. That said, it is most useful when combined with a declarative view implementation that can infer the UI updates from the state changes, such as React or one of the similar libraries available.

### Do I need to have a particular build tool to use Redux?

Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all. The [counter-vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example demonstrates basic ES5 usage with Redux included as a `<script>` tag. As the relevant pull request says:

> The new Counter Vanilla example is aimed to dispel the myth that Redux requires Webpack, React, hot reloading, sagas, action creators, constants, Babel, npm, CSS modules, decorators, fluent Latin, an Egghead subscription, a PhD, or an Exceeds Expectations O.W.L. level.

> Nope, it's just HTML, some artisanal `<script>` tags, and plain old DOM manipulation. Enjoy!
