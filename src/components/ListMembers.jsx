// Import components
import { useState, useEffect } from 'react';
import { getGravatarUrl } from '../utils';
import ReadMore from './ReadMore';

// Import styles
import "./Profile.scss"
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
            <article key={x.id} className='founder-card'>
                <header className='profile-header'>
                    <img src={`${getGravatarUrl(x.email)}`}
                        className='details-img'
                        alt={`${x.shortName}'s profile image`} loading="lazy"/>
                    <div className='profile-headings'>
                        <hgroup>
                            <h3>{x.name}</h3>
                            <h4>{x.title}</h4>
                        </hgroup>
                        {x.tagline != "" ? (
                            <p className='profile-tagline'>{x.tagline}</p>
                        ) : null}
                    </div>
                </header>
                {x.bio != "" ? (
                    <div className='founder-body'>
                        <ReadMore maxCharacterCount={425}>{x.bio}</ReadMore>
                    </div>
                ) : null}
            </article>
        )
    });

    return (
        <>
            {membersList}
        </>
    )
}
