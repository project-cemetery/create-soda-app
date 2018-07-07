# Create Soda App

The easiest way to create a Soda app

- [Getting Started](#getting-started) — How to create an app

If you run into any issues or have feedback, please [file an issue](https://github.com/segmentio/create-next-app/issues/new)

## Overview

```sh
npm install -g create-soda-app

create-soda-app my-app
cd my-app/
npm run dev
```

## Preface

### What is Soda?

Soda is a way to create reliable applications with NodeJS according to [SOLID](https://en.wikipedia.org/wiki/SOLID) and [GRASP](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)>) principles with top notch developer experience.

### Why TypeScript?

TypeScript provides much needed strict static type system allowing us to make development process easier, to reduce required amount of unit tests and to make our app more predictable.

### What about performance?

We compile TypeScript to regular JS in production mode and use a regular NodeJS to make sure that app runs as fast as possible.

### What else do I need to start creating beautifull reliable apps?

These great books can help a lot if you decided to build a Soda app:

- [Design Patterns](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8)

- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

- [Clean Architecture: A Craftsman's Guide to Software Structure and Design](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)

- [Code Complete: A Practical Handbook of Software Construction](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670)

### Start Coding Now

Open [http://localhost:8080](http://localhost:8080) to view your running app.
When you're ready for production, run `npm run build` then `npm run prod`.

You **don't** need to setup Typescript and Babel.
They come delivered with `soda`, so you can just start coding.

After running `create-soda-app`, you're good to go!

### Templates

This package provides usefull templates to start building a Soda app.

#### default

Basic template with preconfigured TypeScript build, docker container and convinient developer enviroment.

#### other templates

coming soon

## Getting Started

### Installation

Install it once globally:

```sh
yarn add global create-soda-app
```

or

```sh
npm install -g create-soda-app
```

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between different projects.

### Creating an App

To create a new app, run:

```
create-soda-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.

Questions? Feedback? [Please let us know](https://github.com/solid-soda/create-soda-app/issues/new)
