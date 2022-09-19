import React, {useState, useEffect} from 'react'

const API = 'https://api.giphy.com/v1/gifs/search?api_key=VMKjbA1RTTZEMD1QTORemiHuvRkPBpc5&q=panda&limit=10&offset=0&rating=g&lang=en'
const App= () =>{
    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
        fetch(API)
            .then(res => res.json())
            .then(response =>{
                const {data} = response;
                const gifs = data.map(image => image.images.downsized_medium.url)
                setGifs(gifs)
            })
    }, [])
    return(
        <div className="App">
            <section className ="App-content">
                {
                    gifs.map(image => <img src={image} />)
                }
            </section>
        </div>
    )
}

export default App