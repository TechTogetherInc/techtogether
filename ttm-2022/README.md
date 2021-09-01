# TechTogether Miami 2022 Site

This is the official site for TechTogether Miami 2022, the Miami branch of the largest hackathon working to uplift marginalized genders in tech.

## Setup

This site is built with **Eleventy,** a JavaScript-based static site generator like Hugo and Jekyll. The following dependencies are needed for development:

* Node.js
* Eleventy

First, install [**Node.js**](https://nodejs.org/en/) from the Node.js website.

Afterwards, use **npm**, the Node.js package manager, to install Eleventy. In a command prompt window, type the following:

`npm install -g @11ty/eleventy`

Lastly, make sure to install the dependencies for this project:

`npm install`

## Developing

To build this site, run Eleventy using the `npm run build` command (which just calls Eleventy to build the site). The output will be sent to the /ttm-2022/_site directory. **Do not add this directory to the Git repository.**

To host the site locally and see your changes in real-time, build and start a server using `npm run serve`.

