import * as S from './styles'

import theme from 'styles/theme'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({
  color = 'black',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="40 30 790 335"
      role="img"
      aria-label="Real Estate"
    >
      <path
        d="M791.93,94.32h-7.58c-8.16,0-12.24,4.08-12.24,12.24v69.63h32.05v-69.63
        C804.16,98.4,800.08,94.32,791.93,94.32z"
      />
      <path
        d="M217.4,94.32h-7.57c-8.16,0-12.24,4.08-12.24,12.24v34.14c2.73-4.01,5.43-8.02,8.06-12.1
        c1.36-2.11,1.21-5.19,1.78-7.82c0.36-1.67,0.23-3.99,1.27-4.82c1.06-0.84,3.3-0.27,5.02-0.23c2.19,0.06,4.37,0.18,6.56,0.32
        c1.7,0.1,3.98-0.35,4.93,0.56c0.97,0.93,0.79,3.22,0.83,4.92c0.06,2.91-0.03,5.83-0.2,8.73c-0.1,1.7,0.09,4.03-0.89,4.91
        c-1.02,0.9-3.3,0.42-5.03,0.49c-2.66,0.1-6.2-0.92-7.83,0.41c-5.09,4.16-9.98,8.51-14.49,13.2v16.03
        c9.96-7.02,20.51-11.73,32.05-12.7v-46.05C229.64,98.4,225.56,94.32,217.4,94.32z"
      />
      <path
        fill={theme.colors[color]}
        d="M229.64,215.55v62.61h27.97v-67.63c-4.17,2.08-9.08,3.41-14.59,3.85C238.58,214.73,234.13,215.13,229.64,215.55z"
      />
      <path
        fill={theme.colors[color]}
        d="M214.79,192.85c-2.43-0.32-5.19-1.55-7.24-0.82c-22.83,8.15-32.67,28.67-32.26,49.76c0.07,3.4,5.6,6.7,9.11,10.62
        c-2.79,1.12-6.94,2.78-12.58,5.04c1.62,5.4,3.42,11.4,5.26,17.54c-1.12-0.16-2.65-0.38-4.41-0.64c-0.36,1.27-0.7,2.55-1.04,3.81
        h25.96v-76.63h15.08c0.28-0.7,0.59-1.39,0.95-2.08C214.59,197.55,214.43,195.06,214.79,192.85z"
      />
      <path
        fill={theme.colors[color]}
        d="M180.73,173.12c-0.92,1.97-1.47,4.12-2.8,7.96c6.35-5.21,11.16-9.38,16.2-13.25c1.14-0.88,2.3-1.72,3.45-2.53v-16.03
        C190.85,156.27,184.99,164.03,180.73,173.12z"
      />
      <path
        fill={theme.colors[color]}
        d="M179.18,163.32c-0.59,1.89-1.15,3.78-0.72,6.19c2.44-3.84,4.78-7.75,7.32-11.52c3.9-5.79,7.88-11.52,11.81-17.29v-34.14
        c0-8.16,4.08-12.24,12.24-12.24h7.57c8.16,0,12.24,4.08,12.24,12.24v46.05c5.8-0.49,11.84-0.03,18.19,1.55
        c3.64,0.91,6.89,2.18,9.78,3.76v-53.1c0-23.89-11.17-35.84-33.51-35.84h-20.98c-7.12,0-13.1,1.23-17.95,3.66
        c1.4,4.98,2.45,10.12,3.16,15.41C191.82,113.92,186.84,138.79,179.18,163.32z"
      />
      <polygon
        fill={theme.colors[color]}
        points="272.17,94.32 298.97,94.32 298.97,278.16 326.94,278.16 326.94,94.32 353.75,94.32 353.75,68.97 272.17,68.97 	"
      />
      <polygon
        fill={theme.colors[color]}
        points="432.12,157.83 397.74,157.83 397.74,68.97 369.77,68.97 369.77,278.16 397.74,278.16 397.74,183.18 432.12,183.18
        432.12,278.16 460.09,278.16 460.09,68.97 432.12,68.97 	"
      />
      <polygon
        fill={theme.colors[color]}
        points="514.28,68.97 486.31,68.97 486.31,278.16 552.73,278.16 552.73,252.81 514.28,252.81 	"
      />
      <polygon
        fill={theme.colors[color]}
        points="568.76,278.16 638.1,278.16 638.1,252.81 596.73,252.81 596.73,183.18 633.44,183.18 633.44,157.83 596.73,157.83
        596.73,94.32 638.1,94.32 638.1,68.97 568.76,68.97 	"
      />
      <polygon
        fill={theme.colors[color]}
        points="648,94.32 674.81,94.32 674.81,278.16 702.77,278.16 702.77,94.32 729.58,94.32 729.58,68.97 648,68.97 	"
      />
      <path
        fill={theme.colors[color]}
        d="M798.63,68.97h-20.98c-22.34,0-33.51,11.95-33.51,35.84v173.35h27.97v-76.63h32.05v76.63h27.97V104.81
        C832.13,80.92,820.96,68.97,798.63,68.97z M804.16,176.19h-32.05v-69.63c0-8.16,4.08-12.24,12.24-12.24h7.58
        c8.16,0,12.24,4.08,12.24,12.24v69.63H804.16z"
      />
      <path
        fill={theme.colors[color]}
        d="M197.59,176.19h32.05V152.6c-11.53,0.97-22.08,5.67-32.05,12.7V176.19z"
      />
      <path
        fill={theme.colors[color]}
        d="M167.66,106.14c0-16.27,5.19-26.99,15.56-32.18c-3.76-13.38-10.18-25.56-20.23-36.08c-7.26-7.59-8.96-7.97-15.63,0.34
        c-6.07,7.55-11.95,15.66-15.9,24.43c-10.72,23.77-10.43,48.78-5.4,73.84c2.3,11.47,5.59,22.74,8.65,34.99
        c-1.17-1.46-1.84-2.19-2.39-3c-8.76-13.02-17.62-25.99-26.13-39.17c-1.23-1.91-0.71-4.92-1.15-7.39c-0.3-1.67-0.4-3.97-1.48-4.75
        c-1.11-0.8-3.3-0.11-5.02-0.02c-2.02,0.11-4.03,0.3-6.05,0.42c-1.87,0.12-4.18-0.4-5.46,0.52c-0.93,0.67-0.62,3.23-0.63,4.95
        c-0.01,2.72,0.15,5.45,0.27,8.17c0.08,1.72-0.42,4.29,0.47,4.96c1.29,0.96,3.62,0.48,5.49,0.72c2.98,0.37,7.05-0.28,8.74,1.42
        c8.9,8.91,17.52,18.16,25.55,27.86c3.34,4.04,4.98,9.49,7.4,14.3c-0.37,0.18-0.73,0.35-1.1,0.53
        c-7.24-5.51-14.29-11.29-21.77-16.47c-14.92-10.33-31.26-13.39-48.94-8.55c-16.84,4.62-26.21,20.3-22.24,37.43
        c3.13,13.5,13.75,21.26,29.92,22.35c10.24,0.69,20.45,1.92,31.3,2.96c0.14-5.41,0.73-11.92-2.9-18.16
        c-1.04-1.79-0.66-4.4-0.93-6.64c2.28-0.27,4.6-0.93,6.83-0.69c1.94,0.21,3.84,1.31,5.64,2.25c15.94,8.32,24.26,21.81,26.6,39.35
        c1.62,12.12,1.35,12.66-11.12,18.05c5.49,2.15,9.86,3.86,15.18,5.94c-1.88,5.77-3.78,11.6-5.67,17.39
        c1.53-0.08,3.22-0.17,4.64-0.24c1.34,4.61,2.26,8.81,3.78,12.79c1.99,5.2,5.25,9.43,11.47,9.53c6.55,0.1,9.89-4.31,11.94-9.72
        c1.11-2.94,1.91-5.99,2.72-9.09h-2.01L167.66,106.14L167.66,106.14z"
      />
      <text
        fontVariant="small-caps"
        fontSize="77px"
        fontWeight="600"
        fill={theme.colors[color]}
        letterSpacing="28"
        transform="matrix(1 0 0 1 169.5381 359.4346)"
      >
        management
      </text>
      <path
        fill={theme.colors[color]}
        d="M212.67,201.54c0,0,16.3,2.52,16.97,14.02s27.97-5.03,27.97-5.03s-29.26-26.48-49.15-18.44"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
