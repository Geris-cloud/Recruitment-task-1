import styled from 'styled-components'
import { Table, Button } from '../../components/table-style'
import { useState } from 'react';

const Tr = styled.tr`
  background-color: ${props => props.active ? 'green' : 'none'}
`;

export default function FactureTable({ hamb }) {
  const [net, setNet] = useState(['0', '0', '0', '0', '0']);
  const [amount, setAmount] = useState(['1', '1', '1', '1', '1']);
  const [vat, setVat] = useState(['0', '0', '0', '0', '0']);
  const [color, setColor] = useState([false, false, false, false, false])

  const Color = () => {
    let newAr = [...color]

    for (let i = 0; i < 5; i++) {
      if (parseFloat(net[i]) > 1000) {
        newAr[i] = true
        setColor(newAr)
      } else {
        newAr[i] = false
        setColor(newAr)
      }
    }
  }

  const updateNet = i => e => {
    let newAr = [...net];
    newAr[i] = e.target.value;
    setNet(newAr);
  }

  const updateAmount = index => e => {
    let newAr = [...amount];
    newAr[index] = e.target.value;
    setAmount(newAr);
  }

  const updateVat = index => e => {
    let newAr = [...vat];
    newAr[index] = e.target.value;
    setVat(newAr);
  }

  // console.log(netto)
  // console.log(amount)
  // console.log(vat)

  const optionList = () => {
    return (
      <>
        <option value='0'>0%</option>
        <option value='3'>3%</option>
        <option value='8'>8%</option>
        <option value='23'>23%</option>
      </>
    )
  }

  const bruttoCalc = (i) => {
    let brutto = (net[i] * vat[i] / 100) + parseFloat(net[i]);
    return (
      brutto.toFixed(2)
    )
  }

  const netValueCalc = (i) => {
    let netValue = net[i] * amount[i];
    return (
      netValue.toFixed(2)
    )
  }

  const grossValueCalc = (i) => {
    let grossValue = ((net[i] * vat[i] / 100) + parseFloat(net[i])) * amount[i];
    return (
      grossValue.toFixed(2)
    )
  }

  return (
    <>
      <Table active={hamb}>
        <table cellSpacing='3'>
          <thead>
            <tr className='head'>
              <th>Lp.</th>
              <th>Opis</th>
              <th>MPK</th>
              <th>Kwota Netto</th>
              <th>Ilość</th>
              <th>VAT</th>
              <th className='width'>Kwota Brutto</th>
              <th className='width'>Wartość Netto</th>
              <th className='width'>Wartość Brutto</th>
            </tr>
          </thead>
          <tbody className='body'>
            <Tr active={color[0]}>
              <th>1</th>
              <td>Usługi hostingowe</td>
              <td>ul. Wodna 20</td>
              <td><input min='0' step='0.01' type='number' value={net[0]} onChange={updateNet(0)}></input></td>
              <td><input min='1' type='number' value={amount[0]} onChange={updateAmount(0)}></input></td>
              <td><select id='vat' value={vat[0]} onChange={updateVat(0)}>
                {optionList()}
              </select></td>
              <td>{bruttoCalc(0)}</td>
              <td>{netValueCalc(0)}</td>
              <td>{grossValueCalc(0)}</td>
            </Tr>
            <Tr active={color[1]}>
              <th>2</th>
              <td>Usługi programistyczne - aplikacja mobilna</td>
              <td>ul. Wodna 20</td>
              <td><input min='0' step='0.01' type='number' value={net[1]} onChange={updateNet(1)}></input></td>
              <td><input min='1' type='number' value={amount[1]} onChange={updateAmount(1)}></input></td>
              <td><select id='vat' value={vat[1]} onChange={updateVat(1)}>
                {optionList()}
              </select></td>
              <td>{bruttoCalc(1)}</td>
              <td>{netValueCalc(1)}</td>
              <td>{grossValueCalc(1)}</td>
            </Tr>
            <Tr active={color[2]}>
              <th>3</th>
              <td>Usługi serwisowe oprogramowania</td>
              <td>ul. Kozia 13</td>
              <td><input min='0' step='0.01' type='number' value={net[2]} onChange={updateNet(2)}></input></td>
              <td><input min='1' type='number' value={amount[2]} onChange={updateAmount(2)}></input></td>
              <td><select id='vat' value={vat[2]} onChange={updateVat(2)}>
                {optionList()}
              </select></td>
              <td>{bruttoCalc(2)}</td>
              <td>{netValueCalc(2)}</td>
              <td>{grossValueCalc(2)}</td>
            </Tr>
            <Tr active={color[3]}>
              <th>4</th>
              <td>Projekt UI strony internetowej</td>
              <td>ul. Długa 32</td>
              <td><input min='0' step='0.01' type='number' value={net[3]} onChange={updateNet(3)}></input></td>
              <td><input min='1' type='number' value={amount[3]} onChange={updateAmount(3)}></input></td>
              <td><select id='vat' value={vat[3]} onChange={updateVat(3)}>
                {optionList()}
              </select></td>
              <td>{bruttoCalc(3)}</td>
              <td>{netValueCalc(3)}</td>
              <td>{grossValueCalc(3)}</td>
            </Tr>
            <Tr active={color[4]}>
              <th>5</th>
              <td>Usługi graficzne - model 3D</td>
              <td>ul. Wodna 20</td>
              <td><input min='0' step='0.01' type='number' value={net[4]} onChange={updateNet(4)}></input></td>
              <td><input min='1' type='number' value={amount[4]} onChange={updateAmount(4)}></input></td>
              <td><select id='vat' value={vat[4]} onChange={updateVat(4)}>
                {optionList()}
              </select></td>
              <td>{bruttoCalc(4)}</td>
              <td>{netValueCalc(4)}</td>
              <td>{grossValueCalc(4)}</td>
            </Tr>
          </tbody>
        </table>
      </Table>
      <Button>
        <button onClick={Color}>Powyżej 1000,00 zł Netto</button>
      </Button>
    </>
  )
}