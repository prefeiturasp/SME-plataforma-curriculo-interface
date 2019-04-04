import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'components/objects/Avatar';

const mapStateToProps = state => {
  return {
    nickname: state.ProfileReducer.nickname,
    photo: state.ProfileReducer.photo,
  };
};

export default connect(mapStateToProps)(Avatar);
