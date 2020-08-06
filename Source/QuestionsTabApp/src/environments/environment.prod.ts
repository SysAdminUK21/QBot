export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedusix.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotedusix-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "05b53c7e-01b4-48de-9646-4506aaf5bfaf",
        clientId: "97b4a169-1484-4089-8891-3bf2f61a2a08",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
