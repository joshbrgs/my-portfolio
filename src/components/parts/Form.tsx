import React, { Component } from 'react';
import { sendContactMail } from '../networking/mail-api';

class Form extends Component {
  state = {
    isActive: false,
    formButtonDisabled: false,
    formButtonText: 'Send',
    email: '',
    subject: '',
    content: ''
  };

  handleShow: React.MouseEventHandler = () => {
    this.setState({
      isActive: true
    });
  };

  handleHide: React.MouseEventHandler = () => {
    this.setState({
      isActive: false
    });
  };
  render(): React.ReactElement {
    const {
      formButtonDisabled,
      formButtonText,
      email,
      subject,
      content
    } = this.state;
    const btnSubmit = formButtonDisabled ? 'disabled' : 'btnSubmit';

    return (
      <form>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={email}
            required={true}
            onChange={this.onEmailChange}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="form-control"
            name="subject"
            required={true}
            value={subject}
            onChange={this.onSubjectChange}
          />
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
            cols={30}
            rows={8}
            name="message"
            required={true}
            value={content}
            onChange={this.onContentChange}
          />
          <label htmlFor="message" className="messaging">
            Message
          </label>
        </div>
        <>
          <div className="form-btn">
            <input
              type="submit"
              disabled={formButtonDisabled}
              className={btnSubmit}
              onClick={this.submitForm}
              value={formButtonText}
            />
          </div>
        </>
      </form>
    );
  }
  onEmailChange: any = (event) => {
    this.setState({ email: event.target.value });
  };
  onSubjectChange: any = (event) => {
    this.setState({ subject: event.target.value });
  };
  onContentChange: any = (event) => {
    this.setState({ content: event.target.value });
  };
  submitForm: React.MouseEventHandler = async (event) => {
    event.preventDefault();

    const recipient = process.env.MAIL;
    const { email, subject, content } = this.state;
    const res = await sendContactMail(recipient, email, subject, content);
    if (res.status < 300) {
      this.setState({
        formButtonDisabled: true,
        formButtonText: 'I will be in touch soon!',
        email: '',
        subject: '',
        content: ''
      });
    } else {
      this.setState({ formButtonText: 'Please Fill all fields' });
    }
  };
}

export default Form;
