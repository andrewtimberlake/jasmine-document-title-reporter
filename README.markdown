# jasmine-document-title-reporter

A reporter for Jasmine that puts the results into the browser title/tab bar

- Changes the document title to indicate number of failures or number of passed specs,
- Changes the favicon to a green/red dot,
- Document Title now has a tick or check mark (Unicode) before the text - also helps if icons do not update locally in some browsers (eg: Chrome).

I run my specs continuously in two browsers using livereload to re-run the specs every time a file is changed. Often the specs are run in a browser tab that is not the current tab I'm working on.
This reporter gives you a visual indication on the state of your specs as you work.

## Instalation

Download jasmine_title_reporter.js and the 2 .ico files and place them in 'helpers/' directory from your test spec file.

Or if you wish to use another path such as 'spec/javascripts/helpers/', you can set it with the following meta tag before loading and executing 'jasmine_title_reporter.js':

<meta name="iconsReporterPath" content="spec/javascripts/helpers/" />
