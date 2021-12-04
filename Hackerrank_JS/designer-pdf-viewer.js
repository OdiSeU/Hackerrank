function designerPdfViewer(h, word) {
    return [...word].reduce((acc, v) => Math.max(acc, h[v.charCodeAt() - 97]), 0) * word.length;
}