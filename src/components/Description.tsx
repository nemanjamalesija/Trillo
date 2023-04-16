import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import user5 from '../img/user5.jpg';
import user6 from '../img/user6.jpg';

const Description = () => {
  return (
    <div className='description'>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos
        debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt
        deserunt quae architecto voluptate.
      </p>
      <p className='paragraph'>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate
        delectus, inventore iure aliquid aliquam.
      </p>
      <ul className='list'>
        <li className='list__item'>Breakfast Included</li>
        <li className='list__item'>Close to the beach</li>
        <li className='list__item'>Free airport shuttle</li>
        <li className='list__item'>Free wifi in all rooms</li>
        <li className='list__item'>Air conditioning and heating</li>
        <li className='list__item'>Pets alowed</li>
        <li className='list__item'>We speak all languages</li>
        <li className='list__item'>Perfect for families</li>
      </ul>
      <div className='recommend'>
        <p className='recommend__count'>Lucy and 3 other friends recommend this hotel.</p>
        <img src={user3} alt='Friend 1' className='recommend__photo' />
        <img src={user4} alt='Friend 2' className='recommend__photo' />
        <img src={user5} alt='Friend 3' className='recommend__photo' />
        <img src={user6} alt='Friend 4' className='recommend__photo' />
      </div>
    </div>
  );
};

export default Description;
