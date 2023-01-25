var config = {
    style: 'mapbox://styles/thulemaps/clbakxwlt001a15uykj4gmsd3',
    accessToken: 'pk.eyJ1IjoidGh1bGVtYXBzIiwiYSI6ImNqM3F0Y2JnaDAxYnQzM28xZDVwazhhaDEifQ.pofHlcCOkr9OXfKsMYAAFw',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl2',
            alignment: 'right',
            title: 'FT week 2 2023',
            image: '',
            description: 'Gtting around Philadelphia on two wheels is fast, fun, and cheap. As a typical East Coast large city, the urban core is dense, so there is a lot within reach of a 15 minute ride... even mountain bike trails. Paired with the public transit infrastructure, cycling can be more efficient and much less expensive than driving (and parking) a car.',
            location: {
                center: [150.89486, -33.85099],
                zoom: 7.14,
                pitch: 50.50,
                bearing: -1.24
            },
            onChapterEnter: [
                {
                    layer: 'Traffic',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'Traffic',
                    opacity: 0
                }
            ]
        },
		{
            id: 'phl',
            alignment: 'right',
            title: 'Monday - Wetherill Park HQ - FT3',
            image: '',
            description: 'Gtting around Philadelphia on two wheels is fast, fun, and cheap. As a typical East Coast large city, the urban core is dense, so there is a lot within reach of a 15 minute ride... even mountain bike trails. Paired with the public transit infrastructure, cycling can be more efficient and much less expensive than driving (and parking) a car.',
            location: {
                center: [150.89486, -33.85099],
                zoom: 15.14,
                pitch: 50.50,
                bearing: -25.24
            },
            onChapterEnter: [
                {
                    layer: 'Traffic',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'Traffic',
                    opacity: 0
                }
            ]
        },
        {
            id: 'GOLF',
            alignment: 'right',
            title: 'Tuesday - Sydney Untied - FT4',
            image: '',
            description: 'Philadelphia has XX miles of bike lanes, XX miles of which are protected. Drivers are getting more used to sharing the road, but ride defensively.',
            location: {
                center: [150.87418, -33.87599],
                zoom: 15.61,
                pitch: 51.50,
                bearing: -14.04
            },
            onChapterEnter: [
                {
                    layer: 'contours',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Wednesday - Lilys - FT4',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                 center: [150.93857, -33.77285],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'walking',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'walking',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Friday - Sydney Untied - FT4',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                 center: [150.87418, -33.87599],
                zoom: 15.61,
                pitch: 51.50,
                bearing: -14.04
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
            title: 'Saturday - Wetherill Park HQ - FT3',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                 center: [150.89486, -33.85099],
                zoom: 15.14,
                pitch: 50.50,
                bearing: -25.24
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
        
        }
    ]
};