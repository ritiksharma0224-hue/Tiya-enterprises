window.elementSdk = {
    config: {},
    init: function(options) {
        this.config = { ...options.defaultConfig };
        this.onConfigChange = options.onConfigChange;
        console.log("elementSdk initialized with config:", this.config);
    },
    setConfig: function(newConfig) {
        this.config = { ...this.config, ...newConfig };
        if (this.onConfigChange) {
            this.onConfigChange(this.config);
        }
        console.log("Config updated:", newConfig);
    }
};
