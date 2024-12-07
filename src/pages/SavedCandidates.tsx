import { useEffect, useState } from 'react';
import CandidateRow from '../components/CandidateRow';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [possibleCandidates, setPossibleCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  const rejectCandidate = (candidateLogin: string | null) => {
    const storedPossibleCandidates = localStorage.getItem('savedCandidates');
    let parsedPossibleCandidates: Candidate[] = [];

    if (storedPossibleCandidates) {
      parsedPossibleCandidates = JSON.parse(storedPossibleCandidates);
    }

    const updatedCandidates = parsedPossibleCandidates.filter(
      (candidate) => candidate.login !== candidateLogin
    );

    setPossibleCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  useEffect(() => {
    const storedPossibleCandidates = localStorage.getItem('savedCandidates');
    let parsedPossibleCandidates: Candidate[] = [];

    if (storedPossibleCandidates) {
      parsedPossibleCandidates = JSON.parse(storedPossibleCandidates);
    }

    setPossibleCandidates(parsedPossibleCandidates);
    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>Potential Candidates</h2>
      {possibleCandidates.length === 0 ? (
        <h3>No potential candidates found. Please add some!</h3>
      ) : (
        possibleCandidates.map((possibleCandidate) => (
          <CandidateRow key={possibleCandidate.id} possibleCandidate={possibleCandidate} rejectCandidate={() => rejectCandidate(possibleCandidate.login)}/>
        ))
      )}
    </div>
  );
};

export default SavedCandidates;