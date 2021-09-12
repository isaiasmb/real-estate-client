import { Story, Meta } from '@storybook/react/types-6-0'
import Parallax, { ParallaxProps } from '.'

export default {
  title: 'Parallax',
  component: Parallax,
  args: {
    img: 'https://source.unsplash.com/user/therawhunter/YKqJ1ejmX5E/1920x1080',
    height: 500,
    title: 'Sed ut perspiciatis unde omnis iste natus error',
    description:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.'
  }
} as Meta

export const Default: Story<ParallaxProps> = (args) => (
  <div
    style={{
      height: '150rem',
      width: '100wv'
    }}
  >
    <div style={{ marginTop: '20rem' }}>
      <Parallax {...args} />
    </div>
  </div>
)
