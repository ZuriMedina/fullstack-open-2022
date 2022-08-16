//en lugar de usar props, se puede poner {elementos} que necesitemos pasar al componente por props
//const List = (props) => {
    //si hay un array dentro del objeto, setear el valor al principio como array categories = [] para no petar la app
export const List = ({ id, content, date, categories = [] }) => {
    return (
        <li>
            <p>{content}</p>
            <small>
                <time>{date}</time>
            </small>
            <br />
            {categories.map((category) => (
                <small key={category}>{category}</small>
            ))}
        </li>
    )
}
/*si se usa export const List solo se puede importar con dicho nombre import { List } from './List.js'
Si se usa export default List se puede cometer el fallo de cambiar el nombre en cada arquivo que se traiga import List from './List'
*/
//export default List