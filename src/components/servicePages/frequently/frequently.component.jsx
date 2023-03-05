import './frequently.styles.scss'
import { Accordion } from 'react-bootstrap';

import React, { Fragment } from 'react'

const FrequentlyPage = ({data}) => {
  return (
    <Fragment>
        <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div class="faq-container">
            <div class="accordion">
                <Accordion>
                {
                    data.map(({id, ques, answer})=>(
                        <Accordion.Item eventKey={id}>
                            <Accordion.Header>{ques}</Accordion.Header>
                            <Accordion.Body>{answer}</Accordion.Body>
                        </Accordion.Item>
                    ))
                }
                </Accordion>
            </div>
            </div>
        </div>
    </Fragment>

  )
}

export default FrequentlyPage