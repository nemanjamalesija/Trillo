import hotel1 from '../img/hotel1.jpg';
import hotel2 from '../img/hotel2.jpg';
import hotel3 from '../img/hotel3.jpg';

const Gallery = () => {
  return (
    <div className='gallery'>
      <figure className='gallery__item'>
        <img src={hotel1} alt='Photo hotel 1' className='gallery__photo' />
      </figure>
      <figure>
        <img src={hotel2} alt='Photo hotel 2' className='gallery__photo' />
      </figure>
      <figure>
        <img src={hotel3} alt='Photo hotel 3' className='gallery__photo' />
      </figure>
    </div>
  );
};

export default Gallery;
