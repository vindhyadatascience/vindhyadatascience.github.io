// Import componenets
import { useState, useEffect, useRef } from 'react';
import { getGravatarUrl } from '../utils';
import ReadMore from './ReadMore';

// Import styles
import "./ListMembersCondensed.scss";

export default ({data}) => {
    const [members, setMembers] = useState([]);
    const [memberInfo, setMemberInfo] = useState(null);
    const [hover, setHover] = useState(-1);
    const dialogRef = useRef(null);
    const pressedBackdrop = useRef(false);

    // Rendered only while a profile is selected, so attaching the ref is the
    // moment to open it. showModal() gets Escape and a focus trap for free.
    const attachDialog = (el) => {
        dialogRef.current = el;
        if (el && !el.open) el.showModal();
    };

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
            <div key={i} className='profile-div'
                onClick={() => { setMemberInfo(x) }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(-1)}
                >
                <img className="profile-img"
                    src={getGravatarUrl(x.email)}
                    alt={x.name} loading="lazy" />
                <div className={`hover-div${hover === i ? ' show' : ''}`}>
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
                <dialog ref={attachDialog} className='about'
                    onClose={() => { setMemberInfo(null) }}
                    // An event on the dialog rather than the panel is a backdrop
                    // hit. Press and release are checked separately because a
                    // click reports their common ancestor, so dragging a text
                    // selection past the panel edge would close the profile.
                    onMouseDown={(e) => {
                        pressedBackdrop.current = e.target === e.currentTarget;
                    }}
                    onMouseUp={(e) => {
                        if (pressedBackdrop.current && e.target === e.currentTarget) {
                            e.currentTarget.close();
                        }
                    }}>
                    <div className='about-inner'>
                        <button onClick={() => { dialogRef.current.close() }}
                            className='about-close-btn' aria-label='Close'>
                            <span className="material-symbols-outlined icon">
                                close
                            </span>
                        </button>
                        <div className='grid container'>
                            <img src={getGravatarUrl(x.email)}
                                className='details-img' alt={x.name}/>
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
                                        <ReadMore maxCharacterCount={425}>{x.bio}</ReadMore>
                                    </hgroup>
                                ) : null}
                                
                            </div>
                        </div>
                        <button onClick={() => { dialogRef.current.close() }}
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