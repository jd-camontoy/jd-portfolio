const Modal = ({ title, id, displayModalClass, closeModal, content }) => {
    // let displayModalClass = (displayModal) ? 'open' : 'animate-fadeOut';

    return (
        <div className={`modal ${displayModalClass}`}>
            <div className="modal-bg"></div>
            <div className="modal-content">
                {/* <div className="modal-header">
                    <h2>{ title }</h2>
                    <button className="modal-close" type="button" onClick={() => closeModal(id)}>
                        <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                </div> */}
                <button className="modal-close" type="button" onClick={() => closeModal(id)}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>

                {content()}
            </div>
        </div>
    );
}

export default Modal;