import '../css/support-page.css'

export default function SupportPage() {
    return (
        <section className="supportPageSection">

            <h1>Support Page</h1>
            <p>If you have any questions or need assistance, please contact our support team! </p>


            <div className="emailPhoneContainer">

                <section className="phone">
                    <h3>Want to talk to us directly?</h3>
                    <section className="phoneData">
                        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>
                        <p>Оpen hours: 9am - 5pm Mon-Fri</p>
                    </section>
                </section>

                <section className="email" >
                    <h3>Prefer to write us an email?</h3>
                    <section className="emailData">
                        <div className="emailUnit">
                            <h4>Something doesn't work?</h4>
                            <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
                        </div>
                        <div className="emailUnit">
                            <h4>You know how to make our website better?</h4>
                            <p>Email: <a href="mailto:support@example.com">suggestions@example.com</a>
                            </p>
                        </div>
                    </section>
                </section >

            </div>
        </section >
    )
}