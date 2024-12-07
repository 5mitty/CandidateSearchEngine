import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    thisCandidate: Candidate;
    showUpcomingCandidate?: () => void;
    addToPotentialCandidates?: () => void;
};

const CandidateCard = ({ thisCandidate, showUpcomingCandidate, addToPotentialCandidates }: CandidateCardProps) => {
    // Ensure that thisCandidate is defined before trying to access its properties
    if (!thisCandidate) {
        return <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>;
    }

    // Use the login name if the name is not available
    const realName: string | null = thisCandidate.name || thisCandidate.login;

    return (
        <section className='candidateCard'>
            <figure>
                <img src={`${thisCandidate.avatar_url}`} alt={`${thisCandidate.login}`} />
            </figure>
            <article className='details'>
                <h2>{`${realName} (${thisCandidate.login})`}</h2>
                <p>
                    <strong>Location:</strong> {thisCandidate.location || 'N/A'}
                </p>
                {/* Email using anchor tag for proper mailto functionality */}
                <a href={`mailto:${thisCandidate.email}`}>
                    <strong>Email:</strong> {thisCandidate.email || 'N/A'}
                </a>
                <p>
                    <strong>Company:</strong> {thisCandidate.company || 'N/A'}
                </p>
                <p>
                    <strong>Profile URL:</strong> 
                    <a href={`${thisCandidate.html_url}`} target="_blank" rel="noopener noreferrer">
                        {thisCandidate.html_url}
                    </a>
                </p>
            </article>
            <article className='bio'>
                <p>
                    <strong>Bio:</strong> {thisCandidate.bio || 'N/A'}
                </p>
            </article>
            <button onClick={addToPotentialCandidates}>
                Save Candidate
            </button>
            <button onClick={showUpcomingCandidate}>
                Next Candidate
            </button>
        </section>
    );
};

export default CandidateCard;