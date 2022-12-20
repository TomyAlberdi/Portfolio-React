import { React } from 'react'
import Individual_Project from './utils/Individual_Project'
import { ContextProvider } from './utils/projects_context'

const Projects = () => {

    return (
        <ContextProvider>
            <div className='Projects'>
                <section className="container-proyectos">
                    <Individual_Project key={1} id={0} img='src\assets\todo-desktop.png' title="To-Do List with Themes" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/ToDo-App/" />
                    <Individual_Project key={2} id={1} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/Time-Tracking-Dashboard/" />
                    <Individual_Project key={3} id={2} img='src\assets\card-desktop.png' title="Interactive Card  Details Form" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/Interactive-Card-Details-Form/" />
                    <Individual_Project key={4} id={3} img='src\assets\chart-desktop.png' title="Expenses chart" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/Expenses-Chart-Component/" />
                    <Individual_Project key={5} id={4} img='src\assets\advice-desktop.png' title="Advice Generator" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/Advice-Generator-App/" />
                </section>
            </div>
        </ContextProvider>
    )

}

export default Projects