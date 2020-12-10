import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FooterForm extends React.Component {
  render() {
    return (

      <form className="container" action="/action_page.php">
        <div className="row justify-content-center">
          <div className="col-8">
            <input type="email" className="form-control" id="email" placeholder="Email Address" name="email" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">SUBMIT</button>
          </div>
        </div>
      </form>

    );
  }
}

export default FooterForm;
