import { Table, Button, NavPanel } from '../../components/table-style'
import axios from 'axios';
import { axiosGet } from './delegation-table'
import { useEffect, useState } from 'react';

export default function ContractorsData({ hamb }) {
  const [editPanel, setEditPanel] = useState(false);
  const [addPanel, setAddPanel] = useState(false);
  const [loading, setLoading] = useState(true);

  const [contractorsList, setContractorsList] = useState([]);

  const [nip, setNip] = useState('');
  const [regon, setRegon] = useState('');
  const [name, setName] = useState('');
  const [vat, setVat] = useState('Nie');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [flat, setFlat] = useState('');

  const [propId, setPropId] = useState('');

  const addContractor = (idVal) => {
    axios.post("https://recruitment-tasks.herokuapp.com/send", {
      NIP: nip, REGON: regon, NAME: name, VAT: vat, STREET: street, HOUSE: house, FLAT: flat,
    })
      // .then(() => {
      //   setContractorsList([
      //     ...contractorsList,
      //     { id: idVal, NIP: nip, REGON: regon, NAME: name, VAT: vat, STREET: street, HOUSE: house, FLAT: flat },
      //   ]);
      // })
      .then(() => {
        axiosGet('contractor', setContractorsList, setLoading)
      })
      .catch((err) => {
        window.alert('Błąd połączenia');
        console.log(err);
      })
  };

  const updateContractor = (idVal) => {
    axios.put('https://recruitment-tasks.herokuapp.com/send',
      {
        NIP: nip, REGON: regon, NAME: name, VAT: vat, STREET: street, HOUSE: house, FLAT: flat, id: idVal
      })
      .then(() => {
        setContractorsList(contractorsList.map((prop) => {
          return prop.id == idVal ? {
            id: prop.id, NIP: nip, REGON: regon, NAME: name, VAT: vat, STREET: street, HOUSE: house, FLAT: flat
          } : prop
        }))
      })
      .catch((err) => {
        window.alert('Błąd połączenia');
        console.log(err);
      })
  }

  const deleteContractor = (idVal) => {
    axios.delete(`https://recruitment-tasks.herokuapp.com/del/${idVal}`)
      .then(() => {
        setContractorsList(
          contractorsList.filter((prop) => {
            return prop.id != idVal;
          })
        )
      })
      .catch((err) => {
        window.alert('Błąd połączenia');
        console.log(err);
      })
  };

  useEffect(() => {
    axiosGet('contractor', setContractorsList, setLoading)
  }, [])

  // console.log(contractorsList);

  const Panel = () => {
    return (
      <form>
        <div>
          <label htmlFor='nip'>NIP</label>
          <input type='text' id='nip' maxLength='10' value={nip} onChange={(event) => setNip(event.target.value)}></input>
        </div>
        <div>
          <label htmlFor='regon'>REGON</label>
          <input type='text' id='regon' maxLength='9' value={regon} onChange={(event) => setRegon(event.target.value)}></input>
        </div>
        <div>
          <label htmlFor='name'>NAZWA</label>
          <input type='text' id='name' maxLength='100' value={name} onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div>
          <label htmlFor='vat'>PŁATNIK VAT ?</label>
          <input type='checkbox' id='vat' value={vat} onClick={() => {
            if (vat === 'Nie') { setVat('Tak') } else { setVat('Nie') }
          }}></input>
        </div>
        <div>
          <label htmlFor='street'>ULICA</label>
          <input type='text' id='street' maxLength='100' value={street} onChange={(event) => setStreet(event.target.value)}></input>
        </div>
        <div>
          <label htmlFor='house number'>NUMER DOMU</label>
          <input type='text' id='house number' maxLength='40' value={house} onChange={(event) => setHouse(event.target.value)}></input>
        </div>
        <div>
          <label htmlFor='flat number'>NUMER MIESZKANIA</label>
          <input type='text' id='flat number' maxLength='40' value={flat} onChange={(event) => setFlat(event.target.value)}></input>
        </div>
      </form>
    )
  }

  return (
    <>
      <Table active={hamb}>
        <table cellSpacing='3'>
          <thead>
            <tr className='head'>
              <th colSpan='2'>EDYCJA</th>
              <th>NIP</th>
              <th>REGON</th>
              <th>NAZWA</th>
              <th>PŁATNIK VAT ?</th>
              <th>ULICA</th>
              <th>NUMER DOMU</th>
              <th>NUMER MIESZKANIA</th>
            </tr>
          </thead>
          <tbody className='body'>
            {!loading ? (
              contractorsList.map((prop) => {
                return (
                  <tr key={prop.id}>
                    <td className='symbol' onClick={() => { deleteContractor(prop.id) }}><i className="fas fa-trash-alt symbol"></i></td>
                    <td className='symbol' onClick={() => { setEditPanel(true), setPropId(prop.id) }}><i className="fas fa-edit symbol"></i></td>
                    <td>{prop.NIP}</td>
                    <td>{prop.REGON}</td>
                    <td>{prop.NAME}</td>
                    <td>{prop.VAT}</td>
                    <td>{prop.STREET}</td>
                    <td>{prop.HOUSE}</td>
                    <td>{prop.FLAT}</td>
                  </tr>)
              })
            ) : (
              <tr>
                <th className='load' colSpan='9'>Loading ...</th>
              </tr>
            )}
          </tbody>
        </table>
      </Table>
      <Button>
        <button onClick={() => { setAddPanel(true) }}>Dodaj kontrahenta</button>
      </Button>
      <NavPanel active={addPanel}>
        <div className='wrap'>
          {Panel()}
          <div className='send'>
            <button onClick={() => { addContractor(), setAddPanel(false) }}>Dodaj kontrahenta do tabeli</button>
          </div>
          <span onClick={() => { setAddPanel(false) }}>X</span>
        </div>
      </NavPanel>
      <NavPanel active={editPanel}>
        <div className='wrap'>
          {Panel()}
          <div className='send'>
            <button onClick={() => { updateContractor(propId), setEditPanel(false) }}>Edytuj kontrahenta</button>
          </div>
          <span onClick={() => { setEditPanel(false) }}>X</span>
        </div>
      </NavPanel>
    </>
  )
}