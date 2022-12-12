import React from 'react'

const Home = () => {
    return (
        <>
            <div className='Main Home-Presentacion'>
                <section className="info">
                    <h1>Título</h1>
                    <p>Pellentesque iaculis consequat diam, id dictum magna pretium volutpat. Sed sapien ex, commodo ut sollicitudin vitae, semper id dolor. Cras congue hendrerit neque, ut accumsan nunc placerat in. Aliquam ac porta nisi, at interdum tortor. Morbi venenatis odio elit, id sagittis neque pellentesque at. Ut ac interdum lacus, in volutpat turpis. Cras tortor est, sodales sed fringilla tincidunt, porttitor in magna. Pellentesque lorem odio, sodales et arcu et, volutpat lacinia augue. Mauris auctor diam ut elementum vehicula. Donec tristique elementum diam vestibulum scelerisque. </p>
                    <ul>
                        <li>data</li>
                        <li>data</li>
                        <li>data</li>
                        <li>data</li>
                    </ul>
                </section>
                <img src="src\assets\pfp.jpg" alt="myself." />
            </div>
            <div className="Main Home-Educacion">
                <h2>Educación</h2>
                <section className='ed-info'>
                    <article>
                        <h3>Educación 1</h3>
                        <p>Pellentesque iaculis consequat diam, id dictum magna pretium volutpat. Sed sapien ex, commodo ut sollicitudin vitae, semper id dolor.</p>
                    </article>
                    <article>
                        <h3>Educación 2</h3>
                        <p>Pellentesque iaculis consequat diam, id dictum magna pretium volutpat. Sed sapien ex, commodo ut sollicitudin vitae, semper id dolor.</p>
                    </article>
                </section>  
            </div>
        </>
    )
}

export default Home