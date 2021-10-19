import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className='m-3 row'>
            <div className="col-md-6 about-text text-start">
                <h1>ABOUT <span>ICONIC</span>  FITNESS</h1>
                <p>Passionate about overcoming obstacles and celebrating the rewards of hard work. At Iconic Fitness, the workouts are challenging but accessible. Our athletes leave each day feeling accomplished: stronger, faster, fitter – healthier.
                    <br />
                    <h5 className='mt-2'>THE BEST COACHES IN DUBAI</h5>
                    <p>
                        Our highly-qualified coaches are dedicated to you with each and every session they lead. We understand your goals – we’ve been there and we’ve coached members through every imaginable fitness goal.
                        We don’t use a “1-size-fits-all” approach here.  We find out about YOU, then tailor everything to put you in the best position to achieve YOUR GOALS.
                    </p>
                    <h5>NOT JUST ABOUT TRAINING</h5>
                    <p>
                        We know that training is only 1 small piece of the puzzle to getting into great shape.  So our programs are designed to help with all of the OTHER stuff that we often neglect:
                        Nutrition <br />
                        Sleep <br />
                        Stress <br />
                        Lifestyle
                    </p>
                </p>
            </div>
            <div className="col-md-6">
                <img className='about-img' src="https://iconicfitness.ae/wp-content/uploads/2020/08/Photo-83-1536x1024.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;