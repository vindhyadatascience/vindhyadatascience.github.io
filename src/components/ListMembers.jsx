// Import componenets
import { useState, useEffect } from 'react';
import { getGravatarUrl } from '../utils';

// Import styles
import "./ListMembers.scss"

export default ({data}) => {
    const [members, setMembers] = useState([]);

    async function fetchMembers() {
        const response = await fetch(data);
        const result = await response.json();
        setMembers(result);
    }

    useEffect(() => {
        fetchMembers();
    }, []);

    const membersList = members.map(x => {
        return (
            <div key={x.id} className='founder-card'>
                <img src={`${getGravatarUrl(x.email)}`} alt={`${x.shortName}'s profile image`}/>
                <div>
                    <hgroup>
                        <h3>{x.name}</h3>
                        <h4>{x.title}</h4>
                    </hgroup>
                    <p>{x.bio}</p>
                </div>
            </div>
        )
    });

    return (
        <>
            {membersList}
        </>
    )
}