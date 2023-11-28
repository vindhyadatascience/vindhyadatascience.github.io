// Import componenets
import { useState, useEffect } from 'react';
import { getGravatarUrl } from '../utils';

// Import styles
import "./ListMembersCondensed.scss";

export default ({data}) => {
    const [members, setMembers] = useState([]);
    const [memberInfo, setMemberInfo] = useState(null);
    const [hover, setHover] = useState(-1);

    async function fetchMembers() {
        const response = await fetch(data);
        const result = await response.json();
        setMembers(result);
    }

    useEffect(() => {
        fetchMembers();
    }, []);

    const membersList = members.map((x, i) => {
        return (
            <div key={x.id} className='profile-div'
                onClick={() => { setMemberInfo(x) }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(-1)}
                >
                <img className="profile-img"
                    src={getGravatarUrl(x.email)}
                    alt={x.name} />
                <div className='hover-div' style={hover === i ? {display: "flex"} : {display: "none"}}>
                    <span className='hover-text'>
                        Read <br />{x.shortName}'s Bio
                    </span>
                </div>
                <hgroup>
                    <h5>{x.name}</h5>
                    <h6>{x.title}</h6>
                </hgroup>
            </div>
        )
    });

    const memberDetails = (x) => {
        return (
            <>
                <dialog open className='about'>
                    <div className='about-inner'>
                        <div className='grid container'>
                            <img src={getGravatarUrl(x.email)}
                                className='details-img'/>
                            <div>
                                <hgroup>
                                    <h3>{x.name}</h3>
                                    <h4>{x.title}</h4>
                                </hgroup>
                                {x.tagline != "" ? (
                                    <p>{x.tagline}</p>
                                ) : null}
                                {x.experience != "" ? (
                                    <hgroup>
                                        <h6>Experience</h6>
                                        <p>{x.experience}</p>
                                    </hgroup>
                                ) : null}
                                {x.expertise != "" ? (
                                    <hgroup>
                                        <h6>Expertise</h6>
                                        <p>{x.expertise}</p>
                                    </hgroup>
                                ) : null} 
                                {x.bio != "" ? (
                                    <hgroup>
                                        <h6>Bio</h6>
                                        <p>{x.bio}</p>
                                    </hgroup>
                                ) : null}
                                
                            </div>
                        </div>
                        <button onClick={() => { setMemberInfo(null) }}
                            className='about-back-btn'>
                            <span>
                                <span className="material-symbols-outlined icon">
                                    arrow_back
                                </span>
                                &nbsp;Back
                            </span>
                        </button>
                    </div>
                </dialog>
            </>
        )
    }

    return (
        <>
            {membersList}
            {memberInfo && memberDetails(memberInfo)}
        </>
    )
}