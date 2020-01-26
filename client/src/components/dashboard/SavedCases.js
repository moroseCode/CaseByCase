import React, { Fragment, useEffect} from 'react';
import { getFavs } from '../../actions/favorites';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import PropTypes from 'prop-types';

const SavedCases = ({getFavs, favs}) => {
    useEffect(() => {
        getFavs();
    }, [getFavs]);
	return (
		<Fragment>
			<div className='card bg-dark'>
				<div className='card-header'>
					<i className='fas fa-archive'></i>&nbsp;&nbsp;Saved Cases
				</div>
                <table className='card-table table table-striped table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">Case No.</th>
                            <th scope="col">Incident Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">State</th>
                            <th scope="col">Collaborators</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ME2017-03860</td>
                            <td>08/19/2017</td>
                            <td>White Male, 123 lbs, 5’9”; the jaw has been previously broken with metal hardware; Clothing: blue flannel boxers, white socks, one black “Nike” sandal</td>
                            <td>IL</td>
                            <td>Tony</td>
                        </tr>
                        <tr>
                            <td>17.09171</td>
                            <td>08/17/2019</td>
                            <td>Simple Assault</td>
                            <td>IL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17.09159</td>
                            <td>08/16/2019</td>
                            <td>Shots Fired</td>
                            <td>IL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MP4890</td>
                            <td>12/07/2009</td>
                            <td>Susan was last seen by family and friends on December 6, 2009 and her husband shortly after midnight on the 7th of December.</td>
                            <td>UT</td>
                            <td>Sara</td>
                        </tr>
                    </tbody>
                </table>
			</div>
		</Fragment>
	);
};

SavedCases.propTypes = {
  getFavs: PropTypes.func.isRequired,
  favs: PropTypes.object.isRequired,

};
 const mapStateToProps = state => ({
     favs: state.favs
 });

export default connect(mapStateToProps,{ getFavs })(SavedCases);
