import React from 'react';
import notes from '../images/notes.png';
import important_questions from '../images/important_questions.png';
import question_paper from '../images/question_paper.png';
import '../css/offer.css';
export default function Offer(){
    return (
        <div className="offer">
            <h3>What we offer !</h3>
            <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 offer-img"><img src={notes}></img><p>University Notes</p></div>
            <div className="col-md-4 col-sm-6 col-xs-12 offer-img"><img src={important_questions}></img><p>Important Questions</p></div>
            <div className="col-md-4 col-sm-6 col-xs-12 offer-img"><img src={question_paper}></img><p>Previous Year Question Papers</p></div>
            </div>
        </div>
    )
}