import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  console.log('All Environment Variables Lvl1:', import.meta.env);
  console.log('GitHub Token Lvl2:', import.meta.env.VITE_GITHUB_TOKEN);

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateCount, setCandidateCount] = useState<number>(0);
  const [currentCandidateData, setCurrentCandidateData] = useState<Candidate | null>(null);

  useEffect(() => {
    if (candidates.length === 0) {
      getCandidates();
    } else {
      // Check if candidateCount is within bounds
      if (candidateCount < candidates.length) {
        const currentCandidate = candidates[candidateCount];
        getCurrentCandidateData(currentCandidate);
      } else {
        // Reset candidateCount if it exceeds available candidates
        setCandidateCount(0);
      }
    }
  }, [candidates, candidateCount]);

  const getCandidates = async () => {
    const candidatesArray = await searchGithub();
    console.log('Candidate Array: ', candidatesArray);
    setCandidates(candidatesArray);
  };

  const getCurrentCandidateData = async (candidate: Candidate) => {
    if (candidate && candidate.login) {
      const data = await searchGithubUser(candidate.login);
      // Set currentCandidateData to the fetched data
      setCurrentCandidateData({
        ...candidate, // Spread existing candidate data
        ...data,      // Merge in the fetched user data
      });
    } else {
      // If candidate is undefined or doesn't have a login, move to the next candidate
      showNextCandidate();
    }
  };

  const showNextCandidate = () => {
    setCandidateCount((prevCount) => prevCount + 1);
  };

  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    if (currentCandidateData) {
      // Check for duplicates before adding
      const isDuplicate = parsedPotentialCandidates.some(candidate => candidate.login === currentCandidateData.login);
      if (!isDuplicate) {
        parsedPotentialCandidates.push(currentCandidateData);
        localStorage.setItem('savedCandidates', JSON.stringify(parsedPotentialCandidates));
      }
    }
    showNextCandidate();
  };

  return (
    <>
      {candidateCount < candidates.length && currentCandidateData ? (
        <CandidateCard
          thisCandidate={currentCandidateData} // Now guaranteed to be a Candidate
          showUpcomingCandidate={showNextCandidate}
          addToPotentialCandidates={addToPotentialCandidates}
        />
      ) : (
        <h3>No Candidates Available!</h3>
      )}
    </>
  );
};

export default CandidateSearch;