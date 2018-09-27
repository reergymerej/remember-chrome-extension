chrome.runtime.onInstalled.addListener(function () {
  chrome.browserAction.onClicked.addListener(function (tab) {
    const url = tab.url
    const xhr = new XMLHttpRequest()
    const text = url + ' #readme'
    xhr.open('POST', 'https://jex-forget-me-not.herokuapp.com/note')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({ text: text }))
  })
})
