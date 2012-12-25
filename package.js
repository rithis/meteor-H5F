Package.describe({
    summary: "a JavaScript library that allows you to use the HTML5 Forms chapters new field input types, attributes and constraint validation API in non-supporting browsers"
});

Package.on_use(function (api) {
    api.add_files([
        "H5F/src/H5F.js",
    ], "client");
});
