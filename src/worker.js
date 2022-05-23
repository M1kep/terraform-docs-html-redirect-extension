// chrome.webRequest.onBeforeRequest.addListener(details => {
//     console.log(details.url)
// },{
//     urls: [
//         'https://registry.terraform.io/providers/*/*/latest/docs/*'
//     ]
// }, ['blocking'])

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 3,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "\\1\\2"
                }
            },
            condition: {
                requestDomains: [
                    "registry.terraform.io"
                ],
                regexFilter: "(.*\\/)(.*)(\\.html)"
            }
        }
    ]
})