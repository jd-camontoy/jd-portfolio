import { useContext } from "react";
import Work from "./Work";
import WorksContext from "./WorkContext";

const Works = () => {
    const { works } = useContext(WorksContext)

    return (
        <main className="content-works">
            <h2 className="content-works-title">UI / UX Case Studies</h2>
            <div className="content-works-list">
            {
                works.map((work) =>
                    <Work 
                        key={work.id}
                        id={work.id}
                        title={work.title}
                        image={work.img}
                    />)
            }
            </div>
        </main>
    );
}

export default Works;