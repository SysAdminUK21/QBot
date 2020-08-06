export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedusix.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "05b53c7e-01b4-48de-9646-4506aaf5bfaf",
        clientId: "57a4bc11-9ca5-4eb5-8251-7064fbad471b",
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
};
