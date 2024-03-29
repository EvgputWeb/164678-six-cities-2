import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withFormState from '../../hocs/with-form-state';
import {ReviewDefaults} from '../../constants';
import {isObjectEmpty} from '../../utils';
import Operation from '../../store/operation';
import ErrorMessage from '../../components/error-message/error-message';


class ReviewForm extends React.PureComponent {

  constructor(props) {
    super(props);
    this._ratingStarsRefs = [];
    ReviewDefaults.RATING_VALUES.forEach(() => this._ratingStarsRefs.push(React.createRef()));
    this._reviewRef = React.createRef();
    this._submitButtonRef = React.createRef();
    this._canHandleSubmit = true;
    this._handleChange = this._handleChange.bind(this);
    this._isFormStateEmpty = this._isFormStateEmpty.bind(this);
    this._handleButtonDisableState = this._handleButtonDisableState.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._resetForm = this._resetForm.bind(this);
  }

  _handleChange(e) {
    const elem = e.target;
    const name = elem.getAttribute(`name`);
    const value = e.nativeEvent.target.value;
    this.props.onFieldChange(name, value);
  }

  _isFormStateEmpty() {
    const formState = this.props.formState;
    return (isObjectEmpty(formState) || (!formState[ReviewDefaults.RATING]) || (!formState[ReviewDefaults.REVIEW]));
  }

  _handleButtonDisableState() {
    const formState = this.props.formState;
    if (isObjectEmpty(formState) || (!formState[ReviewDefaults.RATING]) || (!formState[ReviewDefaults.REVIEW])) {
      return true;
    }
    const rating = formState[ReviewDefaults.RATING];
    const reviewLength = formState[ReviewDefaults.REVIEW].length;
    return !(rating > 0 && reviewLength > ReviewDefaults.MIN_REVIEW_LENGTH && reviewLength < ReviewDefaults.MAX_REVIEW_LENGTH);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if ((!this._canHandleSubmit) || (this._isFormStateEmpty())) {
      return;
    }
    const formState = this.props.formState;
    this._canHandleSubmit = false;
    this.props.submitReview(this.props.activeOffer.id, formState[ReviewDefaults.RATING], formState[ReviewDefaults.REVIEW]);
    this._submitButtonRef.current.disabled = true;
  }

  _resetForm() {
    this._submitButtonRef.current.disabled = true;
    this._reviewRef.current.value = ``;
    this._ratingStarsRefs.forEach((ref) => (ref.current.checked = false));
    this.props.onClearFormState();
    this._canHandleSubmit = true;
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.reviews !== this.props.reviews) && (prevProps.reviews.length !== this.props.reviews.length)) {
      this._resetForm();
    } else if (this.props.errorMessage) {
      this._canHandleSubmit = true;
      this._submitButtonRef.current.disabled = this._handleButtonDisableState() && this._canHandleSubmit;
    }
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor={ReviewDefaults.REVIEW}>Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            ReviewDefaults.RATING_VALUES.map((rating, index) => (
              <React.Fragment key={rating.mark}>
                <input
                  className="form__rating-input visually-hidden"
                  name={ReviewDefaults.RATING}
                  value={rating.mark}
                  id={`${rating.mark}-stars`}
                  type="radio"
                  onClick={this._handleChange}
                  ref={this._ratingStarsRefs[index]}
                />
                <label htmlFor={`${rating.mark}-stars`} className="reviews__rating-label form__rating-label" title={rating.text}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            ))
          }
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id={ReviewDefaults.REVIEW}
          name={ReviewDefaults.REVIEW}
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._handleChange}
          ref = {this._reviewRef}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">{ReviewDefaults.MIN_REVIEW_LENGTH} characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={this._handleButtonDisableState() && this._canHandleSubmit}
            ref={this._submitButtonRef}
          >
            Submit
          </button>
        </div>
        <ErrorMessage />
      </form>
    );
  }
}


ReviewForm.propTypes = {
  activeOffer: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  formState: PropTypes.object,
  onFieldChange: PropTypes.func,
  onClearFormState: PropTypes.func,
  submitReview: PropTypes.func,
  errorMessage: PropTypes.string
};

const mapStateToProps = (store) => ({
  activeOffer: store.activeOffer,
  reviews: store.reviews,
  errorMessage: store.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  submitReview: (hotelId, rating, comment) => {
    dispatch(Operation.postReview(hotelId, rating, comment));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(withFormState(ReviewForm));
