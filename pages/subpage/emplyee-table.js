import { Table, Color } from '../../components/table-style'
import React, { useState } from 'react';

export default function EmployeeTable({ hamb }) {
  const [colorOne, setColorOne] = useState('#333344');
  const [colorTwo, setColorTwo] = useState('#555555');

  const colorChangeOne = (e) => {
    setColorOne(e.target.value);
  }

  const colorChangeTwo = (e) => {
    setColorTwo(e.target.value);
  }

  const One = {
    backgroundColor: `${colorOne}`
  }

  const Two = {
    backgroundColor: `${colorTwo}`
  }

  return (
    <>
      <Table active={hamb}>
        <table cellSpacing='3'>
          <thead>
            <tr className='head'>
              <th>Lp.</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Stanowisko</th>
              <th>Data urodzenia</th>
              <th>Ilość dni urlopowych</th>
            </tr>
          </thead>
          <tbody>
            <tr style={One}>
              <th>1</th>
              <td>Jacek</td>
              <td>Hamrol</td>
              <td>dyrektor oddziału</td>
              <td>01.10.1980</td>
              <td>20</td>
            </tr>
            <tr style={Two}>
              <th>2</th>
              <td>Anna</td>
              <td>Hoffmann</td>
              <td>kierowniczka projektu</td>
              <td>23.05.1991</td>
              <td>16</td>
            </tr>
            <tr style={One}>
              <th>3</th>
              <td>Wojtek</td>
              <td>Kocan</td>
              <td>projektant UI/UX</td>
              <td>11.12.1995</td>
              <td>14</td>
            </tr>
            <tr style={Two}>
              <th>4</th>
              <td>Dariusz</td>
              <td>Ochotny</td>
              <td>programista front-end</td>
              <td>04.10.1997</td>
              <td>14</td>
            </tr>
            <tr style={One}>
              <th>5</th>
              <td>Przemysław</td>
              <td>Kowalski</td>
              <td>programista back-end</td>
              <td>21.07.1994</td>
              <td>16</td>
            </tr>
            <tr style={Two}>
              <th>6</th>
              <td>Arkadiusz</td>
              <td>Malinowski</td>
              <td>stażysta</td>
              <td>12.09.1998</td>
              <td>10</td>
            </tr>
            <tr style={One}>
              <th>7</th>
              <td>Paulina</td>
              <td>Dziublewska</td>
              <td>stażystka</td>
              <td>06.02.2000</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Table>
      <Color>
        <label htmlFor='color'>Wybierz kolory</label>
        <div>
          <input id='color' type='color' onChange={colorChangeOne} value={colorOne}></input>
          <input id='color' type='color' onChange={colorChangeTwo} value={colorTwo}></input>
        </div>
      </Color>
    </>
  )
}