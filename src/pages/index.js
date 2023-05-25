import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home({ posts }) {
    const [score, setScore] = useState(0);
    const [title, setTitle] = useState('Hello World');
    const [content, setContent] = useState('Hi This is hello world');
    const [image, setImage] = useState('/slide/slide_1.png');


    const btn_action = (type) => {


        switch (type) {
            case "increase":
                ((score + 1) < Object.keys(posts).length) ? setScore(score + 1) : null;
                break;
            case "decrease":
                (score > 0) ? setScore(score - 1) : null;
                break;
            case "reply":
                setScore(1);
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        console.log("Score Now: " + score + ", Object Length: " + Object.keys(posts).length);
        console.log();
        setTitle((posts[score].title));
        setContent((posts[score].content));
        setImage((posts[score].image));
    }, [score]);




    return (
        <>
            <main role="main" className="container-fluid">
                <div className="starter-template">
                    <h1>Tlntrip Admin Demo</h1>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div style={{ width: '100%', height: '100%', position: 'relative' }} className='text-center mt-2'>
                                {
                                    (score == 0) ? (
                                        <>
                                            <h2>Tlntrip Admin Tour</h2>
                                            <button type="button" className="btn btn-primary previousBtn" onClick={() => btn_action('increase')}>Start Tour</button>
                                        </>
                                    ) : (score + 1 == Object.keys(posts).length) ? (
                                        <>
                                            <h2>Thanks for the admin tour! </h2>
                                            <p>Still have an issue?</p>
                                            <button type="button" className="btn btn-primary previousBtn" onClick={() => btn_action('reply')}>Reply</button>
                                        </>

                                    ) : (
                                        <>
                                            <Image
                                                src={image}
                                                alt="Slider 1"
                                                className="imageView map"
                                                width={850}
                                                height={450}
                                                sizes="100vw"
                                                priority={false}
                                                useMap="#houseMap"
                                            // style={{ width: '100%', height: 'auto' }} // optional
                                            />

                                            <map name="houseMap" id="map" className="maphilight">
                                                <area name="office" shape="poly" coords="198,108,196,190,301,191,301,83,256,80" href="/office" data-maphilight="{'strokeColor':'0000ff','strokeWidth':5,'fillColor':'ff0000','fillOpacity':0.6}" />
                                                <area name="bathroom" shape="poly" coords="301,83,302,190,418,191,417,83" href="/bathroom" />
                                                <area name="bedroom" shape="poly" coords="419,83,417,192,560,191,560,109,494,80" href="/bedroom" />
                                            </map>
                                        </>
                                    )
                                }
                            </div>
                            <div className='d-flex justify-content-between'>
                                {(score + 1 == Object.keys(posts).length || score == 0) ? null : (
                                    <>
                                        <div>
                                            <button type="button" className="btn btn-primary previousBtn" onClick={() => btn_action('decrease')}>Previous</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-primary nextBtn" onClick={() => btn_action('increase')}>{((score + 1) < Object.keys(posts).length) ? "Next" : "Finish"}</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col-md-2">
                            {(score + 1 == Object.keys(posts).length || score == 0) ? null : (
                                <>
                                    <h2>Score {score}</h2>
                                    <h2>{title}</h2>
                                    <p>{content}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}


// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data/steps.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
