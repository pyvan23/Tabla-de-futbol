/* eslint-disable react/prop-types */
import { Doughnut } from 'react-chartjs-2';

export const PlayerStats = ({data=120}) => {
  return (
    <Doughnut data={data} />
  )
}
