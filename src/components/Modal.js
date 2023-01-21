import { useContext } from "react";
import WorksContext from "./WorkContext";

const Modal = ({ title, id, displayModal }) => {
    const { toggleModal } = useContext(WorksContext);

    let displayModalClass = (displayModal) ? 'open' : 'animate-fadeOut';

    const closeModal = () => {
        toggleModal(id, false);
    }
    return (
        <div className={`modal ${displayModalClass}`}>
            <div className="modal-bg"></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{ title }</h2>
                    <button className="modal-close" type="button" onClick={() => closeModal()}>
                        x
                    </button>
                </div>
                {/* <iframe src="1.pdf#toolbar=0"></iframe> */}
            </div>
        </div>
    );
}

export default Modal;