chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 3,
            action: {
                type: "redirect",
                redirect: {
                    // Set the new URL to the Capture Group 1 and Capture Group 2
                    regexSubstitution: "\\1\\2"
                }
            },
            condition: {
                requestDomains: [
                    "registry.terraform.io"
                ],
                // Capture groups(Surrounded with ()) are referenced in the actions regexSubstitution above
                // Capture Group 1: Entire URL up to and including the last slash
                // Capture Group 2: The page name, minus the .html extension
                // By including the .html extension in the regexSubstitution, we only trigger on the .html pages
                regexFilter: "(.*\\/)(.*)\\.html"
            }
        }
    ]
})