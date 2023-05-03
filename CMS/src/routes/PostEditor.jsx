import RichTextEditor from "../components/RichTextEditor";
export default function PostEditor () {
    return(
    <>
        <h1>Post Editor</h1>
        <h4>Title</h4>
        <input type="text" />

        <RichTextEditor />
        <button>Save</button>
        <button>Cancel</button>
        <button>Delete</button>
        <button>Publish</button>
    </>
    )
}

export async function postEditorLoader() {
    return null;
}