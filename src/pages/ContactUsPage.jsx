const ContactUsPage = () => {
    return (
        // <!-- contact-styling -->
        <section>
            <div className=" container contact-container">
                <div className="row align-items-start">
                    <div className="col mt-5">
                        <h1 className="contact-header">
                            Get In Touch
                        </h1>
                        <p className="contact-message">Let's chat, share your story, and spread some positive vibes. Don't hesitate to
                            reach out for a chat and a cup of tea.

                            We love hearing from you!
                        </p>
                    </div>

                    <div className=" mt-5 col-md-8 col-11 col-lg-6 mb-4">
                        <form className="row g-3">
                            <h2 href="#" className="text-start">Email Us</h2>

                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">First Name <em>(required)</em></label>
                                <input type="text" className="form-control  " id="firstName" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Last Name <em>(required)</em></label>
                                {/* <!-- <input type='text' className="form-control" id="inputPassword4" placeholder="Last Name"> --> */}
                                <input type='text' className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address <em>(required)</em></label>
                                {/* <!-- <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"> --> */}
                                <input type="email" className="form-control " id="email" aria-describedby="emailHelp"
                                    placeholder="Email address" />

                                <div className="form-floating mt-3">
                                    <textarea id="message" className="form-control" placeholder="Leave a comment here"
                                        style={{ height: '100px' }}></textarea>
                                    <label htmlFor="floatingTextarea2">Message <em>(required)</em></label>
                                </div>
                                <button type="submit" className="button btn-primary mt-3">Send</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage;
