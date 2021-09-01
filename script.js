var version="0.0.0";document.getElementById('t').innerHTML+=" "+version;var tar=document.getElementById('textinput')
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
  const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
  });
if(location.hash=="#loadfilefrompwa"){
  if ('launchQueue' in window) {
    launchQueue.setConsumer((launchParams) => {
      // Nothing to do when the queue is empty.
      if (!launchParams.files.length) {
        return;
      }
      for (const fileHandle of launchParams.files) {
        var file = await fileHandle.getFile()
        var filetext = await file.text()
        tar.value = filetext
      }
    });
  }
}
function readImage(file) {
  // Check if the file is an image.
  if (file.type && !file.type.startsWith('image/')) {
    console.log('File is not an image.', file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    img.src = event.target.result;
  });
  reader.readAsDataURL(file);
}
function setPlaceholder(fileType){
  tar.placeholder=res.tedit.examples[fileType]
}