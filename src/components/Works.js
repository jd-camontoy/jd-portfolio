import { useContext } from "react";
import Work from "./Work";
import WorksContext from "./WorkContext";

const Works = () => {
    const { works } = useContext(WorksContext)

    return (
        <div className="content-works">
        {
            works.map((work) => <Work key={work.id} id={work.id} title={work.title} image={work.img} />)
        }
        </div>
    );
}

export default Works;