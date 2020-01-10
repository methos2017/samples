import React, { Component } from "react";
import PropTypes from "prop-types";
import Star from "./star";
import "./star.css";

class StarRating extends Component {
  constructor(props) {
    super(props);

    let { starsSelected } = this.props;

    this.state = {
      starsSelected: starsSelected
    };
    this.change = this.change.bind(this);
  }
  change(starsSelected) {
    this.setState({ starsSelected });
  }
  render() {
    const { totalStars, onRate } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className='star-rating'>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => onRate(i + 1)}
          />
        ))}
        <p>
          {starsSelected} из {totalStars} звезд
        </p>{" "}
      </div>
    );
  }
}
StarRating.propTypes = {
  totalStars: PropTypes.number
};
StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
