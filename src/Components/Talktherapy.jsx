import React from "react";
import './Talktherapy.css'
export default function Talktherapy() {
  return (
    <div className="Talktherapy">
      <h1 className="text-center  bg-br mb-3 mt-4">Seek Experts Help</h1>
      <h6 className="text-center bg-br">HumanHood x The Mood Space</h6>

      <section className="About_mood container-lg">
        <div className="row">
          <div className="col-md-6 ">
            <img src="/media/Mood.webp" alt=""  className="img-fluid  d-block  m-auto border-1 p-2 " />
          </div>
          <div className="col-md-6 mt-5 pt-md-5 ">
            <h4 className=" bg-br">About Mood Space</h4>
            <p className="  bg-br" >
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

      <section className="know_more  container-fluid ">
        <h1 className="text-center bg-br">Know More</h1>
        <div className="container row mx-auto">

          <div className="col-md-4">
            <div className="card border-0 rounded-0 my-4">
            <h6 className="bg-br">Humanhood x The Mood Space</h6>
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
            <h6 className="bg-br">About Therapy Sessions</h6>
            <p className="bg-br">
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

       <button  href="" className="btn m-auto d-block ">Come, let’s change the way the world looks at mental health and build a generation that sees no stigma!</button>

      </section>
    </div>
  );
}
