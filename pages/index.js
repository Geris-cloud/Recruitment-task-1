import { Form } from '../components/index-style'

export default function Home() {
  return (
    <>
      <Form>
        <div>
          <label htmlFor='nip'>NIP</label>
          <input type='text' id='nip' maxLength='10'></input>
        </div>
        <div>
          <label htmlFor='regon'>REGON</label>
          <input type='number' id='regon' min='0' max='999999999'></input>
        </div>
        <div>
          <label htmlFor='name'>Nazwa</label>
          <input type='text' id='name' maxLength='100'></input>
        </div>
        <div>
          <label htmlFor='date of creation'>Data powstania</label>
          <input type='date' id='date of creation'></input>
        </div>
        <div>
          <label htmlFor='street'>Ulica</label>
          <input type='text' id='street' maxLength='100'></input>
        </div>
        <div>
          <label htmlFor='house number'>Numer domu</label>
          <input type='text' id='house number' maxLength='40'></input>
        </div>
        <div>
          <label htmlFor='apartment number'>Numer mieszkania</label>
          <input type='text' id='apartment number' maxLength='40'></input>
        </div>
        <div className='last'>
          <label htmlFor='comments'>Uwagi</label>
          <textarea id="comments" rows="5" maxLength="400" wrap="hard"></textarea>
        </div>
      </Form>
      <Form>
        <div>
          <label htmlFor='colors' className='list'>Kolory</label>
          <select id='colors' defaultValue='green'>
            <option value='green'>zielony</option>
            <option value='blue'>niebieski</option>
            <option value='grey'>szary</option>
            <option value='turquoise'>turkusowy</option>
            <option value='navy blue'>granatowy</option>
            <option value='red'>czerwony</option>
            <option value='white'>biały</option>
          </select>
        </div>
        <div>
          <label htmlFor='vat' className='list'>VAT</label>
          <select id='vat' defaultValue='ZW'>
            <option value='ZW'>ZW</option>
            <option value='NP'>NP</option>
            <option value='0%'>0%</option>
            <option value='3%'>3%</option>
            <option value='8%'>8%</option>
            <option value='23%'>23%</option>
          </select>
        </div>
        <div className='ol'>
          <h1>Lista uporządkowana</h1>
          <ol>
            <li>Element</li>
            <li>Element</li>
            <li>Element</li>
          </ol>
        </div>
      </Form>
    </>
  )
}