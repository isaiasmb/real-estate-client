import { AccordionType } from '.'

export const Header = (
  <div style={{ display: 'flex' }}>
    <div style={{ marginLeft: '15px' }}>
      <span>
        <b>2</b> Beds
      </span>
    </div>
    <div style={{ marginLeft: '15px' }}>
      <span>
        <b>1</b> Bath
      </span>
    </div>
    <div style={{ marginLeft: '15px' }}>
      <span>
        <b>120</b> m2
      </span>
    </div>
  </div>
)

export default [
  {
    title: 'First Floor',
    header: Header,
    content: (
      <div>
        <img style={{ width: '100%' }} src="/img/shape-house-floor.jpg" />
        <p>First Floor Content</p>
      </div>
    )
  },
  {
    title: 'Second Floor',
    header: Header,
    content: (
      <div>
        <img style={{ width: '100%' }} src="/img/shape-house-floor.jpg" />
        <p>Second Floor Content</p>
      </div>
    )
  },
  {
    title: 'Third Floor',
    header: Header,
    content: (
      <div>
        <img style={{ width: '100%' }} src="/img/shape-house-floor.jpg" />
        <p>Third Floor Content</p>
      </div>
    )
  }
] as AccordionType[]
