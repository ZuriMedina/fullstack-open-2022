export const ListApi = ({ title, body }) => {
    return (
        <li>
            <p>{title}</p>
            <small>
                <time>{body}</time>
            </small>
        </li>
    )
}
