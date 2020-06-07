---
title: Kwaly Website
date: "2020-04-01"
thumbnail: ./kwaly.jpg
tags: [kwaly, e-commerce, webdevelopment, react, gatsby]
description: Redesigning and building the Kwaly website from the ground up using Gatsby, React and Netlify
---

<div style="text-align:center">
<a href="https://www.kwaly.be" target="_blank">www.kwaly.be</a>
</div>

# Introduction

This project was a challenge considering all these technologies were relatively new. I started out with a basic e-commerce template but rebuilt everything from the ground up. My friend [Eli](https://ecolpaert.com/) helped me along the way with some dev work, and also suggested I use tailwind so I took that into consideration while researching technologies. The site runs on the JAM stack powered by Netlify.

# Problem

The old site was running on a free wordpress template which could be customized but it was really slow and the admin panel was not very intuitive.

# Solution

Start fresh! It was time for an upgrade. The requirements I had were, it has to be fully customizable in HTML / CSS, but should also be editable with a sort of editor. What we came up with was connecting [Contentful](https://www.contentful.com/) to a Gatsby site. Loading the content from Contentful meant that they took care of the formatting because it's written in markdown and then converted within Gatsby to HTML.

# Design

Doing the redesign I wanted the website to match the clothing we produce so I kept it clean and simple, just like the t-shirts. The navbar up to sticks to the top when you start scrolling so you don't get lost, but it's minimal enough that it doesn't get in the way.
The main event of the site is the store, so all the CTA's direct there.

## Tech Stack

- React
- Gatsby
- Netlify Functions
- Stripe Api
- Contentful Api

## Check out the goods

- See the website [www.kwaly.be](https://www.kwaly.be)
