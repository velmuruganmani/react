import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Register extends Component {

  constructor() {
    super();

    this.state = {
      customerloginid: "",
      customername: "",
      customerpassword: "",
      /*
      cus_telephone:"9600481532",
      cus_email:"velmani@gmail.com",
      cus_status:"0",
      cus_iso_code:"EUR",
      cus_fax:"123456",
      cus_language:"ENG",
      cus_serial_no:"0",
      app_module_name:"Global Profile",
      app_access_name:"Admin",
      app_name:"Customers Application 1",
      */
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      customerloginid: this.state.customerloginid,
      customername: this.state.customername,
      customerpassword: this.state.customerpassword,
      /*
      cus_telephone: this.state.cus_telephone,
      cus_email: this.state.cus_email,
      cus_status: this.state.cus_status,
      cus_iso_code: this.state.cus_iso_code,
      cus_fax: this.state.cus_fax,
      cus_language: this.state.cus_language,
      cus_serial_no: this.state.cus_serial_no,
      app_module_name: this.state.app_module_name,
      app_access_name: this.state.app_access_name,
      app_name: this.state.app_name
      */
    };

    this.props.createNewUser(newUser, this.props.history);
  }


  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Login ID"
                    name="customerloginid"
                    value={this.state.customerloginid}
                    onChange={this.onChange}
                  />
                </div>                
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="customername"
                    value={this.state.customername}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="customerpassword"
                    value={this.state.customerpassword}
                    onChange={this.onChange}
                  />
                </div>
                {/*
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Telephone Number"
                    name="cus_telephone"
                    value={this.state.cus_telephone}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="cus_email"
                    value={this.state.cus_email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Status"
                    name="cus_status"
                    value={this.state.cus_status}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="ISO Code"
                    name="cus_iso_code"
                    value={this.state.cus_iso_code}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Fax Number"
                    name="cus_fax"
                    value={this.state.cus_fax}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Language"
                    name="cus_language"
                    value={this.state.cus_language}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Serial Number"
                    name="cus_serial_no"
                    value={this.state.cus_serial_no}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Application Module Name"
                    name="app_module_name"
                    value={this.state.app_module_name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Application Name"
                    name="app_name"
                    value={this.state.app_name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Application Access Name"
                    name="app_access_name"
                    value={this.state.app_access_name}
                    onChange={this.onChange}
                  />
                </div>
                */}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);