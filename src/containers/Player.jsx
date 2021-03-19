import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import Header from "../components/Header";
import { getVideoSource } from "../actions/index";
import "../assets/styles/components/Player.scss";
const Player = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const { playing, loadingPlaying, getVideoSource } = props;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getVideoSource(id);
  }, []);
  if (loadingPlaying) {
    return <h2>LOADING ....</h2>;
  }
  return hasPlaying ? (
    <>
      <Header />
      <div className="Player">
        <video controls autoPlay>
          <source src={playing.source} type="video/mp4" />
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/404/" />
  );
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    loadingPlaying: state.loadingPlaying,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
