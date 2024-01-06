import React from 'react'

export default function JoinCommunity() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col ">
                <h2 className='text-center my-5 text-906'>SMALL STEPS BY HUMANHOOD</h2>
                <p className='text-center  text-center d-block m-auto px-5 text-906'>This well-being community is an attempt to bring like-minded people together who are willing to take the small steps towards their well-being, personal growth and healthier lifestyles. We hope to make this community a safe space, a source of motivation and treasure of free self help resources.</p>
                <button className='btn button d-block  m-auto mt-2 rounded-0 mt-5'>Join the Community for free</button>
            </div>
            
          
        </div>
        <div className="container mt-5">
        <div className="row mt">
              <div className="col-md-6">
                <img src="img/smallstep.webp" alt="" className='img-fluid d-block  m-auto' />
              </div>
              <div className="col-md-6 lh-lg mt-3">
                <h4 className='text-906'>How to get access to our exclusive community?</h4>
                <p className='lh-lg'>- Fill in an application form to become a part of this</p>
                <p>- We shall then screen the applications to select members</p>
                <p>- Lastly, we shall send an email with the joining details to all selected members</p>
                <button className='btn button rounded-0'>Fill in the form to apply for small steps community by  humandhood</button>
              </div>
            </div>
        </div>

        <div className="row">
          <h1 className='text-center mt-5 mb-4'>Past Activities</h1>
          <div className="col-md-4 col-12">
          <img src="img/bookexch.webp"class="img-fluid w-75 d-block mt-2 m-auto" alt="..."/>

          </div>
          <div className="col-md-4">
          <img src="img/vision.webp" class="img-fluid w-75 d-block mt-2  m-auto" alt="..."/>
          </div>
          <div className="col-md-4">
          <img src="img/sundaytime.webp" class="img-fluid w-75 d-block mt-2   m-auto" alt="..."/>
          </div>
        </div>
          <button className='btn button mt-3 d-block m-auto rounded-0'>Become a part of our well-being community now!</button>
      </div>
    </div>
  )
}
