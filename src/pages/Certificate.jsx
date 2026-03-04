import CertificateCard from '../component/common/CertificateCard'
import { Certificate } from '../data/Certificate'
import { motion } from 'framer-motion'

const CertificatePage = ({ limit }) => {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
    visible: { opacity: 1, y: 0 } // Final state (visible)
  };

  // Heading animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 }, // Initial state for the heading
    visible: { opacity: 1, y: 0 } // Final state for the heading
  };

  // Slice the Certificate array to display only the first 'limit' certificates
  const limitedCertificates = Certificate.slice(0, limit)

  return (
    <section className='relative w-full'>
      <div className='w-9/12 mx-auto mt-10 mb-10'>
        {/* Applying Framer Motion to the heading */}
        <motion.h1
          className="mb-10 text-3xl font-bold text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.3, // Adjust duration as needed
            delay: 0.1, // Delay before starting the animation
          }}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the heading is in view
        >
          My Certificate
        </motion.h1>

        <motion.div
          className="mb-10 text-justify lg:text-center"
          variants={headingVariants}
          initial='hidden'
          whileInView='visible'
          transition={{
            duration: 0.5, // Adjust duration as needed
            delay: 0.1 // Delay before starting the animation
          }}
          viewport={{ once: true, amount: 0.5}} // Trigger animation when 20% of the heading is in view
        >
          <p className="mb-4 text-lg">
            Throughout my academic and professional journey, I have successfully earned multiple certifications and completed a 3-month internship focused on front-end development, further enriching my skill set. These achievements include a Diploma in Computer Applications, participation in webinars, and industrial training programs such as Hardware and Networking and Machine Learning using Python. Below are links to my certificates showcasing my dedication to continuous learning and growth.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {limitedCertificates.map((credential, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              transition={{
                duration: 0.4, // Adjust duration if needed
                delay: index * 0.2 // Stagger animation for each card
              }}
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
            >
              <CertificateCard
                logo={credential.logo}
                title={credential.title}
                issuer={credential.issuer}
                issueDate={credential.issueDate}
                skills={credential.skills}
                documentLink={credential.documentLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatePage
