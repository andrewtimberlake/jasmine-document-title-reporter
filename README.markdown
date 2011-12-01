# jasmine-document-title-reporter

A reporter for Jasmine that puts the results into the browser title/tab bar

- Changes the document title to indicate number of failures or number of passed specs
- Changes the favicon to a green/red dot

I run my specs continuously in two browsers using livereload to re-run the specs every time a file is changed. Often the specs are run in a browser tab that is not the current tab I'm working on.
This reporter gives you a visual indication on the state of your specs as you work.

## Instalation

Download jasmine_title_reporter.js and the 2 .ico files and place them in spec/javascripts/helpers/