---
title: "Main topics to care about before including Motion Designs in your React Native application"
page_title: "Main topics to care about before including Motion Designs in your React Native application"
document_title: Beto Muniz — Main topics to care about before including Motion Designs in your React Native application
date: 2018-05-15
slug: main-topics-to-care-about-before-including-motion-designs-in-your-react-native-application
url: /blog/main-topics-to-care-about-before-including-motion-designs-in-your-react-native-application/
collection: blog
layout: blog/post.hbs
description:  The pros and cons of the current state of the React Native support for advanced animation concepts.
keywords: react, react native, motions, motion designs, animations
---

![](https://user-images.githubusercontent.com/1680157/43663839-4002e650-9741-11e8-802e-2707dd42356a.jpeg)

The pros and cons of the current state of the React Native support for advanced animation concepts.

## Animations still are poorly supported in the React Native ecosystem, but we are not alone

To understand the poor support of animations provided by React Native, we need to check the architecture of the library. The bottleneck is the JS thread, once it manages all behaviors of our app, mainly user interactions.

We have workarounds that partially exposes the UI (Native) thread for usage instead of using the JS thread to animate our things.

The primary workaround is the built-in React Native library called Animated. The Animated library is fantastic, but have a weird API, and only non-layout properties use the native driver support, which means limited performance gain. However, yeah, you can even animate colors with [Animated](https://facebook.github.io/react-native/docs/animated.html).

Beyond of the Animated library, we also have [react-native-animatable](https://github.com/oblador/react-native-animatable), a library that uses the Animated library in the background, but with a better proposal of documentation and API.

And that is all about the approaches adopted and recommended by the community for programmatically apply animations in React Native apps.

## Easing Functions

<img src="https://user-images.githubusercontent.com/1680157/43663837-3ea0dfc4-9741-11e8-8732-a618f5ed8685.gif" style="width:100%;box-shadow: none" />

Easing Functions provide control and performance for animations. For this end, React Native introduced, the Easing module.

The Easing module exposes some standard functions, but the most important is the native driver usage to make the animation calculations, which bring us performance. So, if you need to create a bouncing animation, don’t try to build it by yourself adding each step in your animation sequence, use Easing Functions.

You can learn more about Easing Functions on this [link](https://easings.net/).

## Shared Elements

<img src="https://user-images.githubusercontent.com/1680157/43663826-35a5c600-9741-11e8-8f2f-5933e7f73dec.gif" style="box-shadow: none" />

The concept of Shared Elements create some definitions about how we should build reusable elements that not break the application flow. In the end, this kind of mentality allows us to make better choices for each aspect of our UI components.

You can learn more about it on this [talk](https://www.youtube.com/watch?v=8O5zOSEemUM).

## Transition (or Connected) Layers

Transition Layers allow us to share the state of our application using movements aspects like screens transitions, UI components mutations, micro-interactions, etc.

Sharing the state of our application with these movements aspects, we can create beautiful and mindful transitions to “speak” with our users what is happening.

You can learn more about it on this [article](https://medium.com/flinto-software/connected-layers-the-details-1e382a811b).

## The market solutions for navigation do not support Motion Designs properly

As you can see on [this](https://github.com/react-navigation/react-navigation/issues/175) and [this](https://github.com/wix/react-native-navigation/issues/860) issues, the two leading solutions for navigation of the market: [react-navigation](https://github.com/react-navigation) and [react-native-navigation](https://github.com/wix/react-native-navigation) respectively do not support some main aspects proposed by Motion Designs.

So, do not try to use these solutions if you have sophisticated animations in your app, for these cases, you should create your navigation solution.

This decision will be easy for you to maintain and avoid workarounds.

## useNativeDriver

TL;DR. useNativeDriver allow native code to perform the animation on the UI thread without having to go through the bridge on every frame.

You can learn more about this [documentation link](https://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html).

My humble opinion about this feature is: Use `useNativeDriver` always in your animations.

## Lack of tools that translate the motion design language for developers

After lots concepts, let’s talk a little bit about the tooling ecosystem to work with React Native and Motion Design in the same project.

The leading solutions used by designers to “translate” motion designs are tools like Flinto, Frame, and Principle, but sadly, these tools are not React Native friendly, so at the end of the day, the idea of “translation” is not perfect.

However, don’t worry, the times are changing.

Recently, I founded [Supernova Studio](http://supernova.studio/). Supernova Studio has the ambition to support React Native in a friendly way when you need to translate motion designs for developers. Stay tuned.

## We can interact with UI elements

When we are talking about the support of micro-interactions or elements with rich user interactions, the React Native ecosystem is going in the right direction.

About micro-interactions, we have Lottie, that is the recommendation of the community for this end so far. Lottie is a fantastic library that renders After Effects animations natively. If you want to learn more about, check this [link](https://airbnb.design/lottie/).

<img src="https://user-images.githubusercontent.com/1680157/43663806-2a756a06-9741-11e8-8e1f-eb6fed013152.gif" style="box-shadow: none" />

About elements with rich interactions, we have the library [react-native-interactable](https://github.com/wix/react-native-interactable). 

`react-native-interactable` is the best choice when you need to create custom user interactions, once it brings physics concepts, a stable API, performance, and control.

<img src="https://user-images.githubusercontent.com/1680157/43663790-1a5f63b0-9741-11e8-8caf-54efdfa7de46.gif" style="box-shadow: none" />

## Spring Animations

This concept is very well supported by React Native and recommended by the community, check it out on [my post](https://betomuniz.com/blog/react-native-and-spring-animations/) regarding the React Native support for physics-based motions.

## Conclusion
React Native is going to be an excellent place to work with any animation concept, but we still have a long and painful journey to reach a stable, flexible, and scalable path on this concept.

My dream for the future of animations in the React Native ecosystem is to have the same options that we currently have in the web version of React. I do not know if someday we will reach this level, but we are in a powerful moment for this type of ecosystem, mainly with game changers in the market like Flutter, NativeScript, and Weex to build native apps with JavaScript.

With all that said, the React Native community should care more and more about the actual state of support for Animations in the library. If not, the market will not forgive.

▲
