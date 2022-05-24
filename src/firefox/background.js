const regex = /(.*\/)(.*)\.html/
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const match = details.url.match(regex)
        return {
            redirectUrl: `${match[1]}${match[2]}`
        };
    },
    {
        urls: [
            "*://registry.terraform.io/providers/*/*/latest/docs/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);