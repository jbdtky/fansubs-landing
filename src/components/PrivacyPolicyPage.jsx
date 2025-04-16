import { Container } from "./shared/Container";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer"

export const PrivacyPolicy = () => {
  return (
    <>
        <Navbar />

        <Container>
            <div className="pt-[115px] lg:pt-[180px] text-white">
                <h1 className="text-[48px] lg:text-[106px] font-normal mb-6 impact-text">Privacy Policy</h1>
                <p className="mb-6">
                    At <strong>Fansubs</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">1. Information We Collect</h2>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                    <li><strong>Personal Data:</strong> Name, email address, and other information you voluntarily provide.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and other usage details.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar technologies for functionality and analytics.</li>
                </ul>

                <h2 className="text-2xl font-normal mb-2 impact-text">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                    <li>To provide and improve our services</li>
                    <li>To communicate with you</li>
                    <li>To ensure security and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-normal mb-2 impact-text">3. Sharing Your Information</h2>
                <p className="mb-6">
                    We do not sell your data. We may share information with trusted third parties who assist with hosting, analytics, or as required by law.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">4. Data Security</h2>
                <p className="mb-6">
                    We take data security seriously and use technical and organizational safeguards. However, no system is completely secure.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">5. Your Rights</h2>
                <p className="mb-6">
                    You may request to access, correct, delete, or restrict use of your personal information. Contact us at <a href="mailto:help@fansubs.xyz" className="underline hover:text-[#8120D5] transition-colors duration-300">help@fansubs.xyz</a>.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">6. Third-Party Links</h2>
                <p className="mb-6">
                    Our site may contain links to other websites. We are not responsible for their privacy practices.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">7. Children’s Privacy</h2>
                <p className="mb-6">
                    Fansubs does not knowingly collect information from children under the age of 13. If we become aware of it, we will delete the data.
                </p>

                <h2 className="text-2xl font-normal mb-2 impact-text">8. Contact Us</h2>
                <p className="mb-2">If you have questions about this Privacy Policy, you may contact us at:</p>
                <p>Email: <a href="mailto:help@fansubs.xyz" className="text-white underline hover:text-[#8120D5] transition-colors duration-300">help@fansubs.xyz</a></p>
            </div>
        </Container>

        <Footer />
    </>
  );
};


