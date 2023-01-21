import { useContext } from "react";
import WorksContext from "./WorkContext";

import Modal from "./Modal";

const Modals = () => {
    const { works } = useContext(WorksContext);

    return (
        works.map((work) => <Modal key={work.id} id={work.id} title={work.title} displayModal={work.modalIsOpen} />)
    )
}

export default Modals;