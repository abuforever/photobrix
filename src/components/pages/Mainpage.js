import React from 'react';

import arrowms from '../assets/arrowms.svg'
import brick from "../assets/brick.svg"
import clock from "../assets/clock.svg"
import child from "../assets/child.svg"
import img01 from "../assets/img-01.png"
import icimg from "../assets/ic_img.png"
import img02 from "../assets/img-02.png"
import img03 from "../assets/img-03.png"
import basket from "../assets/basket.png"
import iphone from "../assets/iphone.svg"

const Mainpage = () => {
    return (<>
        <div className="container container--main">
            <div className="main__content">
                <div>
                    <div className="content__text">
                        <h2 className="content__title">The best designer from your photos</h2>
                        <p className="content__caption">
                            Give a lot of emotions to yourself and your loved ones
                        </p>
                    </div>
                    <a href="/mosaic-step-1.html">
                        <button className="button button--primary">
                            Upload a photo
                            <div className="detail detail-2"></div>
                        </button>
                    </a>
                </div>

                {/* <div className="content__img">
                    <div className="detail detail-1"></div>
                    <div className="detail detail-3"></div>
                    <div className="detail detail-4"></div>
                    <div className="img__caption">
                        <span>Pull to compare the result and the original</span>
                        <div className="arrow"></div>
                    </div>

                    <cocoen-component><img src="./img/image-1.svg" slot="before"/><img src="./img/image-2.svg" slot="after"/></cocoen-component>
                </div> */}

                {/* <div className="main__content--mobile">
                    <div className="content__text">
                        <h2 className="content__title">The best designer from your photos</h2>
                        <p className="content__caption">
                            Give a lot of emotions to yourself and your loved ones
                        </p>
                    </div>
                    <div className="content__img">
                        <div className="detail detail-1"></div>
                        <div className="detail detail-3"></div>
                        <div className="detail detail-4"></div>
                        <div className="img__caption">
                            <span>Pull to compare the result and the original</span>
                            <div className="arrow"></div>
                        </div>

                        <cocoen-component><img src="../assets/image-1.svg" slot="before" /><img src="../assets/image-2.svg" slot="after" /></cocoen-component>


                    </div>
                    <button className="button button--primary">
                        <a href="/mosaic-step-1.html">Upload a photo</a>
                        <div className="detail detail-2"></div>
                    </button>
                </div> */}
                
            </div>
        </div>
        <div className="relative">
                    <div className="caption__wrapper">
                        <ul className="main__caption">
                            <li><img src={arrowms} alt="Arrow" /><span>50 x 50</span></li>
                            <li><img src={brick} alt="Brick" /><span>3900 parts</span></li>
                            <li><img src={clock} alt="Clock" /><span>10 hours of assembly</span></li>
                            <li><img src={child} alt="Child" /><span>14+</span></li>
                        </ul>
                    </div>
                    <div className="detail detail-5"></div>
                </div>
        <div className="steps" id="instruction">
            <div className="container container--steps">
                <div className="container__title steps__title">The process of preparing a diagram for assembling a mosaic</div>

                <div className="steps__block-container">
                    {/* Step 1 */}
                    <div className="steps__block">
                        <div className="arrow arrow--left"></div>
                        <div className="block__img">
                            <img src={img01} alt="Step 1" />
                        </div>
                        <div className="block__text">
                            <span className="block__number">1</span>
                            <div>
                                <p className="block__title">Upload a photo</p>
                                <span className="block__caption">
                                    Select the photo you want to collect from the gallery
                                </span>
                                <a href="/mosaic-step-1.html" className="button--secondary">
                                    <img src={icimg} alt="Upload a photo" />
                                    Upload a photo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="steps__block">
                        <div className="arrow arrow--right"></div>
                        <div className="block__img">
                            <img src={img02} alt="Step 2" />
                        </div>
                        <div className="block__text">
                            <span className="block__number">2</span>
                            <div>
                                <p className="block__title">Select fragment</p>
                                <span className="block__caption">
                                    Frame the part you want to assemble
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="steps__block">
                        <div className="block__img">
                            <img src={img03} alt="Step 3" />
                        </div>
                        <div className="block__text">
                            <span className="block__number">3</span>
                            <div>
                                <p className="block__title">Assemble the puzzle</p>
                                <span className="block__caption">
                                    Assemble the picture according to the generated scheme
                                </span>
                                <a href="https://www.wildberries.ru/catalog/155355763/detail.aspx" target="_blank" rel="nofollow" className="button--secondary">
                                    <img src={basket} alt="Buy a set" />
                                    Buy a set
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="app">
            <div className="container container--app">
                <div className="app__text">
                    <p className="app__title">Application for generating mosaics from photos</p>
                    <span className="app__caption">
                        Collect your picture or one of those available in the application
                    </span>
                    <div className="app__buttons">
                        <a href="https://apps.apple.com/us/app/%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-photobrix/id6447461317" target="_blank" rel="nofollow">
                            <button className="button button--primary">Download on the App Store</button>
                        </a>
                        <a href="#">
                            <button className="button button--secondary">Get it on Google Play</button>
                        </a>
                    </div>
                </div>
                <div className="app__img">
                    <img src={iphone} alt="iPhone" />
                </div>
            </div>
        </div>
        <div className="left-images">
            <img src="../assets/left-1.png" alt="Left Image 1" />
            <img src="../assets/left-2.png" alt="Left Image 2" />
        </div>
        <div className="right-images">
            <img src="../assets/right-1.png" />
            <img src="../assets/right-2.png" />
        </div>



    </>
    );
};

export default Mainpage;
