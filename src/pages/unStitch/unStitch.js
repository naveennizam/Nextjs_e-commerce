import Link from 'next/link'
import { useState } from 'react'

const Unstitch = () => {
 

  return (
    <>

      <a href="https://www.gulahmedshop.com/unstitched-fabric" className=' py-0'>
        <img src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/wb.jpg" className="img-fluid py-0" alt="Men Unstitched" />
      </a>
      <div className=' cdz-banner py-0'>

        <div className='row d-flex justify-content-evenly flex-wrap '>
          <div className="col-md-12  " >
         
            <Link href={'/front/onefront'}>  <img style={{ width: '49.6%' }} className="pe-0 ps-2 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/01.jpg" alt="..." /> </Link>
            <Link href={'/front/twofront'}>  <img style={{ width: '49%' }} className="pe-0 ps-2 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/02.jpg" alt="..." /> </Link>
          </div>
        </div>

        <div className='row '>
          <div className="col-md-12 " >
            <Link href={'/front/threefront'}>  <img style={{ width: '49.6%' }} className="pe-0 ps-2  py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/03.jpg" alt="..." /></Link>
            <Link href={{ pathname: '/front/premiumfront/',query:`page=${1}` }}>    <img style={{ width: '49%' }} className="pe-0 ps-2  py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/06.jpg" alt="..." /></Link>
          </div>  
        </div>

      </div>


    </>
  )
}

export default Unstitch