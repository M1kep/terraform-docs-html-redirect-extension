chrome.webRequest.onBeforeRequest.addListener(details => {
    console.log(details.url)
},{
    urls: [
        'https://registry.terraform.io/providers/*/*/latest/docs/*'
    ]
}, ['blocking'])