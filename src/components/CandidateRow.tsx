import type Candidate from '../interfaces/Candidate.interface';

type CandidateRowProps = {
  possibleCandidate: Candidate;
  rejectCandidate?: () => void;
};

const CandidateRow = ({ possibleCandidate, rejectCandidate }: CandidateRowProps) => {
  const candidateName: string | null = possibleCandidate.name || possibleCandidate.login;

  return (
    <section className="candidateCard">
      <figure>
        <img src={`${possibleCandidate.avatar_url}`} alt={`${possibleCandidate.login}`} />
      </figure>
      <article className="details">
        <h2>
          {candidateName} ({possibleCandidate.login})
        </h2>
        <p>
          <strong>Location:</strong> {possibleCandidate.location}
        </p>
        <p>
          <strong>Email:</strong>
          <a href={`mailto:${possibleCandidate.email}`}>{possibleCandidate.email}</a>
        </p>
        <p>
          <strong>Company:</strong> {possibleCandidate.company}
        </p>
      </article>
      <article className="bio">
        <p>
          <strong>Bio:</strong> {possibleCandidate.bio}
        </p>
      </article>
      <button onClick={rejectCandidate}>-</button>
    </section>
  );
};

export default CandidateRow;