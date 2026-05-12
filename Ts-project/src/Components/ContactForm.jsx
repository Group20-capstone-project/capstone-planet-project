import { useState } from "react"

const FORM_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

function ContactForm() {
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`)
      }

      form.reset()
      setStatus({
        type: "success",
        message: "Your message has been submitted successfully.",
      })
    } catch (error) {
      console.error(error)
      setStatus({
        type: "error",
        message: "Something went wrong. Please check your details and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Have Questions About Planetary Science?</h2>

        <p>
          Interested in learning more about space, astronomy,
          or how planetary data is collected and analyzed?
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="fullName">Full Name*</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full name"
                required
                minLength="2"
                maxLength="80"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                maxLength="120"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label htmlFor="phone">Phone Number*</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                required
                pattern="[0-9+()\-\s]{7,20}"
                title="Enter a valid phone number using digits, spaces, +, -, or brackets."
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                required
                minLength="10"
                maxLength="1000"
              />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {status.message && (
            <p className={`form-message ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
