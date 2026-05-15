// Mock data SDK for local Development
console.log("data_sdk initialized for Tiya Enterprises website.");

window.dataSdk = {
    // any possible data-related methods
    fetch: async function (url) {
        return { success: true, url };
    }
};
