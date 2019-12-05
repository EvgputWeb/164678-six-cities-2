import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';
import Review from '../../components/review/review';
import withList from '../../hocs/with-list';


class ReviewsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._loadHotelReviews = this._loadHotelReviews.bind(this);
  }

  _loadHotelReviews() {
    this.props.onClearList();
    this.props.loadReviews(this.props.activeOffer.id);
  }

  componentDidMount() {
    this._loadHotelReviews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeOffer.id !== this.props.activeOffer.id) {
      this._loadHotelReviews();
    } else if (prevProps.reviews !== this.props.reviews) {
      const hotelReviews = this.props.reviews.filter((item) => item.hotelId === this.props.activeOffer.id);
      if (hotelReviews.length > 0) {
        this.props.onSetList([...hotelReviews[0].reviews]);
      } else {
        this.props.onClearList();
      }
    }
  }

  render() {
    const list = this.props.list;
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
  activeOffer: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadReviews: PropTypes.func.isRequired,
  list: PropTypes.array,
  onSetList: PropTypes.func,
  onClearList: PropTypes.func,
};


const mapStateToProps = (store) => ({
  activeOffer: store.activeOffer,
  reviews: store.reviews
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (hotelId) => {
    dispatch(Operation.loadReviews(hotelId));
  },
});


export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(withList(ReviewsList));
