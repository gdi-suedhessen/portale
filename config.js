const Config = {
    wfsImgPath: "./resources/img/",
    namedProjections: [
        ["EPSG:25832", "+title=ETRS89/UTM 32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "common:modules.footer.designation",
                "url": "https://gdi-suedhessen.de/",
                "alias": "GDI Südhessen",
                "alias_mobil": "GDI-SH :-)"
            }
        ],
        showVersion: true
    },
    quickHelp: {
        imgPath: "./resources/img/"
    },
    "mapMarker": {
        "pointStyleId": "mapMarkerSuedhessen",
        "polygonStyleId": "customMapMarkerPolygon"
    }
    ,
     portalLanguage: {
                "enabled": true,
                "debug": false,
                "languages": {
                    "platt": "platt",
                    "de": "deutsch",
                    "en": "englisch"                    
                },
                "fallbackLanguage": "de",
                "changeLanguageOnStartWhen": ["querystring", "localStorage", "navigator", "htmlTag"],
                "loadPath": "./mastercode/2_21_0/locales/{{lng}}/{{ns}}.json"
            },
    layerConf: "./resources/services-hessen.json",
    restConf: "./resources/rest-services-internet.json",
    styleConf: "./resources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
    },
   
};

// conditional export to make config readable by e2e tests
if (typeof module !== "undefined") {
    module.exports = Config;
}
