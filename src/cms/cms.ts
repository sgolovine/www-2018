import CMS from 'netlify-cms-app'

import AboutPagePreviewTemplate from './templates/AboutPagePreviewTemplate'
import ContactPagePreviewTemplate from './templates/ContactPagePreviewTemplate'
import HomePagePreviewTemplate from './templates/HomePagePreviewTemplate'
import LinksPagePreviewTemplate from './templates/LinksPagePreviewTemplate'
import ProjectsPagePreviewTemplate from './templates/ProjectsPagePreviewTemplate'

CMS.registerPreviewTemplate('about', AboutPagePreviewTemplate)
CMS.registerPreviewTemplate('contact', ContactPagePreviewTemplate)
CMS.registerPreviewTemplate('home', HomePagePreviewTemplate)
CMS.registerPreviewTemplate('links', LinksPagePreviewTemplate)
CMS.registerPreviewTemplate('projects', ProjectsPagePreviewTemplate)
