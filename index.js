var textFile = null

function makeTextFile(text) {
    var data = new Blob([text], { type: 'text/plain' });
    
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    
    textFile = window.URL.createObjectURL(data);
    
    return textFile;
};

function parseBreakLines(value) {
    return value.replaceAll('\n', '<br/>')
}

function saveAsImage() {
    const doc = document.getElementById("text").value
    
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(doc);
    link.download = 'redacao.txt';
    link.click();
}

function saveAsLog() {
    var text = document.getElementById("text").value
    var newText = parseBreakLines(text)
    console.log(JSON.stringify(newText))
}


// // dom-to-image é uma biblioteca que pode transformar um nó DOM arbitrário em uma imagem vetorial (SVG) ou raster (PNG ou JPEG),
// escrita em JavaScript.

function saveAsImage() {
    const node = document.querySelector('#redacao');
    domtoimage
    .toPng(node)
    .then(function (dataUrl) {
        // var img = new Image();
        // img.src = dataUrl;
        var link = document.getElementById('downloadlink');
        link.href = dataUrl;
        link.download = 'redacao';
        link.click();
        // document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error("oops, something went wrong!", error);
    });
}

// function 
//         var link = document.getElementById('downloadlink');
//         link.href = canvas.toDataURL('image/png');
//         link.download = 'redacao';
//         link.click();

//     });
// }


document.getElementById("botao").addEventListener("click", saveAsImage)