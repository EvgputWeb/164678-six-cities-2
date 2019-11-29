import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';
import Review from '../../components/review/review';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.props.loadReviews(this.props.hotelId);
  }

  static getDerivedStateFromProps(nextProps) {
    const hotelReviews = nextProps.reviews.filter((item) => item.hotelId === nextProps.hotelId);
    return (hotelReviews.length > 0) ? ({reviews: hotelReviews[0].reviews}) : {reviews: []};
  }

  render() {
    const list = this.state.reviews;
    if (list.length === 0) {
      return null;
    }
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{list.length}</span></h2>
        <ul className="reviews__list">
          {list.map((review) => (
            <li className="reviews__item" key={review.id}>
              <Review
                name={review.user.name}
                avatarUrl={review.user.avatar_url}
                rating={review.rating}
                comment={review.comment}
                dateStr={review.date}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}


ReviewsList.propTypes = {
  hotelId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadReviews: PropTypes.func.isRequired,
};


const mapStateToProps = (store) => ({
  reviews: store.reviews
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (hotelId) => {
    dispatch(Operation.loadReviews(hotelId));
  },
});


export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
