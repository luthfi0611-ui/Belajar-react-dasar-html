import {useImmer} from "use-immer";

export default function ContactForm() {
    const [contact, Setcontact] = useImmer({
        name: "",
        message: "",
    })

    function handleNameChange(e) {
        Setcontact(contact => {
            contact.name = e.target.value
        })
    }

    function handleMessageChange(e) {
        Setcontact(contact => {
            contact.message = e.target.value
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
             <form>
            <input type="text" value={contact.name} onChange={handleNameChange} />
            <br />
            <br />
            <input type="text" value={contact.message} onChange={handleMessageChange} />
        </form>
        <h1>Contact Form</h1>
        <p>Name : {contact.name}</p>
        <p>Message : {contact.message}</p>
        </div>
       
    )
}