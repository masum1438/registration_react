
import PropTypes from 'prop-types';
const Bookmark = ({totalTime,totaltaka,bookmarks }) => {
  
    return (  
                                   
        <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
        <h2 className="mx-3 text-base">Credit Hour Remaining <span>{20-totalTime}</span> hr</h2>
        <hr />
        <div className="card-body">         
          <p>Course Name:
            <br />{bookmarks}           
          </p>
          <hr />                     
                <h4>Total Price:{totaltaka} USD</h4>                                     
              <hr />
              <h4>Total Credit hour:{totalTime} </h4>
          
          <div className="card-actions ">
          
          </div>
        </div>
      </div>
                    
    );
};
Bookmark.propTypes={
  bookmarks:PropTypes.array, 
  totalTime:PropTypes.number, 
  totaltaka:PropTypes.number, 
 

}
export default Bookmark;