const Modal = ({ headerArtImg, id, displayModalClass, closeModal, content }) => {
    return (
        <div className={`modal ${displayModalClass}`}>
            <div className="modal-bg"></div>
            <div className="modal-content">
                <img className="header-art-bg" src={headerArtImg} alt="" />
                <button className="modal-close" type="button" onClick={() => closeModal(id)}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>

                {content()}
            </div>
        </div>
    );
}

export default Modal;