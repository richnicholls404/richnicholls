module.exports = {
	"parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"linebreak-style": 0,
		"no-tabs": 0,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
		"react/jsx-filename-extension": 0,
		"react/sort-comp": 0,
    }
};
