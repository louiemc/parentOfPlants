import React, { Component } from "react";
import "./Profile.css";
import UserBio from "../../components/UserBio/UserBio";
// import HomeAddress from "../../components/Locations/HomeAddress";
// import WorkAddress from "../../components/Locations/WorkAddress";
// import SignInModal from "../../components/SignIn/index";
// import ImgProfile from "../../components/ProfileImg";
// import API from "../../utils/API";

class Profile extends Component {
  state = {
    isloggedin: false,
    userBio: {
      firstName: " ",
      lastName: " ",
      username: " ",
      email: " ",
      username: " "
    },
    homeAddress: {
      street: " ",
      city: " ",
      state: " ",
      zipcode: " "
    },
    workAddress: {
      streetWork: " ",
      cityWork: " ",
      stateWork: " ",
      zipcodeWork: " "
    },
    currentLocation: {
      lat: 0,
      lng: 0
    }
  };
  //**************************************************
  //DO NOT DELETE THIS CODE. WORKS FOR TEST
  // componentDidMount() {
  //     // this.getLoggedUser();
  //     console.log(this.props);
  //     this.setState({
  //         userBio: {
  //             firstName: "Mariana",
  //             lastName: "Finamori",
  //             email: "mariana@gmail.com",
  //             username: "UserName"
  //         },
  //         homeAddress: {
  //             street: "250 Mercer",
  //             city: "New York",
  //             state: "NY",
  //             zipcode: "10012"
  //         },
  //         workAddress: {
  //             streetWork: "W116th",
  //             cityWork: "New York",
  //             stateWork: "NY",
  //             zipcodeWork: "10000"
  //         },
  //         currentLocation: {
  //             lat: 10,
  //             lng: 10
  //         }
  //     });
  // }
  //***********************************************

  componentDidMount() {
    if (this.props.isSignedIn) {
      this.getLoggedUser();
    }
  }

  getLoggedUser = () => {
    // API.getLoggedUser().then(res => {
    //   console.log("USER DATA: ", res);
    //   this.setState(
    //     {
    //       userBio: {
    //         firstName: res.data.firstName || "",
    //         lastName: res.data.lastName || "",
    //         userName: res.data.username,
    //         email: res.data.email
    //       },
    //       homeAddress: {
    //         street: res.data.homeAddress.street,
    //         city: res.data.homeAddress.city,
    //         state: res.data.homeAddress.state,
    //         zipcode: res.data.homeAddress.zipcode
    //       },
    //       workAddress: {
    //         streetWork: res.data.workAddress.streetWork || "",
    //         cityWork: res.data.workAddress.cityWork || "",
    //         stateWork: res.data.workAddress.stateWork || "",
    //         zipcodeWork: res.data.workAddress.zipcodeWork || ""
    //       },
    //       currentLocation: {
    //         lat: res.data.currentLocation.lat || "",
    //         lng: res.data.currentLocation.lng || ""
    //       }
    //     },
    //     console.log(this.state.homeAddress)
    //   );
    // });
  };

  //Gets the current input
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    // console.log(this.state.email)
  };

  //UPDATE USER NAME EMAIL
  updateUserBio = newBio => {
    const userBio = {
      firstName: newBio.userBio.firstName || this.state.userBio.firstName,
      lastName: newBio.userBio.lastName || this.state.userBio.lastName,
      email: newBio.userBio.email || this.state.userBio.email
    };
    console.log("DEBUG USERBIO OBJ: ", userBio);
    // API.updateUserInfo(userBio)
    //   .then(res => this.getLoggedUser())
    //   .catch(err => console.log("Error updating data", err));
  };

  //UPDATE HOME ADDRESS
  updateHomeAddress = place => {
    //Split the formatted address into an array and trim extra
    const splitPlace = place.split(",").map(place => place.trim());

    //Split the state and zip
    const stateAndZip = splitPlace[2].split(" ");

    //Setting the home address with the formatted address
    const homeAddress = {
      homeAddress: {
        street: splitPlace[0],
        city: splitPlace[1],
        state: stateAndZip[0],
        zipcode: stateAndZip[1]
      }
    };
    console.log(homeAddress);
    // API.updateUserInfo(homeAddress)
    //   .then(res => this.getLoggedUser())
    //   .catch(err => console.log("Error updating data", err));
  };

  //UPDATE WORK ADDRESS
  updateWorkAddress = place => {
    //Split the formatted address into an array and trim extra
    const splitWorkPlace = place.split(",").map(place => place.trim());

    //Split the state and zip
    const stateAndZipWork = splitWorkPlace[2].split(" ");
    console.log("DEBUG STATE AND ZIP: ", stateAndZipWork);
    //Setting Work Address
    const workAddress = {
      workAddress: {
        streetWork: splitWorkPlace[0],
        cityWork: splitWorkPlace[1],
        stateWork: stateAndZipWork[0],
        zipcodeWork: stateAndZipWork[1]
      }
    };
    console.log("DEBUG WORKADDRESS: ", workAddress);
    // API.updateUserInfo(workAddress)
    //   .then(res => this.getLoggedUser())
    //   .catch(err => console.log("Error updating data", err));
  };

  //UPDATA CURRENT LOCATION
  updateCurrentLocation = e => {
    const currentLocation = {
      lat: this.state.currentLocation.lat,
      lng: this.state.currentLocation.lng
    };

    // API.updateUserInfo(currentLocation)
    //   .then(res => this.getLoggedUser())
    //   .catch(err => console.log("Error updating data", err));
  };

  render() {
    console.log("signedIn/Profile: " + this.props.isSignedIn);
    const { userBio, homeAddress, workAddress, currentLocation } = this.state;
    if (this.props.isSignedIn === false) {
      return (
        <div className="you-must-log-in">
          <h4 id="must-log-in" className="red">
            YOU HAVE TO BE LOGGED IN
          </h4>
          {/* <SignInModal
            isSignedIn={this.props.isSignedIn}
            changeLogStatus={this.props.changeLogStatus}
          /> */}
        </div>
      );
    }

    if (this.props.isSignedIn === true) {
      return (
        <div className="profile-component">
          <h3 className="profile-title">PERSONAL INFORMATION</h3>
          <div className="row row-profile">
            {/* <UserBio updateUserBio={this.updateUserBio} userBio={userBio} />
            <HomeAddress
              updateHomeAddress={this.updateHomeAddress}
              homeAddress={this.state.homeAddress}
            />
            <WorkAddress
              updateWorkAddress={this.updateWorkAddress}
              workAddress={workAddress}
            /> */}
          </div>

          {/* <ImgProfile /> */}
        </div>
      );
    }
  }
}

export default Profile;