var textFile = null

function makeTextFile(text) {
    var data = new Blob([text], { type: 'text/plain' });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};

var test = makeTextFile('ronaldo')
console.log(test)

function botaoclick() {
    const doc = document.getElementById("texto").value

    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(doc);
    // link.style.display = 'block';
    link.click();

}

document.getElementById("botao").addEventListener("click", botaoclick)