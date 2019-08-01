---
path: "/how-i-built-this-website"
title: "How I Built This Website"
image: "how-i-build.jpg"
image_subtitle: "Performance analysis of the /videos page"
---

This is a React website using the Gatsby framework, hosted in an S3 bucket and distributed over Cloudfront. It performs extremely well for several reasons:

- JAMstack uses client-side javascript, reusable API's, and prebuilt markup. Prebuilt files are served over a CDN and can be served anywhere.
- Lazy image loading. Gatsby image
