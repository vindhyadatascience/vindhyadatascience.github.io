import './TeamContent.scss'

import { useState } from 'react';
import ListMembers from './ListMembers'
import ListMembersCondensed from './ListMembersCondensed'

export default () => {

    const [team, setTeam] = useState("leadership");

    const leadershipHandler = () => {
        document.querySelector("[id='Science Team']").classList.add("outline")
        document.querySelector("[id='Business Development'").classList.add("outline")
        document.querySelector("#Leadership").classList.remove("outline")
        setTeam("leadership")
    }
    const dataScientistsHandler = () => {
        document.querySelector("[id='Leadership']").classList.add("outline")
        document.querySelector("[id='Business Development'").classList.add("outline")
        document.querySelector("[id='Science Team']").classList.remove("outline")
        setTeam("science team")
    }
    const businessDevHandler = () => {
        document.querySelector("[id='Leadership'").classList.add("outline")
        document.querySelector("[id='Science Team']").classList.add("outline")
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
            <div className="team-toggle-btns">
                {button("Leadership", leadershipHandler)}
                {button("Science Team", dataScientistsHandler)}
                {button("Business Development", businessDevHandler)}
            </div>
            <div>
                {team === "leadership" ? leadershipContent() : null}
                {team === "science team" ? dataScientistsContent() : null}
                {team === "business development" ? businessDevContent() : null}
            </div>            
        </>
    )
}