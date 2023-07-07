import React, {useState} from 'react'

const Quotation = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        service: '',
        description: '',
        budget: '',
        timeHorizon: '',
        payment: '',
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form id='form' method="POST" action="https://formsubmit.co/contact@bespokeprogramming.net">
            
            <div className='about_you'>
                <h4>About You</h4>
                <p>Tell me a little about yourself and your company.</p>
                
                <input className='small' type="text" name="name" placeholder="Your Name" onChange={handleInputChange} required />
                
                <input className='small' type="text" name="name" placeholder="Company Name" onChange={handleInputChange} required />
                
                <input className='small' type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required />
                
                <input className='small' type="tel" name="phoneNumber" placeholder="Contact Number" onChange={handleInputChange} required />
            </div>

            <div className='service_type'>
                <h4>Type of service</h4>
                <p>Help me understand what you're looking for.</p>            
                <select name="service" onChange={handleInputChange} required>
                    <option value="">Choose Service</option>
                    <option value="bespoke">Bespoke 3D Website</option>
                    <option value="spa">Single Page Application</option>
                    <option value="landing">Landing Page</option>
                    <option value="design">Web Development from Your Design</option>
                    <option value="maintenance">Website Maintenance</option>
                </select>
            </div>

            <div className='about_project'>
                <h4>About your project</h4>
                <p>Any extra information you can provide will help me give you a more accurate quote.</p>

                <textarea className='large' name="description" placeholder="Please describe your project in detail" onChange={handleInputChange} required></textarea>        

                <p>Do you have any specific 3D elements in mind? </p>
                <textarea className='large' name="otherElements" placeholder="Please specify (if any)" onChange={handleInputChange}></textarea>
            </div>

            <div className='additional_info'>
                <h4>Additional information</h4>
                <p>What's your estimated budget?</p>
                <input className='small' type="text" name="budget" placeholder="Please specify" onChange={handleInputChange} required />

                <p>What's your project deadline?</p>
                <input className='small' type="text" name="projectDeadline" placeholder="Please specify" onChange={handleInputChange} required />
            </div>

            <div className='payment_method'>
                <h4>Payment method</h4>
                <p>How would you like to finance this project?</p>
                <select name="payment" onChange={handleInputChange} required>
                    <option value="">Select Payment Preference</option>
                    <option value="cash">Cash</option>
                    <option value="crypto">Crypto</option>
                </select>
            </div>

            <div className='submit'>
                <h4>Submit</h4>
                <p>Ready to send? Just hit the button below. I aim to respond to all quote requests within 48 hours.</p>
                <button className='button' type="submit">Submit</button>
            </div>

            <div className='after_submit'>
                <p className='gradientBorder'>Thank you for considering Bespoke Programming for your web development needs. I look forward to learning more about your project!</p>
            </div>
        </form>
    )
}

export default Quotation