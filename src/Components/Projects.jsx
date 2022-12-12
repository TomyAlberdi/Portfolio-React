import { React } from 'react'
import Individual_Project from './Individual_Project'
import { ContextProvider } from './utils/projects_context'

const Projects = () => {

    return (
        <ContextProvider>
            <div className='Main Projects'>
                <section className="container-proyectos">
                    <Individual_Project key={1} id={0} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} link="https://tomyalberdi.github.io/Time-Tracking-Dashboard/" />
                    <Individual_Project key={2} id={1} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} />
                    <Individual_Project key={3} id={2} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} />
                    <Individual_Project key={4} id={3} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} />
                    <Individual_Project key={5} id={4} img='src\assets\time-desktop.png' title="Time Tracking Dashboard" icons={["html5","sass","js"]} />
                </section>
            </div>
        </ContextProvider>
    )

}

export default Projects