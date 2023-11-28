import './TeamContent.scss'

import { useState } from 'react';
import ListMembers from './ListMembers'
import ListMembersCondensed from './ListMembersCondensed'

export default () => {

    const [team, setTeam] = useState("leadership");

    const leadershipHandler = () => {
        document.querySelector("[id='Data Scientists']").classList.add("outline")
        document.querySelector("[id='Business Development'").classList.add("outline")
        document.querySelector("#Leadership").classList.remove("outline")
        setTeam("leadership")
    }
    const dataScientistsHandler = () => {
        document.querySelector("[id='Leadership']").classList.add("outline")
        document.querySelector("[id='Business Development'").classList.add("outline")
        document.querySelector("[id='Data Scientists']").classList.remove("outline")
        setTeam("data scientists")
    }
    const businessDevHandler = () => {
        document.querySelector("[id='Leadership'").classList.add("outline")
        document.querySelector("[id='Data Scientists']").classList.add("outline")
        document.querySelector("[id='Business Development'").classList.remove("outline")
        setTeam("business development")
    }

    const leadershipContent = () => {
        return (
            <div>
                <ListMembers data="data/founders.json" />
            </div>
        )
    }

    const dataScientistsContent = () => {
        return (
            <div className='member-grid'>
                <ListMembersCondensed data="data/dataScienceTeam.json" />
            </div>
        )
    }
    const businessDevContent = () => {
        return (
            <div className='member-grid'>
                <ListMembersCondensed data="data/businessDevTeam.json" />
            </div>
        )
    }

    const button = (text, handler) => {
        let classes = "outline nav-button"
        if (text === "Leadership") {
            classes = "nav-button"
        }

        return (
            <button className={classes} id={text}
                    onClick={handler}>{text}</button>
        )
    }

    return (
        <>
            <div style={{display: "flex"}}>
                {button("Leadership", leadershipHandler)}
                {button("Data Scientists", dataScientistsHandler)}
                {button("Business Development", businessDevHandler)}
            </div>
            <div>
                {team === "leadership" ? leadershipContent() : null}
                {team === "data scientists" ? dataScientistsContent() : null}
                {team === "business development" ? businessDevContent() : null}
            </div>            
        </>
    )
}