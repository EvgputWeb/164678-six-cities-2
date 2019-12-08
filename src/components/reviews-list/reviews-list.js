import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';
import Review from '../../components/review/review';
import withList from '../../hocs/with-list';
import {isObjectEmpty} from '../../utils';
import {MAX_REVIEWS_COUNT_ON_PAGE} from '../../constants';


class ReviewsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._loadHotelReviews = this._loadHotelReviews.bind(this);
  }

  _loadHotelReviews() {
    this.props.onClearList();
    if (!isObjectEmpty(this.props.activeOffer)) {
      this.props.loadReviews(this.props.activeOffer.id);
    }
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this._loadHotelReviews();
    }
  }

  componentDidUpdate(prevProps) {
    if (isObjectEmpty(prevProps.activeOffer) || (prevProps.activeOffer.id !== this.props.activeOffer.id)) {
      this._loadHotelReviews();
    } else if (prevProps.reviews !== this.props.reviews) {
      this.props.onSetList(this.props.reviews);
    }
  }

  render() {
    const list = this.props.list;
    if (list.length === 0) {
      return null;
    }
    let slicedList = list.slice(0, MAX_REVIEWS_COUNT_ON_PAGE);
    slicedList.sort((a, b) => ((new Date(b.date)).getTime() - (new Date(a.date)).getTime()));
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{list.length}</span></h2>
        <ul className="reviews__list">
          {slicedList.map((review) => (
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
  activeOffer: PropTypes.object,
  reviews: PropTypes.arrayOf(PropTypes.object),
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

export default connect(mapStateToProps, mapDispatchToProps)(withList(ReviewsList));
