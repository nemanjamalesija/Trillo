import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';

const UserReviews = () => {
  return (
    <div className='user-reviews'>
      <figure className='review'>
        <blockquote className='review__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque
          architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption className='review__user'>
          <img src={user1} alt='User photo 1' className='review__photo' />
          <div className='review__user-box'>
            <p className='review__user-name'>Nick Smith</p>
            <p className='review__user-date'>Feb 23rd, 2023</p>
          </div>
          <div className='review__user-rating'>7.8</div>
        </figcaption>
      </figure>
      <figure className='review'>
        <blockquote className='review__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque
          architecto dicta animi.
        </blockquote>
        <figcaption className='review__user'>
          <img src={user2} alt='User photo 2' className='review__photo' />
          <div className='review__user-box'>
            <p className='review__user-name'>Marry Thomas</p>
            <p className='review__user-date'>Sept 13th, 2023</p>
          </div>
        </figcaption>
      </figure>
      <button className='btn-inline'>
        Show all<span>&rarr;</span>
      </button>
    </div>
  );
};

export default UserReviews;
