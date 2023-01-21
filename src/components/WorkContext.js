import { createContext, useState } from "react";

import image1 from '../assets/image/1.png';
import image2 from '../assets/image/2.png';
import image3 from '../assets/image/3.png';

const WorksContext = createContext();

export function WorksProvider({ children }) {
    let worksList = [
        {
            id: 1,
            title: 'AllScreen Mobile App',
            img: image1,
            modalIsOpen: false
        },
        {
            id: 2,
            title: 'Lendlove Mobile and Web App',
            img: image2,
            modalIsOpen: false
        },
        {
            id: 3,
            title: 'AllScreen Responsive Web App',
            img: image3,
            modalIsOpen: false
        },
    ];
    const [works, setWorks] = useState(worksList);
    const toggleModal = (workId, modalState) => {
        setWorks((prevState) => prevState.map((work) => {
            if (work.id == workId) {
                work.modalIsOpen = modalState
            }
            return work;
        }));
    }

    return (
        <WorksContext.Provider value={{ works, toggleModal }}>{ children }</WorksContext.Provider>
    )
}

export default WorksContext;