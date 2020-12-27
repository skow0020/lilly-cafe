[![Netlify Status](https://api.netlify.com/api/v1/badges/9b8a0175-0cab-4861-b27f-08d15e1da25c/deploy-status)](https://app.netlify.com/sites/musing-darwin-3a3f81/deploys)

# A [Next.js](https://nextjs.org/) typescript example website built for Lilly's Asian Cafe with the [JAMstack](https://jamstack.org)

## Usage

### Development

.env file required with Google Maps API Key:

GOOGLE_MAPS_API_KEY=<KEY>

While developing your website, use:

```bash
npm start
```

Or with docker:

```
npm run docker-build
```
```
npm run docker-start
```
```
npm run docker-stop
```

Using the image directly:
```
docker pull skow0020/lillys:latest
```
```
docker run -p 3000:3000 skow0020/lillys:latest
```

Then visit http://localhost:3000/ to preview your new website. The Next.js development server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

See [package.json](package.json) for all tasks.

## Basic Concepts

You can read more about building sites and apps with Next.js in their documentation here:

https://nextjs.org/docs

## Doing dynamic things hmm

A few resources for doing anything you can imagine with a 100% static site/app on the JAMstack
using Next.js. If you would like to add more resources please open a pull request!

- [Using Next.js as a Static Site Generator for Netlify](https://scotch.io/@sw-yx/using-nextjs-as-a-static-site-generator-for-netlify) - [Shawn Wang](https://twitter.com/swyx)
- [Serverless Next.js 9 on Netlify Functions](https://community.netlify.com/t/serverless-next-js-9-on-netlify-functions/1956) - [Shawn Wang](https://twitter.com/swyx)

