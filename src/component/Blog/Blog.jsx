import PropTypes from 'prop-types';

const Blog = ({ blog,handleTime,handleBookmark,handlePrice  }) => {
    const {title,cover,description,price,credit_hour} = blog;
    return (
        <div className="card  h-96 bg-base-100 shadow-xl mx-auto">
  <figure><img className='w-3/4 h-3/4' src={cover} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-medium text-base">{title}</h2>
    <p className='font-normal text-sm'>{description}</p>
    <div className='grid grid-cols-2'>
        <h4>Price:{price}</h4>
        <h4>Credit:{credit_hour} hours</h4>
    </div>
    <div className="card-actions items-baseline">
    <button  onClick={() =>{
        handleTime(credit_hour);handleBookmark (title);handlePrice(price);
    } } className="btn btn-primary w-full  text-[#FFF] text-sm">Select</button>
    </div>
  </div>
</div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleTime:PropTypes.func, 
    handleBookmark:PropTypes.func, 
    handlePrice:PropTypes.func, 

}
export default Blog;