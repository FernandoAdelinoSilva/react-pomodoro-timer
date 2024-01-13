import { useContext } from 'react';

import { CyclesContext } from '../../contexts/CyclesContext';

import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useContext(CyclesContext);

  console.log(cycles);

  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="yellow">In Progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="red">Barrier</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 Min</td>
              <td>2 Months</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
