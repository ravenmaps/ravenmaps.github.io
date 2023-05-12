var config = {
    style: 'mapbox://styles/thulemaps/clhjqtbzz00jn01pp0uqf9iap',
    accessToken: 'pk.eyJ1IjoidGh1bGVtYXBzIiwiYSI6ImNqM3F0Y2JnaDAxYnQzM28xZDVwazhhaDEifQ.pofHlcCOkr9OXfKsMYAAFw',
    showMarkers: true,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'Reyðarfjörður',
            image: '',
            description: 'Reyðarfjörður (Icelandic pronunciation: ​[ˈreiːðarˌfjœrðʏr̥]) is a town in Iceland. It has a population of 1,350 and is one of the most populated villages that constitute the municipality of Fjarðabyggð. https://en.wikipedia.org/?curid=3254332',
            location: {
                center: [-15.75231, 65.04131],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'rf',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Rey%C3%B0arfj%C3%B6r%C3%B0ur_6436.JPG',
            description: 'Reyðarfjörður er kaupsstaður á Austfjörðum og dregur nafn sitt af samnefndum firði. Þorðið hét upphaflega Búðareyri, en er nú kallaður Reyðarfjörður. Árið 2019 var íbúafjöldi um 1.350 (Hagstofa). Reyðarfjörður er hluti af sveitarfélaginu Fjarðabyggð. Hafnaraðstaða er mjög góð í firðinum frá náttúrunnar hendi. Álver Alcoa-Fjarðaráls er í firðinum.Stutt er í næstu byggðarkjarna; 13km á Eskifjörð, þar sem keyrt er yfir Hólmaháls; 18km á Fáskrúðsfjörð ef keyrt er í gegnum Fáskrúðsfjarðargöngin, sem voru tekin í notkun árið 2005; og 32km í Egilsstaði',
            location: {
                  center: [-14.20231, 65.04131],
                zoom: 11.83,
                pitch: 67.50,
                bearing: -18.40
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'FOSS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Rei%C3%B0arfj%C3%B6r%C3%B0ur04.jpg',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                 center: [-14.20231, 65.04131],
                zoom: 13.83,
                pitch: 67.50,
                bearing: -18.40
            },
            onChapterEnter: [
                {
                    layer: 'tracks',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'tracks',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                  center: [-14.20672, 65.03109],
                zoom: 18.18,
                pitch: 70.50,
                bearing: -48.80
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Hólmanes',
            image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city https://www.east.is/en/place/holmanes',
            location: {
               center: [-14.01327, 65.04532],
                zoom: 14.16,
                pitch: 73.50,
                bearing: -88.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'Sesam Brauðhús',
            image: 'https://austurland.is/wp-content/uploads/2020/11/sesama-900x600.jpg',
            description: 'Small Bakery/Café with typical islandic baked goods and sandwiches. Sandwiches tasted great, staff was was very friendly and the seating area very clean. We enjoyed our quick break and can only recommend to stop by.',
            location: {
                center: [-14.21838, 65.03231],
                zoom: 15.89,
                pitch: 70.19,
                bearing: 56.06
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
