import React from "react";
import './Talktherapy.css'
export default function Talk_Therapy() {
  return (
    <div className="Talk_Therapy">
      <h1 className="text-center">Seek Experts Help</h1>
      <h6 className="text-center">HumanHood x The Mood Space</h6>

      <section className="About_mood container">
        <div className="row">
          <div className="col-md-6">
            <img src="/media/Mood.webp" alt=""  className="image-fluid" style={{width:"500px",height:"640px"}}/>
          </div>
          <div className="col-md-6 mt-5">
            <h4 className="my-5">About Mood Space</h4>
            <p className="mb-5">
              The Mood Space is an online talk-therapy platform providing
              comprehensive mental health services to individuals and
              corporates, in a cost-effective, accessible, and confidential
              manner. They are on a mission to make quality mental health care
              accessible to South Asians, everywhere, any time, in all languages
              & all devices.
            </p>
            <button className="btn button rounded-0">Book A Session</button>
          </div>
        </div>
      </section>

      <section className="know_more container-fluid py-5">
        <h1 className="text-center">Know More</h1>
        <div className="container row mx-auto">

          <div className="col-md-4">
            <div className="card border-0 rounded-0 my-4">
            <h6>Humanhood x The Mood Space</h6>
            <p>
              This collaboration is an attempt to strengthen our vision of a
              better well-being for the humans of our community. For all those
              who want to seek expert help, this collaborative platform is a
              safe space for you!
            </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 rounded-0 my-4">
            <h6>About Therapy Sessions</h6>
            <p>
              Our therapy sessions are customised to help individuals address
              their mental health concerns and improve their emotional
              well-being using a trauma-informed and queer as well as a
              caste-affirmative lens.
            </p>
            </div>
           
          </div>


          <div className="col-md-4">
            <div className="card border-0 rounded-0 my-4">
            <h6>Impact of The Mood Space</h6>
            <p>
              100+ therapists from renowned institutes proficient in 9+ Indian
              languages 15,000+ South Asians served globally 15+ corporate
              wellness programs delivered 40,000+ lives touched
            </p>
            </div>
            
          </div>


        </div>

       <button href="" className="btn button border-0 rounded-0 text-center">Come, let’s change the way the world looks at mental health and build a generation that sees no stigma!</button>

      </section>
    </div>
  );
}
