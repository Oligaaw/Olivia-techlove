import { useState } from "react"

interface RepoData {
  watchers:number;
  full_name:string;
  description:string;
  stargazers_count: string;
  homepage:string;
  
}

interface CounterProps {
  data: RepoData[];
  decreaseLabel:string;
  increaseLabel: string;
  counterTitle: string;
  nameTitle: string;
  homepage: string;
  watchers: string;
  description: string;
  stargazers: string;
}

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return <button id='inc-btn' onClick={onClick}>{label}</button>;
};

export const Counter = ({data,decreaseLabel,increaseLabel,counterTitle,nameTitle,homepage,watchers,description,stargazers}: CounterProps) => {
  const max = 6;
  const min = 0;
  let [currentRepoIndex, setCurrentRepoIndex] = useState(0);
  const currentRepo = data[currentRepoIndex];

  const showNextRepo = () => {
    if(currentRepoIndex === max) {
      setCurrentRepoIndex (currentRepoIndex = 6)
    } else {
      setCurrentRepoIndex((prevIndex) => 
        (prevIndex + 1) % data.length);

    }
  };

  const showPreviousRepo = () => {
    if (currentRepoIndex === min) {
      setCurrentRepoIndex(currentRepoIndex = 0)
    } else {
      setCurrentRepoIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1);
    }
  };

  return (
    <div id="text">
      <div id="count-container">
        <Button onClick={showPreviousRepo} label={decreaseLabel} />
        <p id="counter">{counterTitle} {currentRepoIndex}</p> 
        <Button onClick={showNextRepo} label={increaseLabel} />
      </div>
        <div className="div-container">
          <h3 className="title">🥸 {nameTitle}</h3>
          <h3 className="h3">{currentRepo?.full_name}</h3>
        </div>
          <div className="div-container">
            <h3 className="title">🏠 {homepage}</h3>
            <h3 className="h3"> {currentRepo?.homepage}</h3>
          </div>
            <div className="div-container">
              <h3 className="title">👀 {watchers}</h3>
              <h3 className="h3">{currentRepo?.watchers}</h3>
            </div>
              <div className="div-container">
                <h3 className="title">📝 {description}</h3>
                <h3 className="h3"> {currentRepo?.description}</h3>
              </div>
                <div className="div-container">
                  <h3 className="title">🤩 {stargazers}</h3>
                  <h3 className="h3"> {currentRepo?.stargazers_count}</h3>
                </div>                  
    </div>
  )
}