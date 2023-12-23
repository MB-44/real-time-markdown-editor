window.onload = function () {
    var converter = new showdown.converter();
    var pad = document.getElementById('pad');
    var mardownArea = document.getElementById('markdown');

    var convertTextAreaToMarkdown = function() {
        var markdownText = pad.value;
        previousMarkdownValue = markdownText;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    var didChangeOccur = function() {
        if (previousMarkdownValue != pad.value) {
            return true;
        }
        return false;
    };

    setInterval(function(){
        if (didChangeOccur()) {
            convertTextAreaToMarkdown();
        }
    }, 1000);

    pad.addEventListener('input',convertTextAreaToMarkdown);

    // convertTextAreaToMarkdown();

    sharejs.open('home', 'text', function(error, doc){
        doc.attach_textarea(pad);
        convertTextAreaToMarkdown();
    });
    
}