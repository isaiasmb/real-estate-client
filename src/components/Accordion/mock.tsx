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
    content: <p>First Floor Content</p>
  },
  {
    title: 'Second Floor',
    header: Header,
    content: <p>Second Floor Content</p>
  },
  {
    title: 'Third Floor',
    header: Header,
    content: <p>Third Floor Content</p>
  }
] as AccordionType[]
