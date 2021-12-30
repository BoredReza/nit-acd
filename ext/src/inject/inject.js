// get url of the page
var url = window.location.href;

url = url.replace(/\/\?(.*)/gm,"/output/recorded.zip?download=zip")

window.open(url, '_blank');