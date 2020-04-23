# Project Specifications

### Motivation

Over the years I've built numerous websites for myself. All of these sites have not had much lasting power and this is in part due to how they are built. Building a website where the only spec for design, data, etc is in your head turns out is a pretty terrible idea for anything except the smallest of projects. 


### Top Level Specifications

These are the core items that the website must provide

* Consistent Responsive Design
* About, Project and Contact Page
* Blog
* Resume
* All data should come through a CMS


### Technical Specifications

These are all the smaller feature that the site must provide

* Accessability / Theming
  * Should support light / dark theme
  * Should support changing of text size
  * High Contrast Mode
  * Screen reader accessible
  * Should be able to render site without any JS

* Contact
  * Provide link to email
  * Provide link to social links
  * Contact form  to send message directly from site

* Behind the scenes
  * All data served with CMS
  * Analytics

* Other
  * No UI Frameworks: Only minimal, lightweight components should be used.
  * Any 3rd party UI should be used on pages indirectly
    * Ie. 3rd Party UI => Component => Page
  * Scoped CSS: If new pages should be added down the road, existing CSS should not interfere with new CSS.
  * F.U.T.U.R.E.P.R.O.O.F - This site must last for 18-24 with changes within that time frame.