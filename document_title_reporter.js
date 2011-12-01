var DocumentTitleReporter = function(_doc) {
    var self = this,
    doc = _doc || window.document,
    existingTitle = doc.title,
    totalSpecsCount = 0,
    skippedSpecs = 0,
    runSpecs = 0,
    failedSpecs = 0;
    
    var updateTitle = function(text) {
	document.title = text + " - " + existingTitle;
    }

    var removeShortcutIcons = function() {
	linkTags = document.getElementsByTagName('link');
	for(i = linkTags.length-1; i >= 0; i--) {
	    var linkTag = linkTags[i];
	    if(linkTag.getAttribute('rel') == 'shortcut icon') {
		linkTag.parentNode.removeChild(linkTag);
	    }
	}
    }

    var setShortcutIcon = function(icon) {
	var head = document.getElementsByTagName('HEAD')[0]
	var linkTag = document.createElement('LINK');
	linkTag.setAttribute('rel', 'shortcut icon');
	linkTag.setAttribute('type', 'image/x-icon');
	linkTag.setAttribute('href', '/__spec__/helpers/'+icon+'.ico');
	head.appendChild(linkTag);
    }

    self.reportRunnerStarting = function(runner) {
	totalSpecsCount = runner.specs().length;
	removeShortcutIcons();
	updateTitle("Running... ");
    }

    self.reportRunnerResults = function(runner) {
	var results = runner.results();
	removeShortcutIcons();
	if(failedSpecs == 0) {
	    setShortcutIcon('passed');
	    updateTitle(runSpecs + " of " + totalSpecsCount);
	} else {
	    setShortcutIcon('failed');
	    updateTitle(failedSpecs + ' failed');
	}
    }

    self.reportSpecResults = function(spec) {
	var results = spec.results();
	if(results.skipped) {
	    skippedSpecs++;
	} else {
	    runSpecs++;
	}
	if(results.failedCount > 0) {
	    failedSpecs++;
	}
    }
}
jasmine.getEnv().addReporter(new DocumentTitleReporter())