import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner/Spinner";
import { getCrimesCase } from "../../actions/crimes";
import GMap from "./GMap";
import "./Case.css";

const CrimesCase = ({
  getCrimesCase,
  crimes: { crimesCase, crimeLoading },
  match
}) => {
  useEffect(() => {
    console.log("here");
    getCrimesCase(match.params.id);
  }, [getCrimesCase, match.params.id]);
  console.log("showing crimesCase: " + crimesCase);

  return (
    <Fragment>
      {crimesCase === undefined || crimeLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="row">
            <div className="col-md-12">
              <Link to="/results" className="btn btn-secondary back-btn">
                <i id="toggleIcon" className="fa fa-angle-double-down"></i> Back
                to Results
              </Link>
            </div>
          </div>
          <h1 className="page-header">Case #{crimesCase.Case_Number}</h1>
          <p className="lead">
            <i className="fas fa-folder-open gold-icon"></i>&nbsp;&nbsp;
            {crimesCase.State} > Crime Case
          </p>
          <h5>
            <strong>Type of Offense: </strong> {crimesCase.Offense}
          </h5>
          <div style={{ position: "static" }} className="row no-gutters">
            <div className="col-md-10">
              <div className="card-body">
                <p className="card-text">
                  <strong>Date of Offense: </strong>{" "}
                  <Moment format="MM/DD/YYYY">{crimesCase.Date}</Moment>
                </p>
                <p className="card-text">
                  <strong>Incident Day of Week: </strong>{" "}
                  <Moment format="dddd">{crimesCase.Date}</Moment>
                </p>
                <p className="card-text">
                  <strong>Description: </strong>{" "}
                  {crimesCase.Descript || crimesCase.Description}
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 spacer">
              <br></br>
              <h5>Links</h5>
              <ul>
                <li className="link-plain">&nbsp;&nbsp; Not Added</li>
              </ul>
            </div>
          </div>
          <GMap persons={crimesCase} />
          <h3 className="page-header spacer">Comments</h3>
          <div class="post bg-comment p-1 my-1">
            <div>
              <Link to="!#">
                <img
                  class="round-img"
                  src="https://via.placeholder.com/75"
                  alt="User's avatar"
                />
                <h4>Username</h4>
              </Link>
            </div>
            <div>
              <p class="my-1">Here is some text.</p>
              <p class="post-date">
                Posted on{" "}
                <Moment format="MM/DD/YYYY hh:mm A">01/16/2020</Moment>
              </p>
            </div>
          </div>
          <div class="post bg-comment p-1 my-1">
            <div>
              <Link to="!#">
                <img
                  class="round-img"
                  src="https://via.placeholder.com/75"
                  alt="User's avatar"
                />
                <h4>Username</h4>
              </Link>
            </div>
            <div>
              <p class="my-1">A great comment.</p>
              <p class="post-date">
                Posted on{" "}
                <Moment format="MM/DD/YYYY hh:mm A">01/16/2020</Moment>
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

CrimesCase.propTypes = {
  getCrimesCase: PropTypes.func.isRequired,
  crimes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  crimes: state.crimes
});

export default connect(mapStateToProps, { getCrimesCase })(CrimesCase);
