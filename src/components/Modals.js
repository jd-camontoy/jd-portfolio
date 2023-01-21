import { useContext, useState } from "react";
import WorksContext from "./WorkContext";

import Modal from "./Modal";

const Modals = () => {
    const { works, toggleModal } = useContext(WorksContext);
    const [displayModalClass, setDisplayModalClass] = useState('open');

    let workWithDisplayedModal = works.filter((work) => {
        if (work.modalIsOpen) {
            return true;
        } else {
            return false;
        }
    });

    const closeModal = (id) => {
        setDisplayModalClass('animate-fadeOut');
        setTimeout(() => { 
            toggleModal(id, false); 
            setDisplayModalClass('open');
        }, 80);

    }

    // console.log(workWithDisplayedModal);

    if (workWithDisplayedModal) {
        return (
            workWithDisplayedModal.map((work) => <Modal key={work.id} id={work.id} title={work.title} displayModalClass={displayModalClass} closeModal={closeModal} />)
        )
    } else {
        return ('');
    }
    
}

export default Modals;