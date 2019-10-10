---
title: "React Native and Spring Animations"
date: "2018-08-05"
path: "/blog/react-native-and-spring-animations/"
description: "The current state of the React Native support of spring-based animations."
keywords: "react, react native, spring, origami, rk4, dho, physics, motions, motion designs, animations"
---

Physics-based motions are driven by force, and the Spring behavior defines the Spring Animation concept.

The primary goal of this article is to help developers to understand the concept under the hood of the current state of Spring Animations with React Native (and React at all).

Also, this article helps your mobile team communication to make internal questions like **"how should we create and delivery spring-based motions designs that work well with React Native?"**.

Trust me. This type of question before starting the development will avoid a bunch of misconceptions and individual interpretations.

## To the Concepts...

The first thing to keep in mind is that **Apple's UIKit Spring Algorithm NOT is supported by React Native**. Yeah! This approach should be entirely ignored during the development.

> Check [this thread](https://twitter.com/andy_matuschak/status/566736015188963328) from an Ex-Apple guy to see the main aspect that the Community doesn't adopt the Apple UIKit Spring approach.

With all being said, the spring-based animation algorithms commonly used by the React Native community are:

#### Origami (Rebound) Spring Algorithm
<img src="https://user-images.githubusercontent.com/1680157/43672456-b37c1636-9784-11e8-8573-3b56eadfbacf.gif" style="box-shadow: none" />

[Origami](https://origami.design/) is a Facebook project, and the React Native support is native 🤯. The Origami is synced with the [Rebound](http://facebook.github.io/rebound/) model which allows us to interpolate Tension, Friction, Speed, and Bounciness.

The most recommended libraries to apply this spring-based animation are [React Native Animated](https://facebook.github.io/react-native/docs/animated), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated), and [rebound](http://facebook.github.io/rebound/).

Check it out on this interactive [demo](http://facebook.github.io/rebound/).

#### Damped Harmonic Oscillator (DHO) Algorithm
<img src="https://user-images.githubusercontent.com/1680157/43672497-792eeb06-9785-11e8-9d07-6864caddc848.gif" style="box-shadow: none" />

[DHO](https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator) is an analytical spring model which allows us to interpolate Stiffness, Damping, and Mass.

The most recommended libraries to apply this spring-based animation are [React Native Animated](https://facebook.github.io/react-native/docs/animated), [Framer.js](https://github.com/koenbok/Framer) and [react-motion](https://github.com/chenglou/react-motion).

Check it out on this interactive [demo](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/).

#### 4th order Runge-Kutta  (RK4) Spring Algorithm
<img src="https://user-images.githubusercontent.com/1680157/43672498-794e1c92-9785-11e8-9a39-c3dec40afdfa.gif" style="box-shadow: none" />

[RK4](http://lpsa.swarthmore.edu/NumInt/NumIntFourth.html) is natively supported in old React Native versions (before Origami/Rebound arrived) and an important industry standard which allows us to interpolate Tension, Friction, and Velocity.

The most recommended libraries to apply this spring-based animation are [Framer.js](https://github.com/koenbok/Framer), [react-spring](https://github.com/drcmda/react-spring), and [rebound](https://github.com/facebook/rebound-js).

Check it out on this interactive [demo](http://stakes.github.io/framerplayground/) and this [benchmark](https://spectrum.chat/thread/64c49333-d105-49bc-9149-61987acf679b) created by myself to test `react-spring` working in a stressed environment.

## Conclusion

As you can see, the React Native support for spring-based animations is very fun and diverse, the current problem is the lousy support provided by the market of prototyping tools like Flinto, Framer, Principle, etc.

Currently, the best choice is the [Origami Studio](https://origami.design/), but great times are coming for this scenario with [Super Nova](https://supernova.studio/) and [Framer X](https://framer.com/x/) that is React Native and React friendly respectively. Stay tuned.

## Bonus

Take a look at this [another article](https://betomuniz.com/blog/main-topics-to-care-about-before-including-motion-designs-in-your-react-native-application/) that I wrote to know more about animations approaches with React Native.

▲

### Extra References

- [Building an iOS app in React Native](https://medium.com/@vdg/building-an-ios-app-in-react-native-3db2f73fe878)
- [github.com/flinto/RK4Spring](https://github.com/flinto/RK4Spring)
- [github.com/expo/react-apple-easing](https://github.com/expo/react-apple-easing)
- [twitter.com/flyosity/status/566944212097458176](https://twitter.com/flyosity/status/566944212097458176)
- [developer.android.com/guide/topics/graphics/spring-animation](https://developer.android.com/guide/topics/graphics/spring-animation)
- [itnext.io/javascript-raf-requestanimationframe-456f8a0d04b0](https://itnext.io/javascript-raf-requestanimationframe-456f8a0d04b0)
- [How to integrate the equations of motion](https://gafferongames.com/post/integration_basics/)
- [Playing with React Native Animations](https://hackernoon.com/playing-with-react-native-animations-d065e7e97391)
- [twitter.com/Vjeux/status/997136061791854593](https://twitter.com/Vjeux/status/997136061791854593)
- [Bridging React Native Back to its Roots](https://www.youtube.com/watch?v=aOWIJ4Mgb2k&feature=youtu.be)
