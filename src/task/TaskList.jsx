export default function TaskList({items = []}) {
    return (
        <>
         <h1>List teks</h1>
         <ul>
            {items.map((item, index) => (<li key={index}>{item}</li>)
        )}
         </ul>
        </>
       
    )
}