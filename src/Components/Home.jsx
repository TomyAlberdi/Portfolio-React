import React from 'react'

const Home = () => {
    return (
        <>
            <div className='Home-Presentacion'>
                <div className="info">
                    <h2>Título</h2>
                    <p>Pellentesque iaculis consequat diam, id dictum magna pretium volutpat. Sed sapien ex, commodo ut sollicitudin vitae, semper id dolor. Cras congue hendrerit neque, ut accumsan nunc placerat in. Aliquam ac porta nisi, at interdum tortor. Morbi venenatis odio elit, id sagittis neque pellentesque at. Ut ac interdum lacus, in volutpat turpis. Cras tortor est, sodales sed fringilla tincidunt, porttitor in magna. Pellentesque lorem odio, sodales et arcu et, volutpat lacinia augue. Mauris auctor diam ut elementum vehicula. Donec tristique elementum diam vestibulum scelerisque. </p>
                    <ul>
                        <li>data</li>
                        <li>data</li>
                        <li>data</li>
                        <li>data</li>
                    </ul>
                </div>
                <div className="photo">
                    <img src="src\assets\pfp.jpg" alt="myself." />
                </div>
            </div>
            <div className="Home-Educacion">
                <div>
                    <h2>a1</h2>
                </div>
                <div>
                    <h2>a2</h2>
                </div>
            </div>
        </>
    )
}

export default Home