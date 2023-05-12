var config = {
    style: 'mapbox://styles/thulemaps/clhjqtbzz00jn01pp0uqf9iap',
    accessToken: 'pk.eyJ1IjoidGh1bGVtYXBzIiwiYSI6ImNqM3F0Y2JnaDAxYnQzM28xZDVwazhhaDEifQ.pofHlcCOkr9OXfKsMYAAFw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Glaciers of Glacier National Park',
    subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'full',
            title: 'Reyðarfjörður',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Rei%C3%B0arfj%C3%B6r%C3%B0ur04.jpg',
            description: 'The town is at the bottom of the eponymous fjord, the largest on the east coast of Iceland. Like most other towns in the East Fjords, it is surrounded by mountains, of which the highest is about 972 metres (3,189 ft). Although the climate is particularly rainy and foggy, on clear summer days it often has the highest temperatures in Iceland',
            location: {
                center: [-14.20231, 65.04131],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'tracks',
                    opacity: 1
                },
                {
                    layer: 'tracks',
                    opacity: 0.25
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
            id: 'harrison1998',
            alignment: 'left',
            title: 'test',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park. Compared to many of the vanishing glaciers in Glacier National Park, Harrison Glacier has a much higher altitude accumulation zone (approximately 9,000 feet (2,700 m)) which has allowed it to maintain some equilibrium in its glacier mass balance.',
            location: {
              center: [-14.20231, 65.04131],
                zoom: 12.83,
                pitch: 67.50,
                bearing: -18.40
            },
           onChapterEnter: [
                {
                    layer: 'trakcs',
                    opacity: 0.25
                },
                {
                    layer: 'tracks',
                    opacity: 0.25
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
            id: 'harrison2015',
            alignment: 'left',
            title: 'Harrison Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).',
            location: {
                 center: [-14.20672, 65.03109],
                zoom: 18.18,
                pitch: 70.50,
                bearing: -48.80
            },
            onChapterEnter: [
                {
                    layer: 'traffic',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'traffic',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            alignment: 'left',
            title: 'Blackfoot Glacier, 1998',
            image: '',
            description: 'Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.',
            location: {
                center: [-14.01327, 65.04532],
                zoom: 14.16,
                pitch: 73.50,
                bearing: -88.80
            },
            onChapterEnter: [
                {
                    layer: 'traffic',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'traffic',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot2015',
            alignment: 'left',
            title: 'Blackfoot Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
            location: {
                center: [-14.21838, 65.03231],
                zoom: 17.89,
                pitch: 70.19,
                bearing: 56.06
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz1998',
            alignment: 'left',
            title: 'Agassiz Glacier, 1998',
            image: '',
            description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
            location: {
                center: [-14.23760, 65.03443],
                zoom: 16.28,
                pitch: 64.94,
                bearing: 29.70
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            alignment: 'left',
            title: 'Agassiz Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
            location: {
                center: [-14.25760, 65.03443],
                zoom: 16.28,
                pitch: 60.94,
                bearing: 29.70
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow1998',
            alignment: 'left',
            title: 'lacier, 1998',
            image: '',
            description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
            location: {
                center: [-14.24760, 65.02443],
                zoom: 16.28,
                pitch: 64.94,
                bearing: 59.70
            },
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow2015',
            alignment: 'left',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: [-14.24360, 65.02493],
                zoom: 12.28,
                pitch: 24.94,
                bearing: 59.70
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            alignment: 'left',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            alignment: 'left',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            alignment: 'left',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};