import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Donwload CV</a>
            <a href="#contact" className='btn btn-primary'>Wanna chat</a>
        </div>
    )
}

export default CTA