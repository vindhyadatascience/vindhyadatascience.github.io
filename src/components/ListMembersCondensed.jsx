// Import componenets
import { useState, useEffect, useRef } from 'react';
import { getGravatarUrl } from '../utils';
import ReadMore from './ReadMore';

// Import styles
import "./Profile.scss";
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
                    aria-labelledby='profile-name'
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
                    {/* Focus starts on the panel, not the close button, so the
                        dialog opens without a focus ring already sitting in the
                        corner. Tab still reaches the button first. */}
                    <div className='about-inner' tabIndex={-1} autoFocus>
                        <button onClick={() => { dialogRef.current.close() }}
                            className='about-close-btn' aria-label='Close'>
                            <span className="material-symbols-outlined icon">
                                close
                            </span>
                        </button>
                        {/* The header stays put while only the body scrolls, so
                            the face and the name remain attached to the text. */}
                        <header className='profile-header'>
                            <img src={getGravatarUrl(x.email)}
                                className='details-img' alt={x.name}/>
                            <div className='profile-headings'>
                                <hgroup>
                                    <h3 id='profile-name'>{x.name}</h3>
                                    <h4>{x.title}</h4>
                                </hgroup>
                                {x.tagline != "" ? (
                                    <p className='profile-tagline'>{x.tagline}</p>
                                ) : null}
                            </div>
                        </header>
                        <div className='profile-body'>
                            {/* A section rather than an hgroup: Pico dims an
                                hgroup's last child as a subtitle, which greyed
                                out every one of these paragraphs. */}
                            {x.experience != "" ? (
                                <section className='profile-section'>
                                    <h6>Experience</h6>
                                    <p>{x.experience}</p>
                                </section>
                            ) : null}
                            {x.expertise != "" ? (
                                <section className='profile-section'>
                                    <h6>Expertise</h6>
                                    <p>{x.expertise}</p>
                                </section>
                            ) : null}
                            {x.bio != "" ? (
                                <section className='profile-section'>
                                    <h6>Bio</h6>
                                    <ReadMore maxCharacterCount={425}>{x.bio}</ReadMore>
                                </section>
                            ) : null}
                        </div>
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