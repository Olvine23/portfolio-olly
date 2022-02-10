import React , {useState} from 'react';

const Github = () => {

    const GitRepo = () => {
        const repos = async () => {
            await fetch('https://api.github.com/olvine23/followers')
            .then(res => {
              res.json()
              console.log(res)
            })
        }
    }
  return (
    <div>


    </div>
  );
};

export default Github;
