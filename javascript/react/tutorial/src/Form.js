import { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    function handleNameChange(event) {
        const { value } = event.target;

        setName(value);
    }

    function handleJobChange(event) {
        const { value } = event.target;

        setJob(value);
    }

    function submitForm() {
        props.handleSubmit({ name, job });
        setName('');
        setJob('');
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={handleJobChange} />
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    );
}

export default Form;