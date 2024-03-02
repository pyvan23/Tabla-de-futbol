import "./PlayerStats.css"; 

const player = {
    position: "LW/RW/LM",
    fitness: 100,
    pace: 87,
    shooting: 71,
    passing: 73,
    dribbling: 86,
    defending: 37,
    physical: 59,
    skillMoves: 3,
    weakFoot: 4,
    foot: "Right",
    accelerationType: "Explosive",
    attackingWorkRate: "Medium",
    defensiveWorkRate: "Medium",
  };

const PlayerStats = () => {
  const {
    position,
    fitness,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    skillMoves,
    weakFoot,
    foot,
    accelerationType,
    attackingWorkRate,
    defensiveWorkRate,
  } = player;

  return (
    <div className="player-stats">
      <h2>{position}</h2>
      <ul>
        <li>
          <span>Fitness:</span> {fitness}
        </li>
        <li>
          <span>Pace:</span> {pace}
        </li>
        <li>
          <span>Shooting:</span> {shooting}
        </li>
        <li>
          <span>Passing:</span> {passing}
        </li>
        <li>
          <span>Dribbling:</span> {dribbling}
        </li>
        <li>
          <span>Defending:</span> {defending}
        </li>
        <li>
          <span>Physical:</span> {physical}
        </li>
        <li>
          <span>Skill Moves:</span> {skillMoves}
        </li>
        <li>
          <span>Weak Foot:</span> {weakFoot}
        </li>
        <li>
          <span>Foot:</span> {foot}
        </li>
        <li>
          <span>Acceleration Type:</span> {accelerationType}
        </li>
        <li>
          <span>Attacking Work Rate:</span> {attackingWorkRate}
        </li>
        <li>
          <span>Defensive Work Rate:</span> {defensiveWorkRate}
        </li>
      </ul>
    </div>
  );
};

export default PlayerStats;