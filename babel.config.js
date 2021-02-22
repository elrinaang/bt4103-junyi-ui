module.exports = (api) => {
    api.cache(true)
    return {
      "env": {
        "development": {
          "plugins": [
            ["styled-components", { "ssr": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": false }]
          ]
        }
      },
      presets: ["next/babel"]
    }
  }