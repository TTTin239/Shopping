import React, {useState} from 'react';
import abouts from './data';
import Questions from './Question'
import './About.css'

export default function About() {
    const [questions, setQuestions] = useState(abouts);
    return (
        <div className="main1">
            <div className="container1">
                <h3 style={{textTransform: 'capitalize'}}>Frequently asked questions (FAQ)</h3>
                <section className="info1">
                    {questions.map((question) => {
                        return (
                            <Questions key={question.id} {...question}></Questions>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}