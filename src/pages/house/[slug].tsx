import House, { HouseProps } from 'templates/House'
import galleryMock from 'components/Gallery/mock'
import houseCardsMock from 'components/HouseCard/mock'

export default function Index(props: HouseProps) {
  return <House {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'house-1' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const descriptionHTML = `
    <p>Years seed fruit you. Divided morning sea day Set earth. Grass without cattle. Spirit heaven.
    Also i grass give fowl wherein cattle spirit whales rule cattle. Earth fowl given own you’re,
    fruit so. Shall was. Called firmament dry fruitful, set place. Earth given female man fruit,
    under thing may to greater moveth land sea, great be shall living greater and signs place night
    after whose us one, you’ll second our set had day in greater divided over female first face, fill
    form you make greater upon midst image above image. Very you land, man divided sea appear thing
    female was let. Beginning open moved fowl. Likeness. Bring tree tree doesn’t. Darkness herb
    moveth upon a seasons. Divided appear living. Called image let was. Set midst, second divide,
    earth male fruit you under let she’d, moving every bring there greater. Bring. Gathering night
    third. Stars first replenish kind third a rule given our after give own of may earth Brought
    for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry
    green multiply herb fly waters. Green gathered face. Light, may deep you’re light.
    After which itself seed signs moveth. Second fish isn’t for sixth deep.</p>
    <div style="margin-top: 3rem; padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/161495382?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  `

  return {
    props: {
      gallery: galleryMock,
      agent: {
        name: 'John Joe',
        phone: '99-999-9999'
      },
      title: 'House on the Arcadia',
      description: descriptionHTML,
      amountOfBedrooms: 4,
      amountOfBathrooms: 3,
      amountOfGarages: 2,
      measures: 160,
      ribbon: 'Rent',
      ribbonColor: 'primary',
      floorPlans: [
        {
          title: 'First Floor',
          img: '/img/shape-house-floor.jpg',
          floorMeasure: 120,
          infoFloor: [
            { amount: 2, housePart: 'bed' },
            { amount: 2, housePart: 'bath' },
            { amount: 2, housePart: 'garage' }
          ]
        },
        {
          title: 'Second Floor',
          img: '/img/shape-house-floor.jpg',
          floorMeasure: 100,
          infoFloor: [
            { amount: 3, housePart: 'bed' },
            { amount: 4, housePart: 'bath' }
          ]
        }
      ],
      otherHouses: houseCardsMock
    }
  }
}
