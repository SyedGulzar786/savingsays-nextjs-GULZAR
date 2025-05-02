import React, {useState} from 'react';
import './FAQs.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const FAQs = ({store}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="jump-faqs" className="faq-section container my-5">
            {/* Conditionally render the heading if there are FAQs */}
            <h3 className="text-center mb-4">Frequently Asked Questions</h3>
            <div className="row">
                {store?.faqs && store?.faqs?.map((faq, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                        <div className="faq-item border p-3">
                            <h5
                                className="faq-question d-flex justify-content-between align-items-center"
                                onClick={() => toggleFAQ(index)}
                                style={{cursor: 'pointer'}}
                            >
                                {faq.question}
                                <FontAwesomeIcon size="1x" icon={activeIndex === index ? faMinus : faPlus}/>
                            </h5>
                            {activeIndex === index && (
                                <p className="faq-answer" dangerouslySetInnerHTML={{__html: faq.answer}}></p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FAQs;