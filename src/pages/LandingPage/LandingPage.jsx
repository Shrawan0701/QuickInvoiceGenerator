import Logo from "../../components/Logo.jsx";
import {useContext} from "react";
import './LandingPage.css';
import {useClerk, useUser} from "@clerk/clerk-react";
import {useNavigate} from "react-router-dom";
import {AppContext, initialInvoiceData} from "../../context/AppContext.jsx";
import {assets} from "../../assets/assets.js";

const LandingPage = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    const {openSignIn} = useClerk();
    const {setInvoiceData, setSelectedTemplate, setInvoiceTitle} = useContext(AppContext);
    // useEffect(() => {
    //     // Get all elements with data-bs-toggle="tooltip"
    //     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    //     // Initialize a new Bootstrap tooltip for each trigger element
    //     tooltipTriggerList.map(function (tooltipTriggerEl) {
    //         // Ensure window.bootstrap is available
    //         if (window.bootstrap && typeof window.bootstrap.Tooltip === 'function') {
    //             return new window.bootstrap.Tooltip(tooltipTriggerEl);
    //         }
    //         return null;
    //     });
    // }, []); // Empty dependency array means this effect runs only once on mount

    const handleActionButton = () => {
        if (user) {
            setInvoiceData(initialInvoiceData);
            setSelectedTemplate("template1");
            setInvoiceTitle("Create Invoice");
            navigate("/generate");
        } else {
            openSignIn({});
        }
    }

    return (
        <>
            {/* Hero Section: Full-width, centered text with background image */}
            <header id="hero" className="hero-section text-white text-center">
                <div className="container py-5 d-flex flex-column justify-content-center" style={{ minHeight: '85vh' }}>
                    <div className="row py-lg-5">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <h1 className="display-3 fw-bold mb-4">
                                Effortless Invoicing. Professional Results.
                            </h1>
                            <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                                Stop wrestling with spreadsheets. QuickInvoice helps you create and send beautiful invoices in minutes, so you get paid faster.
                            </p>
                            <p>
                                {/* Primary call to action */}
                                <button onClick={handleActionButton} className="btn btn-lg btn-warning fw-bold rounded-pill my-2 mx-1 px-5 py-3">
                                    Generate Your First Invoice
                                </button>
                                {/* Secondary call to action */}
                                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill my-2 mx-1 px-5 py-3">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* How It Works Section: Explains the process in steps using cards */}
            <section id="how-it-works" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 display-5 fw-bold">Get Started in 4 Simple Steps</h2>
                    <div className="row g-4 justify-content-center">
                        {/* Step 1 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-primary-soft">
                                    <img
                                        src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat"
                                        className="rounded-circle"
                                        alt="Enter Invoice Details"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Enter Details</h5>
                                    <p className="card-text text-muted small">
                                        Quickly fill in your clients information, item descriptions, quantities, and prices. Our intuitive form makes it a breeze.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-success-soft">
                                    <img
                                        src="https://placehold.co/150x150/198754/FFFFFF?text=2&font=montserrat"
                                        className="rounded-circle"
                                        alt="Choose Template"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Choose Template</h5>
                                    <p className="card-text text-muted small">
                                        Browse our gallery of professionally designed templates. Pick one that matches your brand and style.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-warning-soft">
                                    <img
                                        src="https://placehold.co/150x150/FFC107/000000?text=3&font=montserrat"
                                        className="rounded-circle"
                                        alt="Preview Invoice"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Preview Invoice</h5>
                                    <p className="card-text text-muted small">
                                        See exactly how your invoice will look before sending it. Make any last-minute adjustments with ease.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-info-soft">
                                    <img
                                        src="https://placehold.co/150x150/0DCAF0/FFFFFF?text=4&font=montserrat"
                                        className="rounded-circle"
                                        alt="Download & Save"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Download & Save</h5>
                                    <p className="card-text text-muted small">
                                        Download your invoice as a PDF, send it directly via email, or save it for your records and future reference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section: Highlights key benefits with images and text */}
            <section id="features" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5 display-5 fw-bold">Why Choose QuickInvoice?</h2>
                    {/* Feature 1 */}
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6">
                            <img
                                src={assets.Landing1}
                                className="img-fluid rounded shadow-lg"
                                alt="Invoice Customization"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold mx-2">Easy to fill invoice details</h3>
                            
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Curated list of templates from gallery.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Add your logo and invoice details.</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Edit fields to your needs.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="row align-items-center gy-4 mt-5 flex-row-reverse"> {/* flex-row-reverse alternates image/text */}
                        <div className="col-md-6">
                            <img
                                src={assets.Landing2}
                                className="img-fluid rounded shadow-lg"
                                alt="Time Saving"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold mx-2">Beautiful Dashboard</h3>
                            
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>View the previous invoices.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Your saved invoices with thumbnail.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Reuse one or more invoices.</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Track the invoices.</li>

                            </ul>
                        </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="row align-items-center gy-4 mt-5">
                        <div className="col-md-6">
                            <img
                                src={assets.Landing3}
                                className="img-fluid rounded shadow-lg"
                                alt="Invoice Customization"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold mx-2">Invoice Preview with Action Buttons</h3>
                            
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Live preview.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Switch between multiple invoices.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>One click to Save, Download and Delete invoices.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Feature 4 */}
                    <div className="row align-items-center gy-4 mt-5 flex-row-reverse"> {/* flex-row-reverse alternates image/text */}
                        <div className="col-md-6">
                            <img
                                src={assets.Landing4}
                                className="img-fluid rounded shadow-lg"
                                alt="Time Saving"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold mx-2">Send invoices instantly</h3>
                           
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Send invoices instantly without leaving the application.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>One click to send invoices.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Send unlimited invoices.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section: Final prompt for users to start */}
            <section id="generate-invoice" className="py-5 text-center bg-primary text-white">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3">Ready to Streamline Your Invoicing?</h2>
                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Join thousands of freelancers and small businesses who trust QuickInvoice.
                        Start creating professional invoices today – its fast, easy, and effective!
                    </p>
                    <button className="btn btn-lg btn-warning fw-bold rounded-pill px-5 py-3" onClick={handleActionButton}>
                        Start Generating Invoices Now
                    </button>
                    
                </div>
            </section>

            {/* Footer: Copyright and social media links */}
            <footer className="py-5 bg-dark text-white-50">
                <div className="container text-center">
                    <Logo />
                    <p className="text-white fw-bold mt-2">QuickInvoice</p>
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} QuickInvoice. All Rights Reserved.
                    </p>
                    <p className="mb-0 small">
                        Crafted with <i className="bi bi-heart-fill text-danger"></i> for freelancers and small businesses.
                    </p>
                    <p className="mt-2">
                        {/* Placeholder social media links */}
                        <a href="#" className="text-white-50 me-2"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="text-white-50 me-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white-50"><i className="bi bi-linkedin"></i></a>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default LandingPage;