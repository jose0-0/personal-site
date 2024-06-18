'use client'
import {useSwiper} from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { WorkSliderBtnProps } from '@/types';

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}: WorkSliderBtnProps) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles}/>
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles}/>
        </button>

    </div>
  )
}

export default WorkSliderBtns
