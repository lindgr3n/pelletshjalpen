import React from 'react';
import PropTypes from 'prop-types';

import PelletsOverview from './PelletsOverview';
import PelletsInputForm from './PelletsInputForm';
import PelletsEvents from './PelletsEvents';

const PelletsAppView = props => {
  const { storedata, eventsdata, onaddnewevent } = props;
  return (
    <div>
      <PelletsOverview data={storedata} />
      <PelletsInputForm onaddnewevent={onaddnewevent} />
      <PelletsEvents data={eventsdata} />
    </div>
  );
};

PelletsAppView.propTypes = {
  storedata: PropTypes.object.isRequired,
  eventsdata: PropTypes.arrayOf(PropTypes.object),
  onaddnewevent: PropTypes.func
};

export default PelletsAppView;
