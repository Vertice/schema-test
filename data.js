module.exports = {
    valid: {
        "bounds": [-180, -85.05112877980659, 180, 85.05112877980659],
        "center": [0, 0, 2],
        "format": "png",
        "interactivity": false,
        "minzoom": 0,
        "maxzoom": 22,
        "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
        "Stylesheet": [{
            "id": "style.mss",
            "data": "Map {\n  background-color: #fff;\n}\n\n#world {\n  polygon-fill: #eee;\n  line-color: #ccc;\n  line-width: 0.5;\n}"
        }],
        "Layer": [{
            "id": "world",
            "name": "world",
            "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
            "geometry": "polygon",
            "Datasource": {
                "file": "http://tilemill-data.s3.amazonaws.com/world_borders_merc.zip",
                "type": "shape"
            }
        }],
        "id": "demo_01",
        "tilejson": "2.0.0",
        "scheme": "xyz",
        "tiles": ["/tile/demo_01/{z}/{x}/{y}.png"],
        "grids": ["/tile/demo_01/{z}/{x}/{y}.grid.json"]
    },
    invalid: {
        "bounds": [-180, -85.05112877980659, 180, 85.05112877980659],
        "center": [0, 0, 2],
        "format": "png",
        "interactivity": false,
        "minzoom": 0,
        "maxzoom": 23,
        "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
        "Stylesheet": [{
            "id": "style.mss",
            "data": "Map {\n  background-color: blurb;\n}\n\n#world {\n  polygon-fill: #eee;\n  line-color: #ccc;\n  line-width: 0.5;\n}"
        }],
        "Layer": [{
            "id": "world",
            "name": "world",
            "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
            "geometry": "polygon",
            "Datasource": {
                "file": "http://tilemill-data.s3.amazonaws.com/world_borders_merc.zip",
                "type": "shape"
            }
        }],
        "id": "demo_01",
        "tilejson": "dsfasdf",
        "scheme": "xyz",
        "tiles": ["/tile/demo_01/{z}/{x}/{y}.png"],
        "grids": ["/tile/demo_01/{z}/{x}/{y}.grid.json"],
        "bones.token": "qUPgDcUqcee7RkBieVn7bfhZxAZALOyx"
    }
}
