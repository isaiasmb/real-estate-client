import { useEffect, useState, useRef } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'
import { PrevIcon, NextIcon } from 'components/NavigationIcon'

import * as S from './styles'

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <NextIcon aria-label="next image" />,
  prevArrow: <PrevIcon aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
  maxThumbs?: number
}

const Gallery = ({ items, maxThumbs = 9 }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlider, setCurrentSlider] = useState(0)

  const modalSettings: SliderSettings = {
    ...commonSettings,
    slidesToShow: 1,
    beforeChange: (_, next) => setCurrentSlider(next + 1)
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      switch (key) {
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowRight':
          slider.current!.slickNext()
          break
        case 'ArrowLeft':
          slider.current!.slickPrev()
          break
      }
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const thumbs = items.slice(0, maxThumbs + 1)

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <S.Image
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            aria-label={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.ThumbList>
        {thumbs.map((item, index) => (
          <S.ThumbWrapper
            key={`thumb-${index}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          >
            <S.ThumbLink>
              {index + 1 === thumbs.length &&
                thumbs.length - 1 === maxThumbs && (
                  <S.LastThumbCover>+{maxThumbs}</S.LastThumbCover>
                )}
              <img role="button" src={item.src} alt={`List - ${item.label}`} />
            </S.ThumbLink>
          </S.ThumbWrapper>
        ))}
      </S.ThumbList>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.ModalHeader>
          <S.PaginationFraction>
            {!!currentSlider && currentSlider} / {items.length}
          </S.PaginationFraction>
          <S.Close
            role="button"
            aria-label="close modal"
            onClick={() => setIsOpen(false)}
          >
            <Close size={40} />
          </S.Close>
        </S.ModalHeader>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img
                key={`gallery-${index}`}
                src={item.src}
                alt={`Modal - ${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
