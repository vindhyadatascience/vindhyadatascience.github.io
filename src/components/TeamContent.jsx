import './TeamContent.scss'

import { useState } from 'react';
import ListMembers from './ListMembers'
import ListMembersCondensed from './ListMembersCondensed'

const TABS = [
    { key: "leadership", label: "Leadership" },
    { key: "science team", label: "Science Team" },
    { key: "business development", label: "Business Development" },
];

export default () => {

    const [team, setTeam] = useState("leadership");

    return (
        <>
            <div className="team-tabs" role="tablist">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        role="tab"
                        aria-selected={team === tab.key}
                        className={`team-tab${team === tab.key ? " active" : ""}`}
                        onClick={() => setTeam(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {team === "leadership" && (
                    <div>
                        <ListMembers data="data/founders.json" />
                    </div>
                )}
                {team === "science team" && (
                    <div className='member-grid'>
                        <ListMembersCondensed data="data/dataScienceTeam.json" />
                    </div>
                )}
                {team === "business development" && (
                    <div className='member-grid'>
                        <ListMembersCondensed data="data/businessDevTeam.json" />
                    </div>
                )}
            </div>
        </>
    )
}
