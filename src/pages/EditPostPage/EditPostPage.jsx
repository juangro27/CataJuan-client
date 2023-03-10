import PostEdit from '../../components/PostEdit/PostEdit'
import { useParams } from 'react-router'


const EditPostPage = () => {

    const { id: postId } = useParams()

    return (
        <>
            <h2>Edit Post</h2>
            <PostEdit postId={postId} />
        </>
    )
}
export default EditPostPage