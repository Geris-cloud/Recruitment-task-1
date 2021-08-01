import { Table } from '../../components/table-style'
import axios from 'axios';
import { useEffect, useState } from 'react';

export const axiosGet = (endpoint, dataAsign, loadAsign) => {
  axios.get(`../api/${endpoint}`)
    .then((res) => {
      dataAsign(res.data);
      loadAsign(false);
    })
    .catch((err) => {
      loadAsign(false);
      window.alert('Błąd połączenia');
      console.log(err);
    })
}

export default function DelegationTable({ hamb }) {
  const [delegationList, setDelegationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosGet('delegation', setDelegationList, setLoading)
  }, [])

  // console.log(delegationList);

  return (
    <Table active={hamb}>
      <table cellSpacing='3'>
        <thead>
          <tr className='head'>
            <th>Lp.</th>
            <th>Imię i Nazwisko</th>
            <th>Data od:</th>
            <th>Data do:</th>
            <th>Miejsce wyjazdu</th>
            <th>Miejsce przyjazdu</th>
          </tr>
        </thead>
        <tbody className='body'>
          {!loading ? (
            delegationList.map((prop) => {
              return (
                <tr key={prop.id}>
                  <th>{prop.id}</th>
                  <td>{prop.name}</td>
                  <td>{prop.d_from}</td>
                  <td>{prop.d_to}</td>
                  <td>{prop.p_from}</td>
                  <td>{prop.p_to}</td>
                </tr>)
            })
          ) : (
            <tr>
              <th className='load' colSpan='6'>Loading ...</th>
            </tr>
          )}
        </tbody>
      </table>
    </Table>
  )
}