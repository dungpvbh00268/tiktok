import { memo } from 'react'
import Todo from "./Todo";
import Paragraph from './Paragraph.js'

function Content() {
    return (
        // todo list
        // <Todo />
        <Paragraph/>
    )
}

export default memo(Content)