---
path: "/how-i-built-this-website"
title: "How I Built This Website"
image: "how-i-build.jpg"
image_subtitle: "Performance analysis of the /videos page"
---

It's a React website using the Gatsby framework, hosted in an S3 bucket and distributed over Cloudfront.

## Speed

The site performs extremely well for several reasons:

- JAMstack. Gatsby uses client-side javascript and prebuilt markup to easily cache a site on a CDN.
- Lazy image loading. Gatsby-image caches images in several sizes and loads them incrementally.
- Minimal CSS. Avoiding frameworks like Bootstrap that slow down a site and become outdated. I use CSS-In-JS (with Emotion) to modularize styling.
- Compress files. Cloudfront automatically gzips HTML, CSS, and JS, smaller files means faster loading times.
