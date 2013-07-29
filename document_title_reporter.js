var DocumentTitleReporter = function(_doc) {
    var self = this,
        doc = _doc || window.document,
        existingTitle = doc.title,
        totalSpecsCount = 0,
        skippedSpecs = 0,
        runSpecs = 0,
        failedSpecs = 0,
        updateTitle = function(text) {
            doc.title = text + " - " + existingTitle;
        },
        removeShortcutIcons = function() {
            linkTags = doc.getElementsByTagName('link');
            for (var i = linkTags.length-1; i >= 0; i--) {
                var linkTag = linkTags[i];
                if (linkTag.getAttribute('rel') === 'shortcut icon') {
                    linkTag.parentNode.removeChild(linkTag);
                }
            }
        },
        setShortcutIcon = function(icon) {
            var head = doc.getElementsByTagName('head')[0],
                linkTag = doc.createElement('link'),
                iconsReporterPath = doc.getElementsByTagName('meta').item(name='iconsReporterPath').getAttribute('content'),
                iconsPath = iconsReporterPath || 'helpers/';
            linkTag.setAttribute('rel', 'shortcut icon');
            linkTag.setAttribute('href', iconsPath + icon + '.ico');
            head.appendChild(linkTag);
        };

    self.reportRunnerStarting = function(runner) {
        totalSpecsCount = runner.specs().length;
        removeShortcutIcons();
        updateTitle("Running... ");
    };

    self.reportRunnerResults = function(runner) {
        var results = runner.results();
        removeShortcutIcons();
        if (failedSpecs === 0) {
            setShortcutIcon('passed');
            updateTitle("\u2713 " + runSpecs + " of " + totalSpecsCount);
        } else {
            setShortcutIcon('failed');
            updateTitle("\u274C " + failedSpecs + ' failed');
        }
    };

    self.reportSpecResults = function(spec) {
        var results = spec.results();
        if (results.skipped) {
            skippedSpecs++;
        } else {
            runSpecs++;
        }
        if (results.failedCount > 0) {
            failedSpecs++;
        }
    };
};

jasmine.getEnv().addReporter(new DocumentTitleReporter());
