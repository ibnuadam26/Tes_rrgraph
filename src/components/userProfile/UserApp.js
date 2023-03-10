import React, { useEffect } from "react";
import profileImage from "../../asserts/images/tryImage.jpg";
import { useDispatch, useSelector } from 'react-redux'
import { loadData,deleteData } from "../../redux/userRedux/user.actions";
import { USER_KEY } from "../../redux/userRedux/user.reducer";
import Spinner from "../spinnerFolder/Spinner";
import {FaVenusMars, FaMapMarkedAlt, FaMap} from 'react-icons/fa'

const UserApp = () => {
  // initialize dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  // view data from store
  let viewUser = useSelector((state) => {
    return state[USER_KEY];
  });

//   button click
let btnClick = () =>{
    dispatch(loadData());

}
let btnDelete = () =>{
  dispatch(deleteData());

}

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewUser)}</pre> */}
      <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h4 className="font-weight-bold"> Tes Rrgraph</h4>
            </div>

            {/* body section */}
            <div className="card-body">
              {viewUser.loading === true ? (
                <Spinner />
              ) : (
                <React.Fragment>
                  {viewUser.data.length === 0 ? null : (
                    <React.Fragment>
                      {viewUser.data.results.map((item) => {
                        return (
                          <div key={item.email}>
                            <div className="profileContainer">
                              <div className="topContainer centered">
                                <div className="imageContainer centered">
                                  <img src={item.picture.large} alt="" />
                                </div>
                              </div>

                              <div className="downContainer">
                                <div className="profileContent">
                                  <i></i>
                                  <h3> {item.name.first} {item.name.last}</h3>
                                </div>
                                <div className="profileContent">
                                  <span><FaVenusMars/> {item.gender} </span>
                                </div>

                                <div className="profileContent">
                                  <span> <FaMapMarkedAlt/> {item.location.city}</span>
                                </div>

                                <div className="profileContent">
                                  <span><FaMap/> {item.location.country}</span>
                                </div>


                              </div>

                              <div>
                                <button className="btns" onClick={btnClick}>Delete this Profile</button>
                              </div>
                              <div>
                                {/* <button className="btns" onClick={btnDelete}>Delete this Profile</button> */}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserApp;
