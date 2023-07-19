var config = {
    style: 'mapbox://styles/thulemaps/clhjqtbzz00jn01pp0uqf9iap',
    accessToken: 'pk.eyJ1IjoidGh1bGVtYXBzIiwiYSI6ImNqM3F0Y2JnaDAxYnQzM28xZDVwazhhaDEifQ.pofHlcCOkr9OXfKsMYAAFw',
    showMarkers: true,
    theme: 'dark',
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
                center: [-14.19139, 65.04553],
                zoom: 5.63,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-streets',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-streets',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Reyðarfjörður',
            image: 'https://ravenmaps.github.io/rf1.png',
            description: 'Reyðarfjörður er kaupsstaður á Austfjörðum og dregur nafn sitt af samnefndum firði. Þorðið hét upphaflega Búðareyri, en er nú kallaður Reyðarfjörður. Árið 2019 var íbúafjöldi um 1.350 (Hagstofa). Reyðarfjörður er hluti af sveitarfélaginu Fjarðabyggð. Hafnaraðstaða er mjög góð í firðinum frá náttúrunnar hendi. Álver Alcoa-Fjarðaráls er í firðinum.Stutt er í næstu byggðarkjarna; 13km á Eskifjörð, þar sem keyrt er yfir Hólmaháls; 18km á Fáskrúðsfjörð ef keyrt er í gegnum Fáskrúðsfjarðargöngin, sem voru tekin í notkun árið 2005; og 32km í Egilsstaði',
            location: {
                  center: [-14.20794, 65.03622],
				  zoom: 13.2,
				  pitch: 0,
				  bearing: 0
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
            title: 'Golfvöllur Kollur',
			image: 'https://ravenmaps.github.io/rf2.png',
             description: 'Kollur er heiti golfvallar Golfklúbbs Fjarðabyggðar, og er staðsettur í hlíðinni rétt innan við bæinn á Reyðarfirði. Völlurinn er 9 hola, par 70 og umvafinn fallegu umhverfi. Þá þykir völlurinn þægilegur yfirferðar<a href="https://momento360.com/e/u/917e59ced2d946818e627b860574fbcd?utm_campaign=embed&utm_source=other&heading=-1.8&pitch=-15.3&field-of-view=75&size=medium&display-plan=true/"><p>360 sjonarhorn!</a></p>',
            location: {
                 center: [-14.24271, 65.03597],
				 zoom: 14.71,
				 pitch: 0,
				 bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'braut1',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut1',
                    opacity: 0
                }
            ]
        },
		
		
        {
            id: 'belmont',
            alignment: 'right',
            title: 'braut 1',
            //image: 'https://ravenmaps.github.io/braut1_map.png',
            description: '<iframe width="330" height="215" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <p>Par 4<br> Gulir 230m <br>Raudir 190m. </p>',
            location: {
               center: [-14.25580, 65.03370],
				 zoom: 16.81,
				 pitch: 0,
				 bearing: -102.4
            },
            onChapterEnter: [
                {
                    layer: 'braut1',
                    opacity: 0.5
                },
				{
                    layer: 'braut4',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut1',
                    opacity: 0
                },
				{
                    layer: 'braut4',
                    opacity: 0.5
                }

            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'braut 2',
            //image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="360" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 4<br> Gulir 311m <br>Raudir 260m.</p>',
            location: {
               center: [-14.25462, 65.03499],
			   zoom: 16.15,
			   pitch: 0,
			   bearing: 15.13	
            },
            onChapterEnter: [
                {
                    layer: 'braut2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut2',
                    opacity: 0
                }
            ]
        },
		{
            id: 'wiss2',
            alignment: 'right',
            title: 'braut 3',
            //image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="330" height="315" src="https://momento360.com/e/u/96094e83e2e34cbebc7df3280d57eba1?utm_campaign=embed&utm_source=other&heading=170.2&pitch=-0.2&field-of-view=75&size=medium&display-plan=true"</iframe><p>Par 3<br> Gulir 156m <br>Raudir 120m.</p>',
            location: {
               center: [-14.25482, 65.03759],
zoom: 17.27,
pitch: 0,
bearing: -60.9
            },
            onChapterEnter: [
                {
                    layer: 'braut3',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut3',
                    opacity: 0
                }
            ]
        },
{
            id: 'wiss3',
            alignment: 'right',
            title: 'braut 4',
            //image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=208" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 5<br> Gulir 440m <br>Raudir 354m.</p>',
            location: {
center: [-14.24960, 65.03724],
zoom: 15.93,
pitch: 0,
bearing: 90.32
            },
            onChapterEnter: [
                {
                    layer: 'braut4',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut4',
                    opacity: 0
                }
            ]
        },
		{
            id: 'wiss5',
            alignment: 'right',
            title: 'braut 5',
            //image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=287" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 4<br> Gulir 271m <br>Raudir 273m.</p>',
            location: {
center: [-14.24760, 65.03739],
zoom: 16.58,
pitch: 0,
bearing: -94.48
            },
            onChapterEnter: [
                {
                    layer: 'braut5',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut5',
                    opacity: 0
                }
            ]
        },
{
            id: 'wiss6',
            alignment: 'right',
            title: 'braut 6',
            //image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=350" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 3<br> Gulir 102m <br>Raudir 102m.</p>',
            location: {
center: [-14.25355, 65.03667],
zoom: 17.65,
pitch: 0,
bearing: -152.87
            },
            onChapterEnter: [
                {
                    layer: 'braut6',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut6',
                    opacity: 0
                }
            ]
        },
		{
            id: 'wiss7',
            alignment: 'right',
            title: 'braut 7',
           // image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=381" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 5<br> Gulir 425m <br>Raudir 365m.</p>',
            location: {
center: [-14.25817, 65.03694],
zoom: 16.10,
pitch: 0,
bearing: -104.88
            },
            onChapterEnter: [
                {
                    layer: 'braut7',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut7',
                    opacity: 0
                }
            ]
        },
{
            id: 'wiss8',
            alignment: 'right',
            title: 'braut 8',
          //  image: 'https://res.cloudinary.com/itb-database/image/upload/s--pqzWfcf4--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/Places/yvmbjsssvqbnfpymwwge',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=470" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 4<br> Gulir 390m <br>Raudir 273m.</p>',
            location: {
center: [-14.26061, 65.03451],
zoom: 16.23,
pitch: 0,
bearing: 149.05
            },
            onChapterEnter: [
                {
                    layer: 'braut8',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'braut8',
                    opacity: 0
                }
            ]
        },

        {
            id: 'pennypack1',
            alignment: 'right',
            title: 'braut 9',
            description: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYzl_7_dTQI?start=539" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Par 3<br> Gulir 107m <br>Raudir 79m.</p>',
            location: {
               
center: [-14.25473, 65.03340],
zoom: 17.46,
pitch: 0,
bearing: 96.94
            },
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        }
    ]
};
