

const Modal = ({ title, id, displayModalClass, closeModal }) => {
    // let displayModalClass = (displayModal) ? 'open' : 'animate-fadeOut';

    return (
        <div className={`modal ${displayModalClass}`}>
            <div className="modal-bg"></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{ title }</h2>
                    <button className="modal-close" type="button" onClick={() => closeModal(id)}>
                        x
                    </button>
                </div>
                {/* <iframe src="1.pdf#toolbar=0"></iframe> */}
            </div>
        </div>
    );
}

export default Modal;