import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='m-0 row'>
            <h1 className='p-3'> <span>Body</span>  and Strength Articles</h1>
            <div className="p-3 col-md-7 text-start blog-trend">
                <h3>Newest Articles</h3>
                <div>
                    <img className='blog-img' src="https://c4.wallpaperflare.com/wallpaper/692/659/618/man-workout-gym-working-wallpaper-preview.jpg" alt="" />
                    <h3>Workouts</h3>
                    <p>Why Your Biceps Are Not Growing? Time To Know Your Mistakes</p>
                    <button>Read More</button>

                </div>
                <div>
                    <img className='blog-img' src="https://bodyandstrength.com/Upload/site/z9vhD_cover.jpg" alt="" />
                    <h3>Nutrition</h3>
                    <p>Top Air-Fryer Recipes for Weight-Loss</p>
                    <button>Read More</button>

                </div>
                <div>
                    <img className='blog-img' src="https://bodyandstrength.com/Upload/site/mOFZr_cover.jpg" alt="" />
                    <h3> Supplementation</h3>
                    <p>How Multivitamins Help Your Workout to Be Effective</p>
                    <button>Read More</button>


                </div>
                <div>
                    <img className='blog-img' src="https://bodyandstrength.com/Upload/site/hi1VS_cover%20.jpg" alt="" />
                    <h3> Fitness News</h3>
                    <p>Khelo India Youth Games to Postpone in February 2022</p>
                    <button>Read More</button>



                </div>
                <div>
                    <img className='blog-img' src="https://bodyandstrength.com/Upload/site/bFme7_cover.jpg" alt="" />
                    <h3> Transformations</h3>
                    <p>Surin Sengar: Work even when Nobody is Watching, Be Self-Motivated!</p>
                    <button>Read More</button>




                </div>
            </div>
            <div className="p-3 col-md-5 text-start blog-trend">
                <h3>TRENDING ON BODY AND STRENGTH</h3>
                <hr />
                <div className='d-flex'>
                    <div>
                        1
                    </div>
                    <div>
                        <h4>Does No Salt And No Carb Diet Help In Getting Your Dream Body?</h4>
                        <p>Do you really have to abandon you taste for salt and carbohydrates to get your dream body? After all...</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        2
                    </div>
                    <div>
                        <h4>How Healthy Is Vegan Diet?</h4>
                        <p>Vegan diets are growing in popularity. Everyday more people are switching their diet to veganism, ei...</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        3
                    </div>
                    <div>
                        <h4>What You Ought To Know About Bleeding Patterns In Women</h4>
                        <p>Bleeding during the menstrual cycle in women is viewed as a significant indicator of generative heal...</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        4
                    </div>
                    <div>
                        <h4>Exercise Because Being Lazy Was Never A Choice!</h4>
                        <p>This new-year beat laziness with the clever tips given in this article. Be your own guide to how to ...</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        5
                    </div>
                    <div>
                        <h4>Dilpreet Bhattal's Athletic Transformation</h4>
                        <p>People in the community were not used to seeing an East Indian female participate in bodybuilding sh...</p>
                        <button>Read More</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;