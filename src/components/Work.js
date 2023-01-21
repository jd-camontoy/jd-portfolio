import { useContext } from "react";
import WorksContext from "./WorkContext";

const Work = ({ id, title, image }) => {
    const { toggleModal } = useContext(WorksContext);

    const openModal = () => {
        toggleModal(id, true);
    }

    return (
        <div className="work" onClick={() => openModal()}>
            <div className="work-card">
                <div className="work-card-img">
                    <img src={image} alt=""/>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default Work;